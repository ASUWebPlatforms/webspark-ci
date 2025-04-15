<?php

namespace Drupal\asu_reparent_superadmin\Services;

use Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException;
use Drupal\Component\Plugin\Exception\PluginNotFoundException;
use Drupal\Core\Batch\BatchBuilder;
use Drupal\Core\Link;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Extension\ModuleExtensionList;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Render\Renderer;
use Drupal\Core\StringTranslation\TranslationManager;
use Drupal\user\UserInterface;
use Drupal\Core\DependencyInjection\DependencySerializationTrait;

/**
 * Provides a service for updating multiple entities at once.
 */
class EntityMassUpdateService {
  use DependencySerializationTrait;

  /**
   * Constructs a new EntityMassUpdateService object.
   */
  public function __construct(
    private readonly EntityTypeManagerInterface $entityTypeManager,
    private readonly ModuleExtensionList $moduleExtensionList,
    private readonly MessengerInterface $messenger,
    private readonly Renderer $renderer,
    private readonly TranslationManager $translationManager,
    private readonly LoggerChannelFactoryInterface $logger,
  ) {}

  /**
   * Updates all entities in the array with the passed-in field values.
   *
   * @param string $entity_type_id
   *   The entity type ID of the entities to update.
   * @param \Drupal\user\UserInterface $account
   *   The user account whose entities should be updated.
   * @param array $updates
   *   Array of key/value pairs with entity field names and the value to update
   *   that field to.
   * @param string $langcode
   *   (optional) The language updates should be applied to. If none is
   *   specified all available languages are processed.
   * @param bool $load
   *   (optional) TRUE if $entities contains an array of entity IDs to be
   *   loaded, FALSE if it contains fully loaded entities. Defaults to FALSE.
   * @param bool $revisions
   *   (optional) TRUE if $entities contains an array of revision IDs instead
   *   of entity IDs. Defaults to FALSE; will be ignored if $load is FALSE.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function entityMassUpdate(string $entity_type_id, UserInterface $account, array $updates, $langcode = NULL, $load = FALSE, $revisions = FALSE) :void {
    try {
      $entities = $this->entityTypeManager->getStorage($entity_type_id)
        ->getQuery()
        ->accessCheck(FALSE)
        ->condition('uid', $account->id())
        ->execute();
    }
    catch (InvalidPluginDefinitionException | PluginNotFoundException $e) {
      $this->messenger->addWarning(t('No @type entities found for the user to reparent.', ['@type' => $entity_type_id]));
      return;
    }

    // We use batch processing to prevent timeout when updating a large number
    // of entities.
    if (count($entities) > 10) {
      $batch_builder = (new BatchBuilder())
        ->addOperation([$this, 'entityMassUpdateBatchProcess'], [
          $entity_type_id,
          $entities,
          $updates,
          $langcode,
          $load,
          $revisions,
        ])
        ->setFinishCallback([$this, 'entityMassUpdateBatchFinished'])
        ->setTitle(t('Processing'))
        ->setErrorMessage(t('The update has encountered an error.'))
        // We use a single multi-pass operation, so the default
        // 'Remaining x of y operations' message will be confusing here.
        ->setProgressMessage('');
      $batch = $batch_builder->toArray();
      batch_set($batch);
    }
    else {
      try {
        $storage = $this->entityTypeManager->getStorage($entity_type_id);
      }
      catch (InvalidPluginDefinitionException | PluginNotFoundException $e) {
        $this->logger->get('asu_reparent_superadmin')->warning(t('No @type entities found for the user to reparent.', ['@type' => $entity_type_id]));
        return;
      }
      if ($entities) {
        // Load the entities if no revisions.
        if ($load && !$revisions) {
          $entities = $storage->loadMultiple($entities);
        }
        // Update the entities.
        foreach ($entities as $entity) {
          // Load the entities if revisions.
          if ($load && $revisions) {
            $entity = $storage->loadRevision($entity);
          }
          assert($entity instanceof EntityInterface);
          $this->entityMassUpdateHelper($entity, $updates, $langcode);
        }
      }
      else {
        $this->messenger->addWarning(t('No @type entities found for the user to reparent.', ['@type' => ucwords($entity_type_id)]));
      }
    }
  }

  /**
   * Updates individual entities.
   *
   * @param \Drupal\Core\Entity\EntityInterface $entity
   *   An entity to update.
   * @param array $updates
   *   Associative array of updates.
   * @param string $langcode
   *   (optional) The language updates should be applied to. If none is
   *   specified all available languages are processed.
   *
   * @return \Drupal\Core\Entity\EntityInterface
   *   An updated entity object.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   *
   * @see entityMassUpdate()
   */
  public function entityMassUpdateHelper(EntityInterface $entity, array $updates, $langcode = NULL) :EntityInterface {
    $langcodes = isset($langcode) ? [$langcode] : array_keys($entity->getTranslationLanguages());
    // For efficiency manually save the original entity before applying changes.
    $entity->original = clone $entity;
    foreach ($langcodes as $langcode) {
      foreach ($updates as $name => $value) {
        $entity->getTranslation($langcode)->$name = $value;
      }
    }
    $entity->save();
    return $entity;
  }

