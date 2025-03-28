<?php

declare(strict_types=1);

namespace Drupal\asu_reparent_superadmin\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides an ASU Reparent Superadmin form.
 */
final class ReparentSuperadmin extends FormBase {

  /**
   * Constructs a new ReparentSuperadmin object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager.
   */
  public function __construct(private readonly EntityTypeManagerInterface $entityTypeManager) {
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'asu_reparent_superadmin_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {

    $form['description'] = [
      '#markup' => $this->t(
  '<p><strong>This form will allow you to reparent content from the new disabled user1 account (etsuper) to the previous one.<br />
        It may take some time to complete, depending on how much content is being transferred. Please be patient.</strong></p>
        <p>The following associated content will be reparented, if applicable:
          <ul>
            <li>Authored nodes</li>
            <li>Owned Media items</li>
            <li>Authored comments</li>
            <li>Authored Webform submissions</li>
          </ul>
        </p>
        <small><strong>Please note: </strong>For sites with a lot of content, you may need to navigate away from the batch process.</br>
        It <strong>will not</strong> continue to work in the background. But, if it does not finish, you can return
        to this form and <br />resubmit as many times as needed. It will start back up where it left off and continue until all of the content has been migrated.</small>'),
    ];

    // Get the original superadmin username from config.
    $original_superadmin = \Drupal::configFactory()->get('asu_secure_superadmin.settings')
      ->get('original_superadmin');

    $form['target_account'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Target Account'),
      '#description' => $this->t('The username of the previous superadmin account. You may enter a different account if needed.'),
      '#default_value' => $original_superadmin,
      '#required' => TRUE,
    ];

    $form['actions'] = [
      '#type' => 'actions',
      'submit' => [
        '#type' => 'submit',
        '#value' => $this->t('Submit'),
      ],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state): void {
    parent::validateForm($form, $form_state);
    $username = $form_state->getValue('target_account');
    /** @var \Drupal\user\Entity\User $user */
    $user = current($this->entityTypeManager->getStorage('user')->loadByProperties(['name' => $username]));
    if (!$user) {
      $form_state->setErrorByName('target_account', $this->t('The target account does not exist.'));
      return;
    }
    $allowed = $user->hasRole('site_builder');
    if (!$allowed) {
      $form_state->setErrorByName('target_account', $this->t('The target account must have the "Site Builder" role.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    $target_uid = current(array_keys($this->entityTypeManager->getStorage('user')->loadByProperties(['name' => $form_state->getValue('target_account')])));
    try {
      // Copy user 1 to a new user and migrate its content.
      \Drupal::service('asu_reparent_superadmin.reparent_super_admin_service')
        ->reparentSuperAdmin($target_uid);
    }
    catch (Exception $e) {
      \Drupal::logger('asu_reparent_superadmin')->error($e->getMessage());
      \Drupal::messenger()->addError($e->getMessage());
      return;
    }
  }

}
