<?php

declare(strict_types=1);

namespace Drupal\asu_governance\Form;

use Drupal\asu_governance\Services\ModulePermissionLoader;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ThemeHandlerInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Extension\ExtensionDiscovery;

/**
 * Configure ASU governance settings for this site.
 */
final class GovernanceSettingsForm extends ConfigFormBase {

  /**
   * The module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The theme handler service.
   *
   * @var \Drupal\Core\Extension\ThemeHandlerInterface
   */
  protected $themeHandler;

  /**
   * The module permission loader service.
   *
   * @var \Drupal\asu_governance\Services\ModulePermissionLoader
   */
  protected $modulePermissionLoader;

  /**
   * Build the form.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The configuration factory.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler service.
   * @param \Drupal\Core\Extension\ThemeHandlerInterface $theme_handler
   *   The theme handler service.
   * @param \Drupal\asu_governance\Services\ModulePermissionLoader $modulePermissionLoader
   *   The module permission loader service.
   */
  public function __construct(ConfigFactoryInterface $config_factory, ModuleHandlerInterface $module_handler, ThemeHandlerInterface $theme_handler, ModulePermissionLoader $modulePermissionLoader) {
    parent::__construct($config_factory);
    $this->moduleHandler = $module_handler;
    $this->themeHandler = $theme_handler;
    $this->modulePermissionLoader = $modulePermissionLoader;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('module_handler'),
      $container->get('theme_handler'),
      $container->get('asu_governance.module_permission_loader')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'asu_governance_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames(): array {
    return ['asu_governance.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {

    $config = $this->config('asu_governance.settings');

    // Get the current items array from configuration.
    $modulesInput = $config->get('allowable_modules') ?? [];
    $themesInput = $config->get('allowable_themes') ?? [];
    $form['allowable_modules'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Allowable Modules'),
      '#description' => $this->t('<p>Add modules, <strong>one per line, <u>by machine name</u></strong>, that Site Builders will be able to enable/disable and configure.</p>
        <p><strong>Please note:</strong> ALL associated permissions for the modules listed above will be automatically updated on the <strong>Site Builder</strong> role when this form is saved or the module is enabled.</p>'),
      '#default_value' => implode("\n", $modulesInput),
    ];

    $form['allowable_themes'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Allowable Themes'),
      '#description' => $this->t('<p>Add themes, <strong>one per line, <u>by machine name</u></strong>, that Site Builders will be able to enable/disable and configure.</p>'),
      '#default_value' => implode("\n", $themesInput),
    ];

    $form['allow_config_access'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('<strong>Allow config sync access</strong>'),
      '#description' => $this->t('If checked, users with the <strong>Site Builder</strong> role will be able to import/export/sync configurations via the <a href = "/admin/config/development/configuration">config sync page</a>.'),
      '#default_value' => $config->get('allow_config_access') ?? FALSE,
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state): void {
    $modulesInput = array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_modules'))));
    $extensionDiscovery = new ExtensionDiscovery(\Drupal::root());
    $allModules = array_keys($extensionDiscovery->scan('module'));
    $disallowedModules = ['asu_governance'];
    $badModules = [];

    $themesInput = array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_themes'))));
    $allThemes = array_keys($extensionDiscovery->scan('theme'));
    $disallowedThemes = ['bartik', 'seven', 'stark', 'classy'];
    $badThemes = [];
    $currentTheme = $this->themeHandler->getDefault();
    $adminTheme = $this->config('system.theme')->get('admin');
    $includesDefault = in_array($currentTheme, $themesInput, TRUE);
    $includesAdmin = in_array($adminTheme, $themesInput, TRUE);

    foreach ($modulesInput as $module) {
      if (!in_array($module, $allModules, TRUE) || in_array($module, $disallowedModules, TRUE)) {
        $badModules[] = $module;
      }
    }

    foreach ($themesInput as $theme) {
      if (!in_array($theme, $allThemes, TRUE) || in_array($theme, $disallowedThemes, TRUE)) {
        $badThemes[] = $theme;
      }
    }

    // Throw error if entered module does not match modules available in code.
    if (!empty($badModules)) {
      $form_state->setErrorByName('allowable_modules', $this->t('The following modules are either not valid or not allowed: @modules', ['@modules' => implode(', ', $badModules)]));
    }

    // Throw error if entered theme does not match themes available in code.
    if (!empty($badThemes)) {
      $form_state->setErrorByName('allowable_themes', $this->t('The following themes are either not valid or not allowed: @themes', ['@themes' => implode(', ', $badThemes)]));
    }

    // Throw error if entered theme does not match themes available in code.
    if (!$includesDefault) {
      $form_state->setErrorByName('allowable_themes', $this->t('The current default theme (@theme) must be included in the list of allowable themes.', ['@theme' => $currentTheme]));
    }

    // Throw error if entered theme does not match themes available in code.
    if (!$includesAdmin) {
      $form_state->setErrorByName('allowable_themes', $this->t('The current admin theme (@theme) must be included in the list of allowable themes.', ['@theme' => $adminTheme]));
    }

    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    // Get the original values.
    $originals = $this->config('asu_governance.settings')->get('allowable_modules');

    // Explode submitted modules textarea into an array and remove duplicates.
    $modulesInput = array_unique(array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_modules')))));
    // Save the array into configuration.
    $this->config('asu_governance.settings')
      ->set('allowable_modules', $modulesInput)
      ->save();
    // Get a list of modules that were removed from the original list.
    $modulesDiff = array_diff($originals, $modulesInput);
    if (!empty($modulesDiff)) {
      // Revoke permissions for modules that are no longer allowed.
      $this->modulePermissionLoader->revokeSiteBuilderPermissions($modulesDiff);
    }

    // Update the Site Builder role's permissions.
    $this->modulePermissionLoader->addSiteBuilderPermissions($modulesInput);

    // Explode submitted themes textarea into an array and remove duplicates.
    $themesInput = array_unique(array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_themes')))));
    // Save the array into configuration.
    $this->config('asu_governance.settings')
      ->set('allowable_themes', $themesInput)
      ->save();

    // Save the config access checkbox value into configuration.
    $this->config('asu_governance.settings')
      ->set('allow_config_access', $form_state->getValue('allow_config_access'))
      ->save();
  }

}
