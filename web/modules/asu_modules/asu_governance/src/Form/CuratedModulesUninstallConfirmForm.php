<?php

namespace Drupal\asu_governance\Form;

use Drupal\Core\Url;
use Drupal\system\Form\ModulesUninstallConfirmForm;

/**
 * Builds a confirmation form to uninstall selected modules.
 */
class CuratedModulesUninstallConfirmForm extends ModulesUninstallConfirmForm {

  /**
   * {@inheritdoc}
   */
  public function getCancelUrl() {
    return new Url('asu_governance.modules_uninstall');
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'asu_governance_curated_modules_uninstall_confirm_form';
  }

}
