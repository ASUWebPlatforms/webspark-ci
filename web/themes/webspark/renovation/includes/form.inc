<?php
/**
 * @file
 * Theme and preprocess functions for forms.
 */

use Drupal\Core\Form\FormStateInterface;

function renovation_form_alter(&$form, &$form_state, $form_id) {
  // Add classes to cancel button on Layout Builder discard/revert changes.
  if ($form_id == 'layout_builder_discard_changes' || $form_id == 'layout_builder_revert_overrides') {
    $form['actions']['cancel']['#attributes']['class'][] = 'btn btn-dark';

    // Changes in the revert form wording.
    if ($form_id == 'layout_builder_revert_overrides') {
      $form['#title'] = t('Are you sure you want to revert this page to defaults, which will delete all content on this page?');
      $form['actions']['submit']['#value'] = t('Confirm');
    }
  }

  // Add the class required for all the forms in front theme.
  $form['#attributes']['class'][] = 'uds-form';
}

/**
 * Implements hook_preprocess_HOOK().
 */
function renovation_preprocess_input__submit(&$variables) {
  // Adds class to submit buttons.
  $variables['attributes']['class'][] = 'btn-maroon';
}

/**
 * Add description text to media item dialogs regarding Remote Videos.
 *
 * @param array $form
 * @param FormStateInterface $form_state
 * @return void
 */
function renovation_form_editor_media_dialog_alter(array &$form, FormStateInterface $form_state) {
  $form['align']['#description'] = t('Alignment options do not affect Remote Videos.');
}
