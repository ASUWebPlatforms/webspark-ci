<?php

declare(strict_types=1);

namespace Drupal\asu_governance\Form;

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
   * Build the form.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The configuration factory.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler service.
   * @param \Drupal\Core\Extension\ThemeHandlerInterface $theme_handler
   *   The theme handler service.
   */
  public function __construct(ConfigFactoryInterface $config_factory, ModuleHandlerInterface $module_handler, ThemeHandlerInterface $theme_handler) {
    parent::__construct($config_factory);
    $this->moduleHandler = $module_handler;
    $this->themeHandler = $theme_handler;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('module_handler'),
      $container->get('theme_handler')
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
        <p><strong>Please note:</strong> ALL permissions for the modules listed above will be automatically granted to the <strong>Site Builder</strong> role when the module is enabled.</p>'),
      '#default_value' => implode("\n", $modulesInput),
    ];

    $form['allowable_themes'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Allowable Themes'),
      '#description' => $this->t('<p>Add themes, <strong>one per line, <u>by machine name</u></strong>, that Site Builders will be able to enable/disable and configure.</p>
        <p><strong>Please note:</strong> ALL permissions for the themes listed above will be automatically granted to the <strong>Site Builder</strong> role when the theme is enabled.</p>'),
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

    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    // Explode submitted modules textarea into an array and remove duplicates.
    $modulesInput = array_unique(array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_modules')))));
    // Save the array into configuration.
    $this->config('asu_governance.settings')
      ->set('allowable_modules', $modulesInput)
      ->save();

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
