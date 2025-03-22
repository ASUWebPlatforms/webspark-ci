<?php

declare(strict_types=1);

namespace Drupal\asu_secure_superadmin\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Secure SuperAdmin form for installation.
 */
final class SecureSuperAdminForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'secure_superadmin_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    $form['#title'] = $this->t('Secure SuperAdmin account');
    $form['example'] = [
      '#type' => 'markup',
      '#markup' => $this->t('<p>Click the button below to secure the SuperAdmin (user 1) account on this website.</p>'),
    ];
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save and continue'),
      '#button_type' => 'primary',
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    try {
      \Drupal::service('asu_secure_superadmin.change_super_admin_service')->changeSuperAdmin();
    }
    catch (\Exception $e) {
      \Drupal::logger('asu_secure_superadmin')->error($e->getMessage());
      \Drupal::messenger()->addError($e->getMessage());
      return;
    }
    \Drupal::messenger()->addMessage('The SuperAdmin account has been secured. Please log in again.');
  }

}
