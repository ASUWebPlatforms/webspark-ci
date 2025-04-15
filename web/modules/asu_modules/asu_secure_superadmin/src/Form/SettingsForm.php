<?php

declare(strict_types=1);

namespace Drupal\asu_secure_superadmin\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure ASU Secure SuperAdmin settings for this site.
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
    $form['original_superadmin'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Original Superadmin Username'),
      '#default_value' => $this->config('asu_secure_superadmin.settings')->get('original_superadmin'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state): void {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    $this->config('asu_secure_superadmin.settings')
      ->set('original_superadmin', $form_state->getValue('original_superadmin'))
      ->save();
    parent::submitForm($form, $form_state);
  }

}
