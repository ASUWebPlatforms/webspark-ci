<?php

namespace Drupal\asu_secure_superadmin\EventSubscriber;

use Drupal\Core\Batch\BatchBuilder;
use Drupal\Core\Session\AnonymousUserSession;
use Drupal\user\Event\AccountCancelEvent;
use Drupal\user\EventSubscriber\AccountCancelSubscriber;
use Drupal\user\UserInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Custom user account cancellation subscriber.
 */
class CustomUserCancelSubscriber extends AccountCancelSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents(): array {
    return [
      // Act before all Drupal core subscribers.
      // @see \Drupal\user\EventSubscriber\AccountCancelSubscriber::onUserAccountCancel()
      AccountCancelEvent::class => ['onUserAccountCancel', 55],
    ];
  }

  /**
   * Acts on user account cancel event.
   *
   * @param \Drupal\user\Event\AccountCancelEvent $event
   *   The user cancel event.
   */
  public function onUserAccountCancel(AccountCancelEvent $event): void {
    $batch_builder = (new BatchBuilder())
      ->setTitle(t('Cancelling user account'))
      ->addOperation(static::class . '::doCustomCancelAccount', [
        $event->getAccount(),
        $event->getMethod(),
        $event->getContext(),
      ]);
    batch_set($batch_builder->toArray());
    $event->stopPropagation();
  }

  /**
   * Cancels a user account.
   *
   * Note that this method is declared static to avoid serialization of a huge
   * object by the batch API.
   *
   * @param \Drupal\user\UserInterface $account
   *   The user account to be cancelled.
   * @param string $method
   *   The cancellation method.
   * @param array $context
   *   A context array. Typically, an array of submitted form values.
   */
  public static function doCustomCancelAccount(UserInterface $account, string $method, array $context): void {
    $logger = \Drupal::logger('user');
    $messenger = \Drupal::messenger();

    switch ($method) {
      case 'user_cancel_block':
      case 'user_cancel_block_unpublish':
      default:
        if (!in_array($method, [
          'user_cancel_block',
          'user_cancel_block_unpublish',
        ], TRUE)) {
          @trigger_error("Using " . __METHOD__ . "() subscriber to handle user account cancellation methods other than user_cancel_block, user_cancel_block_unpublish, user_cancel_reassign and user_cancel_delete is deprecated in drupal:10.0.0 and is removed from drupal:11.0.0. The '$method' user account cancellation method has been used. Third-party modules should add their own subscriber to handle custom cancellation methods. See https://www.drupal.org/node/3279455", E_USER_DEPRECATED);
        }

        // Send account blocked notification if option was checked.
        if (!empty($context['user_cancel_notify'])) {
          _user_mail_notify('status_blocked', $account);
        }
        $account->block()->save();
        $messenger->addStatus(t('Account %name has been disabled.', [
          '%name' => $account->getDisplayName(),
        ]));
        $logger->notice('Blocked user: %name %email.', [
          '%name' => $account->getAccountName(),
          '%email' => '<' . $account->getEmail() . '>',
        ]);
        break;

      case 'user_cancel_reassign':
      case 'user_cancel_delete':
        // Send account canceled notification if option was checked.
        if (!empty($context['user_cancel_notify'])) {
          _user_mail_notify('status_canceled', $account);
        }
        $account->delete();
        $messenger->addStatus(t('Account %name has been deleted.', [
          '%name' => $account->getDisplayName(),
        ]));
        $logger->notice('Deleted user: %name %email.', [
          '%name' => $account->getAccountName(),
          '%email' => '<' . $account->getEmail() . '>',
        ]);
        break;

      case 'user_cancel_block_reassign_content_admin':
        // Send account blocked notification if option was checked.
        if (!empty($context['user_cancel_notify'])) {
          _user_mail_notify('status_blocked', $account);
        }
        $account->block()->save();
        $messenger->addStatus(t('Account %name has been disabled.', [
          '%name' => $account->getDisplayName(),
        ]));
        $logger->notice('Blocked user: %name %email.', [
          '%name' => $account->getAccountName(),
          '%email' => '<' . $account->getEmail() . '>',
        ]);
        break;
    }

    // After cancelling account, ensure that user is logged out. We can't
    // destroy their session though, as we might have information in it, and we
    // can't  regenerate it because batch API uses the session ID, we will
    // regenerate it in \Drupal\user\AccountCancellation::regenerateSession().
    // @see \Drupal\user\AccountCancellation::regenerateSession()
    if ($account->id() == \Drupal::currentUser()->id()) {
      \Drupal::currentUser()->setAccount(new AnonymousUserSession());
    }
  }

}
