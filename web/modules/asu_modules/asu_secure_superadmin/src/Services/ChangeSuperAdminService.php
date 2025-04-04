<?php

namespace Drupal\asu_secure_superadmin\Services;

use Drupal\cas\Service\CasUserManager;
use Drupal\Component\EventDispatcher\ContainerAwareEventDispatcher;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\user\Entity\User;
use Drupal\user\Event\AccountCancelEvent;
use Drupal\Core\Password\DefaultPasswordGenerator;

/**
 * Change the SuperAdmin (uid 1) to a new user.
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
   * The messenger service.
   *
   * @var \Drupal\Core\Messenger\MessengerInterface
   */
  protected $messenger;

  /**
   * An array of ASU Enterprise Technology admins.
   *
   * @var string[]
   */
  public const ETADMINS = [
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
  ];

  /**
   * Constructs a new ChangeSuperAdminService object.
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager, ContainerAwareEventDispatcher $eventDispatcher, CasUserManager $casUserManager, DefaultPasswordGenerator $passwordGenerator, MessengerInterface $messenger) {
    $this->entityTypeManager = $entityTypeManager;
    $this->eventDispatcher = $eventDispatcher;
    $this->casUserManager = $casUserManager;
    $this->passwordGenerator = $passwordGenerator;
    $this->messenger = $messenger;
  }

  /**
   * Change the SuperAdmin (uid 1) to a new user.
   *
   * @throws \Exception
   */
  public function changeSuperAdmin() :void {
    /** @var \Drupal\user\Entity\User $user1 */
    $user1 = User::load(1);
    $original_name = $user1->get('name')->value;
    $original_from_config = \Drupal::configFactory()->get('asu_secure_superadmin.settings')
      ->get('original_superadmin');
    if ($original_name === 'etsuper' && isset($original_from_config)) {
      $this->messenger->addError('The SuperAdmin account has already been secured.');
      return;
    }
    // Duplicate the user entity and trigger the event to reassign content.
    /** @var \Drupal\user\Entity\User $newUser */
    $newUser = $user1->createDuplicate();
    $newUser->isNew();
    $newUser->set('uid', NULL);
    $user1->set('name', 'etsuper');
    $user1->set('mail', 'DL.WG.ET.WebPlatforms@exchange.asu.edu');
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
    $roles = $newUserReloaded->getRoles();
    if (in_array('administrator', $roles) && !in_array($original_name, self::ETADMINS)) {
      $newUserReloaded->removeRole('administrator');
      $newUserReloaded->save();
    }
    if (!in_array('site_builder', $roles)) {
      $newUserReloaded->addRole('site_builder');
      $newUserReloaded->save();
    }
    $user1->block();
    $user1->save();
  }

}
