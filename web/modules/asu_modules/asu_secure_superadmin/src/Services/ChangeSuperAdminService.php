<?php

namespace Drupal\asu_secure_superadmin\Services;

use Drupal\cas\Service\CasUserManager;
use Drupal\Component\EventDispatcher\ContainerAwareEventDispatcher;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\user\Entity\User;
use Drupal\user\Event\AccountCancelEvent;
use Drupal\Core\Password\DefaultPasswordGenerator;

/**
 * Change the super admin (uid 1) to a new user.
 */
class ChangeSuperAdminService {

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
   * Constructs a new ChangeSuperAdminService object.
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager, ContainerAwareEventDispatcher $eventDispatcher, CasUserManager $casUserManager, DefaultPasswordGenerator $passwordGenerator) {
    $this->entityTypeManager = $entityTypeManager;
    $this->eventDispatcher = $eventDispatcher;
    $this->casUserManager = $casUserManager;
    $this->passwordGenerator = $passwordGenerator;
  }

  /**
   * Change the super admin (uid 1) to a new user.
   *
   * @throws \Exception
   */
  public function changeSuperAdmin() :void {
    /** @var \Drupal\user\Entity\User $user1 */
    $user1 = User::load(1);
    $original_name = $user1->get('name')->value;
    // Duplicate the user entity and trigger the event to reassign content.
    /** @var \Drupal\user\Entity\User $newUser */
    $newUser = $user1->createDuplicate();
    $newUser->isNew();
    $newUser->set('uid', NULL);
    $user1->set('name', 'etsuper');
    $user1->set('mail', 'DL.WG.ET.WebPlatformsAcquia@exchange.asu.edu');
    // Remove roles from the old user.
    $roles = $user1->getRoles();
    foreach ($roles as $role) {
      $user1->removeRole($role);
    }
    $newPassword = $this->passwordGenerator->generate(15);
    $user1->set('pass', $newPassword);
    $oldCasUsername = $this->casUserManager->getCasUsernameForAccount($user1->id()) ? $this->casUserManager->removeCasUsernameForAccount($user1) : FALSE;
    $user1->save();
    $newUser->save();
    if ($oldCasUsername) {
      $this->casUserManager->setCasUsernameForAccount($newUser, $oldCasUsername);
    }
    // Reload the newUser object to get the new uid.
    $newUserReloaded = user_load_by_name($original_name);
    $method = 'user_cancel_block_reassign_content_admin';
    $context = [
      'user_cancel_notify' => FALSE,
      'reassign_content_admin' => $newUserReloaded->id(),
    ];
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
