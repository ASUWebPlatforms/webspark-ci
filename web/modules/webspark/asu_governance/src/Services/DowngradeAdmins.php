<?php

declare(strict_types=1);

namespace Drupal\asu_governance\Services;

use Drupal\asu_governance\Batch\Batch;
use Drupal\asu_secure_superadmin\Services\ChangeSuperAdminService;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\user\Entity\User;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;

/**
 * @todo Add class description.
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

    try {
      Batch::run($users);
    } catch (\Exception $e) {
      $this->logger->get('asu_governance')->error($e->getMessage() . PHP_EOL . '<pre>' . $e->getTraceAsString() . '</pre>');
    }
  }

}
