<?php

declare(strict_types=1);

namespace Drupal\asu_secure_superadmin\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\Entity\User;

/**
 * Configure Asu secure superadmin settings for this site.
 */
final class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'asu_secure_superadmin_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames(): array {
    return ['asu_secure_superadmin.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    parent::buildForm($form, $form_state);
    $form['example'] = [
      '#type' => 'markup',
      '#markup' => $this->t('<p>Click the button below to secure the SuperAdmin (user 1) account on this website.<br /><small>If the button is disabled, the account has already been secured.</small></p>'),
    ];
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Secure Superadmin'),
      '#button_type' => 'primary',
    ];
    $user = User::load(1);
    $disable_submit = ($user && $user->getAccountName() === 'etsuper');
    // Disable the submit button if the user with uid1 is named etsuper
    $form['actions']['submit']['#disabled'] = $disable_submit;
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    parent::submitForm($form, $form_state);
    try {
      \Drupal::service('asu_secure_superadmin.change_super_admin_service')->changeSuperAdmin();
    }
    catch (\Exception $e) {
      \Drupal::logger('asu_secure_superadmin')->error($e->getMessage());
      \Drupal::messenger()->addError($e->getMessage());
      return;
    }
    \Drupal::messenger()->addMessage('The super admin account has been secured.');
  }
}
