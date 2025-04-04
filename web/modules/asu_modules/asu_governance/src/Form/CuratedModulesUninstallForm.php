<?php

namespace Drupal\asu_governance\Form;

use Drupal\Core\Extension\ModuleExtensionList;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ModuleInstallerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\KeyValueStore\KeyValueStoreExpirableInterface;
use Drupal\Core\Update\UpdateHookRegistry;
use Drupal\system\Form\ModulesUninstallForm;

/**
 * Provides a form for uninstalling modules.
 */
class CuratedModulesUninstallForm extends ModulesUninstallForm {

  /**
   * Allowed modules from the configuration.
   *
   * @var array
   */
  protected $allowableModules;

  /**
   * {@inheritdoc}
   */
  public function __construct(ModuleHandlerInterface $module_handler, ModuleInstallerInterface $module_installer, KeyValueStoreExpirableInterface $key_value_expirable, ModuleExtensionList $extension_list_module, UpdateHookRegistry $versioning_update_registry) {
    parent::__construct($module_handler, $module_installer, $key_value_expirable, $extension_list_module, $versioning_update_registry);
    $this->allowableModules = $this->config('asu_governance.settings')->get('allowable_modules') ?? [];

  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);

    // Only include ASU modules.
    $uninstallable = array_filter($form['modules'], function ($module, $name) {
      if (in_array($name, $this->allowableModules, TRUE)) {
        return $module;
      }
      return FALSE;
    }, ARRAY_FILTER_USE_BOTH);
    $form['modules'] = $uninstallable;

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    // Redirect to the confirm form.
    $form_state->setRedirect('asu_governance.modules_uninstall_confirm');
  }

}