  /**
   * Implements callback_batch_operation().
   *
   * Executes a batch operation for entityMassUpdate().
   *
   * @param string $entity_type_id
   *   The entity type ID of the entities to update.
   * @param array $entities
   *   An array of entity IDs.
   * @param array $updates
   *   Associative array of updates.
   * @param string $langcode
   *   The language updates should be applied to. If none is specified all
   *   available languages are processed.
   * @param bool $load
   *   TRUE if $entities contains an array of entity IDs to be loaded, FALSE if
   *   it contains fully loaded entities.
   * @param bool $revisions
   *   (optional) TRUE if $entities contains an array of revision IDs instead
   *   of
   *   entity IDs. Defaults to FALSE; will be ignored if $load is FALSE.
   * @param array|ArrayAccess $context
   *   An array of contextual key/values.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   * @throws \Drupal\Core\Entity\EntityMalformedException
   */
  public function entityMassUpdateBatchProcess(string $entity_type_id, array $entities, array $updates, $langcode, $load, $revisions, &$context) :void {
    if (!isset($context['sandbox']['progress'])) {
      $context['sandbox']['progress'] = 0;
      $context['sandbox']['max'] = count($entities);
      $context['sandbox']['entities'] = $entities;
    }

    // Process entities by groups of 5.
    try {
      $storage = $this->entityTypeManager->getStorage($entity_type_id);
    }
    catch (InvalidPluginDefinitionException | PluginNotFoundException $e) {
      $this->logger->get('asu_reparent_superadmin')->error('The entity type @type does not exist.', ['@type' => $entity_type_id]);
    }
    $count = min(5, count($context['sandbox']['entities']));
    for ($i = 1; $i <= $count; $i++) {
      // Load each entity, reset the values, and save it.
      $entity_id = array_shift($context['sandbox']['entities']);
      $entity = $load ? $storage->load($entity_id) : $entity_id;
      if ($load) {
        $entity = $revisions ?
          $storage->loadRevision($entity->id()) : $storage->load($entity->id());
      }
      if ($entity) {
        $entity = $this->entityMassUpdateHelper($entity, $updates, $langcode);
        // Store result for post-processing in the finished callback.
        $context['results'][] = Link::fromTextAndUrl($entity->label(), $entity->toUrl())
          ->toString();
      }

      // Update our progress information.
      $context['sandbox']['progress']++;
    }

    // Inform the batch engine that we are not finished,
    // and provide an estimation of the completion level we reached.
    if ($context['sandbox']['progress'] != $context['sandbox']['max']) {
      $context['finished'] = $context['sandbox']['progress'] / $context['sandbox']['max'];
    }
  }

  /**
   * Implements callback_batch_finished().
   *
   * Reports the 'finished' status of batch operation for entityMassUpdate().
   *
   * @param bool $success
   *   A boolean indicating whether the batch mass update operation
   *   successfully
   *   concluded.
   * @param string[] $results
   *   An array of rendered links to entities updated via the batch mode
   *   process.
   * @param array $operations
   *   An array of function calls (not used in this function).
   *
   * @throws \Exception
   *
   * @see entityMassUpdateBatchProcess()
   */
  public function entityMassUpdateBatchFinished($success, array $results, array $operations) :void {
    if ($success) {
      $this->messenger->addStatus(t('The etsuper account\'s content has been successfully reparented.'));
    }
    else {
      $this->messenger
        ->addError(t('An error occurred and processing did not complete.'));
      $message = $this->translationManager
        ->formatPlural(count($results), '1 item successfully processed:', '@count items successfully processed:');
      $item_list = [
        '#theme' => 'item_list',
        '#items' => $results,
      ];
      $message .= $this->renderer->render($item_list);
      $this->messenger->addStatus($message);
    }
  }

}
