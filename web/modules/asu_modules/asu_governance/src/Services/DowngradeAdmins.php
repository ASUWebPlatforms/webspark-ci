<?php

declare(strict_types=1);

namespace Drupal\asu_governance\Services;

use Drupal\asu_governance\Batch\Batch;
use Drupal\asu_secure_superadmin\Services\ChangeSuperAdminService;
use Drupal\user\Entity\User;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;

/**
 * A service to downgrade ASU Enterprise Technology admins to site builders.
 */
final class DowngradeAdmins {

  /**
   * Constructs a new DowngradeAdmins object.
   */
  public function __construct(private readonly LoggerChannelFactoryInterface $logger, private readonly ChangeSuperAdminService $changeSuperAdminService) {
  }

  /**
   * Makes ASU Enterprise Technology admins site builders.
   */
  public function makeSiteBuilders(): void {
    $query = \Drupal::entityQuery('user')
      ->accessCheck(FALSE)
      ->condition('roles', 'administrator');
    $uids = $query->execute();
    $users = \Drupal::entityTypeManager()->getStorage('user')->loadMultiple($uids);

    $etAsurites = $this->changeSuperAdminService::ETADMINS;

    $users = array_values(array_filter($users, function ($user) use ($etAsurites) {
      assert($user instanceof User);
      return !in_array($user->getAccountName(), $etAsurites);
    }));

    Batch::run($users);
    // Run manually if not part of a site install, update or form submission.
    if (!((defined('MAINTENANCE_MODE') && (MAINTENANCE_MODE === 'update' || MAINTENANCE_MODE === 'install')) || \Drupal::request()->isMethod('POST'))) {
      // Process the batch.
      $batch = &batch_get();
      $batch_id = \Drupal::state()->get('downgrade_admin_batch');

      foreach ($batch['sets'] as $key => $batch_set) {
        if ($batch_set['title']->__toString() === 'Downgrade Administrators') {
          $process_info = [
            'current_set' => $key,
            'id' => $batch_id,
            'progressive' => FALSE,
          ];
          $batch += $process_info;

          // Move only the specified set's operations to the queue.
          _batch_populate_queue($batch, $key);

          // Process only the queued operations.
          require_once DRUPAL_ROOT . '/core/includes/batch.inc';
          _batch_process();
        }
      }
    }
  }

}
