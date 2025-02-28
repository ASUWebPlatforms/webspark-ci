<?php

namespace Drupal\asu_secure_superadmin\EventSubscriber;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\user\Event\AccountCancelEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\asu_secure_superadmin\Services\EntityMassUpdateService;

/**
 * Performs mass entity operations when a user account is cancelled.
 */
class EntityAccountCancelSubscriber implements EventSubscriberInterface {

  /**
   * The entity type manager service.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected EntityTypeManagerInterface $entityTypeManager;

  /**
   * The module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected ModuleHandlerInterface $moduleHandler;

  /**
   * The entity mass update service.
   *
   * @var \Drupal\asu_secure_superadmin\Services\EntityMassUpdateService
   */
  protected EntityMassUpdateService $entityMassUpdateService;

  /**
   * Constructs a new EntityAccountCancelSubscriber object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager service.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $moduleHandler
   *   The module handler service.
   * @param \Drupal\asu_secure_superadmin\Services\EntityMassUpdateService $entityMassUpdateService
   *   The entity mass update service.
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager, ModuleHandlerInterface $moduleHandler, EntityMassUpdateService $entityMassUpdateService) {
    $this->entityTypeManager = $entityTypeManager;
    $this->moduleHandler = $moduleHandler;
    $this->entityMassUpdateService = $entityMassUpdateService;
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents(): array {
    return [
      // Act before AccountCancelSubscriber::onUserAccountCancel()
      // @see \Drupal\user\EventSubscriber\AccountCancelSubscriber::onUserAccountCancel()
      AccountCancelEvent::class => ['onUserAccountCancel', 60],
    ];
  }

  /**
   * Acts on user account cancel event.
   *
   * @param \Drupal\user\Event\AccountCancelEvent $event
   *   The user cancel event.
   */
  public function onUserAccountCancel(AccountCancelEvent $event): void {
    $method = $event->getMethod();
    $context = $event->getContext();
    if ($method === 'user_cancel_block_reassign_content_admin') {
      $new_uid = $context['reassign_content_admin'];
      // Entities to update.
      $entity_types = ['media', 'node', 'webform_submission', 'comment'];
      foreach ($entity_types as $entity_type) {
        $this->entityMassUpdateService->entityMassUpdate($entity_type, $event->getAccount(), [
          'uid' => $new_uid,
          'revision_uid' => $new_uid,
        ], NULL, TRUE);
      }
    }
  }

}
