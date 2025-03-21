<?php

namespace Drupal\asu_reparent_superadmin\Services;

use Drupal\cas\Service\CasUserManager;
use Drupal\Component\EventDispatcher\ContainerAwareEventDispatcher;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\user\Entity\User;
use Drupal\user\Event\AccountCancelEvent;
use Drupal\Core\Password\DefaultPasswordGenerator;

/**
 * Reparent the SuperAdmin's content to a new user.
 */
class ReparentSuperAdminService {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected EntityTypeManagerInterface $entityTypeManager;

  /**
   * The event dispatcher.
   *
   * @var \Drupal\Component\EventDispatcher\ContainerAwareEventDispatcher
   */
  protected $eventDispatcher;

  /**
   * The CAS user manager.
   *
   * @var \Drupal\cas\Service\CasUserManager
   */
  protected $casUserManager;

  /**
   * The password generator.
   *
   * @var \Drupal\Core\Password\DefaultPasswordGenerator
   */
  protected $passwordGenerator;

  /**
   * Constructs a new ReparentSuperAdminService object.
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager, ContainerAwareEventDispatcher $eventDispatcher, CasUserManager $casUserManager, DefaultPasswordGenerator $passwordGenerator) {
    $this->entityTypeManager = $entityTypeManager;
    $this->eventDispatcher = $eventDispatcher;
    $this->casUserManager = $casUserManager;
    $this->passwordGenerator = $passwordGenerator;
  }

  /**
   * Change the SuperAdmin (uid 1) to a new user.
   *
   * @param int $uid
   *   The target username of the new superadmin.
   *
   * @throws \Exception
   */
  public function reparentSuperAdmin(int $uid) :void {
    /** @var \Drupal\user\Entity\User $user1 */
    $user1 = User::load(1);
    $method = 'user_cancel_block_reassign_content_admin';
    $context = [
      'user_cancel_notify' => FALSE,
      'reassign_content_admin' => $uid,
    ];
    // Trigger the AccountCancelEvent.
    $this->triggerAccountCancelEvent($user1, $method, $context);
  }

  /**
   * Trigger the AccountCancelEvent.
   *
   * @param \Drupal\user\Entity\User $account
   *   The user account to be cancelled.
   * @param string $method
   *   The cancellation method.
   * @param array $context
   *   A context array. Typically, an array of submitted form values.
   */
  public function triggerAccountCancelEvent(User $account, string $method, array $context = []): void {

    // Create the AccountCancelEvent.
    $event = new AccountCancelEvent($account, $method, $context);

    // Dispatch the event.
    $this->eventDispatcher->dispatch($event, AccountCancelEvent::class);
  }

}
