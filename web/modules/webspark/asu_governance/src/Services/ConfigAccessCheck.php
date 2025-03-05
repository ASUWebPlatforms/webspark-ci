<?php

namespace Drupal\asu_governance\Services;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Routing\Access\AccessInterface;

/**
 * Checks access for the config management.
 */
class ConfigAccessCheck implements AccessInterface {

  /**
   * Constructs a new ConfigAccessCheck object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager.
   */
  public function __construct(private readonly EntityTypeManagerInterface $entityTypeManager) {
  }

  /**
   * Handles the access checking.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The account to check access for.
   *
   * @return \Drupal\Core\Access\AccessResult
   *   The access result.
   */
  public function access(AccountInterface $account): AccessResult {
    if ($account->isAnonymous()) {
      return AccessResult::forbidden();
    }

    /** @var \Drupal\user\Entity\User $user */
    $user = $this->entityTypeManager->getStorage('user')->load($account->id());
    $allowConfigAccess = \Drupal::config('asu_governance.settings')->get('allow_config_access');
    if (($allowConfigAccess && in_array('site_builder', $user->getRoles(), TRUE)) || in_array('administrator', $user->getRoles(), TRUE)) {
      return AccessResult::allowed();
    }

    return AccessResult::forbidden();
  }

}
