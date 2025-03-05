<?php

declare(strict_types=1);

namespace Drupal\asu_governance\Services;

use Drupal\asu_governance\Batch\Batch;
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
  public function __construct(private readonly LoggerChannelFactoryInterface $logger) {
  }

  /**
   * @todo Add method description.
   */
  public function makeSiteBuilders(): void {
    $query = \Drupal::entityQuery('user')
      ->accessCheck(FALSE)
      ->condition('roles', 'administrator');
    $uids = $query->execute();
    $users = \Drupal::entityTypeManager()->getStorage('user')->loadMultiple($uids);

    $etAsurites = [
      'rmlebla1',
      'dornela3',
      'tkaiserb',
      'tlstarr',
      'mmilner6',
      'apersky',
      'mlsamuel',
      'cphill',
      'ddavis35',
      'gamille7',
      'igardun1',
      'dlevy4',
      'abrockha',
      'jmitriat',
      'tbutterf',
      'stwilli2',
      'imorale2',
      'ddoozan',
      'kdmarks',
      'mmilner6',
      'mjenki10',
      'oatkar',
    ];

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
