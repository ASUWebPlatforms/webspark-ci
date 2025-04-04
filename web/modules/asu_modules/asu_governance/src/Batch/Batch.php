<?php

namespace Drupal\asu_governance\Batch;

use Drupal\Core\Batch\BatchBuilder;
use Drupal\user\Entity\User;

/**
 * Provides the batch callbacks from the various sources.
 */
class Batch {

  /**
   * Run the batch process.
   */
  public static function run(array $batch_size): void {
    // The Batch API needs an array of data to process.
    $items = $batch_size;

    // Start a batch process.
    $operation_callback = [
      Batch::class,
      'operationCallback',
    ];
    $finish_callback = [
      Batch::class,
      'finishedCallback',
    ];

    // Define the messaging the user should see by default.
    $batch_builder = (new BatchBuilder())
      ->setTitle(t('Downgrade Administrators'))
      ->setFinishCallback($finish_callback)
      ->setInitMessage(t('Starting up.'))
      ->setProgressMessage(t('Currently processing.'))
      ->setErrorMessage(t('Process has encountered an error.'))
      ->addOperation($operation_callback, [$items]);

    $batch_storage = \Drupal::service('batch.storage');
    $batch_id = $batch_storage->getId();

    // Set the batch.
    batch_set($batch_builder->toArray());

    $batch = &batch_get();
    if (!empty($batch)) {
      if (empty($batch['id'])) {
        $batch['id'] = $batch_id; // Manually set the ID.
      }
      // Save the batch ID to state storage.
      \Drupal::state()->set('downgrade_admin_batch', $batch['id']);
    }
  }

  /**
   * Process callback for the batch set in the form.
   *
   * @param array $items
   *   The items to process.
   * @param array|\DrushBatchContext $context
   *   The batch context.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public static function operationCallback(array $items, &$context): void {
    // Context sandbox is empty on initial load. Here we take care of things
    // that need to be done once only. This context is then subsequently
    // available for every subsequent batch run.
    if (empty($context['sandbox'])) {
      $context['sandbox']['progress'] = 0;
      $context['sandbox']['errors'] = [];
      $context['sandbox']['max'] = count($items);
    }

    // If we have nothing to process, mark the batch as 100% complete (0 = not
    // started, eg 0.5 = 50% completed, 1 = 100% completed).
    if (!$context['sandbox']['max']) {
      $context['finished'] = 1;

      return;
    }

    // If we haven't yet processed all.
    if ($context['sandbox']['progress'] < $context['sandbox']['max']) {
      // This is a counter that is passed from batch run to batch run.
      if (isset($items[$context['sandbox']['progress']])) {
        $item = $items[$context['sandbox']['progress']];

        if ($item) {
          // Let the editor know info about what is being run.
          // If via drush command or drush updatedb, also let the user know the
          // progress percentage as they will not see the progress bar.
          if (PHP_SAPI === 'cli') {
            $context['message'] = t('[@percentage] Updating item: @item', [
              '@percentage' => round(($context['sandbox']['progress'] / $context['sandbox']['max']) * 100) . '%',
              '@item' => $context['sandbox']['progress'],
            ]);
          }
          else {
            $context['message'] = t('Updating item: @item', [
              '@item' => $context['sandbox']['progress'],
            ]);
          }

          // Preform the business logic.
          self::processBatch($item);
        }
        else {
          // Failed to process this particular item.
          $context['sandbox']['errors'][] = t('Unable to process item @item', [
            '@item' => $items[$context['sandbox']['progress']],
          ]);
        }
      }
      // Results are passed to the finished callback.
      $context['results']['items'][] = $items[$context['sandbox']['progress']];
      $context['sandbox']['progress']++;
    }

    // When progress equals max, finished is '1' which means completed. Any
    // decimal between '0' and '1' is used to determine the percentage of
    // the progress bar.
    $context['finished'] = $context['sandbox']['progress'] / $context['sandbox']['max'];
  }

  /**
   * This method will be run on each item in the batch.
   *
   * @param \Drupal\user\Entity\User $item
   *   The user entity to process.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public static function processBatch(User $item): void {
    if (empty($item)) {
      \Drupal::logger('asu_governance')->notice('Nothing to process.');
    }

    $item->removeRole('administrator');
    $item->addRole('site_builder');
    $item->save();

  }

  /**
   * Batch finished callback.
   *
   * @param bool $success
   *   Batch encountered errors or not.
   * @param array $results
   *   The processed chapters.
   * @param array $operations
   *   The different batches that were run.
   */
  public static function finishedCallback(bool $success, array $results, array $operations): void {
    if ($success) {
      $count = array_key_exists('items', $results) ? count($results['items']) : 0;
      // The 'success' parameter means no fatal PHP errors were detected.
      $message = t('@count items were successfully processed.', [
        '@count' => $count,
      ]);
    }
    else {
      // A fatal error occurred.
      $message = t('There was an error with the asu_governance batch processor.');
      \Drupal::messenger()->addError($message);
      \Drupal::logger('asu_governance')->error($message . PHP_EOL . ' Backtrace: ' . print_r(debug_backtrace(), TRUE));
    }
  }

}
