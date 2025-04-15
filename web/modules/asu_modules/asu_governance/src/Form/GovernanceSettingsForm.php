<?php

declare(strict_types=1);

namespace Drupal\asu_governance\Form;

use Drupal\asu_governance\Services\ModulePermissionHandler;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ThemeHandlerInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Extension\ExtensionDiscovery;
use Drupal\Core\Database\Connection;

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
   * @var \Drupal\asu_governance\Services\ModulePermissionHandler
   */
  protected $modulePermissionLoader;

  /**
   * The database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $connection;

  /**
   * Disallowed modules.
   *
   * @var string[]
   */
  public const DISALLOWED_MODULES = [
    'asu_governance',
    'php',
  ];

  /**
   * Disallowed themes.
   *
   * @var string[]
   */
  public const DISALLOWED_THEMES = [
    'bartik',
    'stark',
    'classy',
    'stable',
  ];

  /**
   * Build the form.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The configuration factory.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler service.
   * @param \Drupal\Core\Extension\ThemeHandlerInterface $theme_handler
   *   The theme handler service.
   * @param \Drupal\asu_governance\Services\ModulePermissionHandler $modulePermissionLoader
   *   The module permission loader service.
   */
  public function __construct(ConfigFactoryInterface $config_factory, ModuleHandlerInterface $module_handler, ThemeHandlerInterface $theme_handler, ModulePermissionHandler $modulePermissionLoader, Connection $connection) {
    parent::__construct($config_factory);
    $this->moduleHandler = $module_handler;
    $this->themeHandler = $theme_handler;
    $this->modulePermissionLoader = $modulePermissionLoader;
    $this->connection = $connection;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('module_handler'),
      $container->get('theme_handler'),
      $container->get('asu_governance.module_permission_handler'),
      $container->get('database'),
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
    $usersInput = $config->get('permissions_users') ?? [];
    $blacklistInput = $config->get('permissions_blacklist') ?? [];
    $baseBlacklist = $this->modulePermissionLoader::BASE_BLACKLIST;
    $form['allowable_modules'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Allowable Modules with Permissions'),
      '#description' => $this->t('<p>Add modules, <strong>one per line, <u>by machine name</u></strong>, that Site Builders will be able to enable/disable and configure.</p>
        <p><strong>Please note:</strong> ALL associated permissions for the modules listed above will be automatically updated on the <strong>Site Builder</strong> role when this form is saved or the module is enabled.</p>'),
      '#default_value' => implode("\n", $modulesInput),
      '#required' => TRUE,
    ];

    $form['allowable_themes'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Allowable Themes'),
      '#description' => $this->t('<p>Add themes, <strong>one per line, <u>by machine name</u></strong>, that Site Builders will be able to enable/disable and configure.</p>'),
      '#default_value' => implode("\n", $themesInput),
      '#required' => TRUE,
    ];

    $form['permissions_blacklist'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Permissions Blacklist'),
      '#description' => $this->t('<p>Add permissions, <strong>one per line, <u>by machine name</u></strong>, that should not be granted to non-Administrator roles.</p>'),
      '#default_value' => !empty($blacklistInput) ? implode("\n", $blacklistInput) : implode("\n", $baseBlacklist),
      '#required' => TRUE,
    ];

    $form['allow_config_access'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('<strong>Allow config sync access</strong>'),
      '#description' => $this->t('If checked, users with the <strong>Site Builder</strong> role will be able to import/export/sync configurations via the <a href = "/admin/config/development/configuration">config sync page</a>.'),
      '#default_value' => $config->get('allow_config_access') ?? FALSE,
    ];
    $form['allow_roles_perms_admin'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('<strong>Allow roles and permissions administration</strong>'),
      '#description' => $this->t('If checked, users with the <strong>Site Builder</strong> role will be able to manage roles and permissions.'),
      '#default_value' => $config->get('allow_roles_perms_admin') ?? FALSE,
    ];
    $form['permissions_users'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Permissions Users'),
      '#description' => $this->t('<p>Please list usernames (usually ASURITE IDs) of users with the <strong>Site Builder</strong> role, <strong>one per line</strong>, that should be allowed to have limited permissions/roles administrative access.</p>'),
      '#default_value' => implode("\n", $usersInput),
      '#states' => [
        'visible' => [
          ':input[name="allow_roles_perms_admin"]' => ['checked' => TRUE],
        ],
        'required' => [
          ':input[name="allow_roles_perms_admin"]' => ['checked' => TRUE],
        ],
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state): void {
    $modulesInput = array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_modules'))));
    $badModules = [];
    $themesInput = array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_themes'))));
    $badThemes = [];
    $currentTheme = $this->themeHandler->getDefault();
    $adminTheme = $this->config('system.theme')->get('admin');
    $includesDefault = in_array($currentTheme, $themesInput, TRUE);
    $includesAdmin = in_array($adminTheme, $themesInput, TRUE);
    $baseBlacklist = $this->modulePermissionLoader::BASE_BLACKLIST;
    $blacklistInput = array_filter(array_map('trim', explode("\n", $form_state->getValue('permissions_blacklist'))));
    $allPermissions = array_keys(\Drupal::service('user.permissions')->getPermissions());
    $missingPermissions = array_diff($baseBlacklist, $blacklistInput);

    foreach ($modulesInput as $module) {
      if (in_array($module, self::DISALLOWED_MODULES, TRUE)) {
        $badModules[] = $module;
      }
    }

    foreach ($themesInput as $theme) {
      if (in_array($theme, self::DISALLOWED_THEMES, TRUE)) {
        $badThemes[] = $theme;
      }
    }

    // Throw error if entered module does not match modules available in code.
    if (!empty($badModules)) {
      $form_state->setErrorByName('allowable_modules', $this->t('The following modules are not allowed: <strong>@modules</strong>', ['@modules' => implode(', ', array_map(fn($module) => "\"$module\"", $badModules))]));
    }

    // Throw error if entered theme does not match themes available in code.
    if (!empty($badThemes)) {
      $form_state->setErrorByName('allowable_themes', $this->t('The following themes are not allowed: <strong>@themes</strong>', ['@themes' => implode(', ', array_map(fn($theme) => "\"$theme\"", $badThemes))]));
    }

    // Throw error if entered theme does not match themes available in code.
    if (!$includesDefault) {
      $form_state->setErrorByName('allowable_themes', $this->t('The current default theme (@theme) must be included in the list of allowable themes.', ['@theme' => $currentTheme]));
    }

    // Throw error if entered theme does not match themes available in code.
    if (!$includesAdmin) {
      $form_state->setErrorByName('allowable_themes', $this->t('The current admin theme (@theme) must be included in the list of allowable themes.', ['@theme' => $adminTheme]));
    }

    if (!empty($missingPermissions)) {
      $form_state->setErrorByName('permissions_blacklist', $this->t('The following required permissions are missing from the blacklist: <strong>@perms</strong>', ['@perms' => implode(', ', array_map(fn($perm) => "\"$perm\"", $missingPermissions))]));
    }

    foreach ($blacklistInput as $permission) {
      if (!in_array($permission, $allPermissions, TRUE) && !in_array($permission, $baseBlacklist, TRUE)) {
        $badPermissions[] = $permission;
      }
    }

    // Display warning if entered permissions are not available.
    if (!empty($badPermissions)) {
      $form_state->setErrorByName('permissions_blacklist', $this->t('The following permissions do not exist on the site: <strong>@perms</strong>. Please remove.', ['@perms' => implode(', ', array_map(fn($perm) => "\"$perm\"", $badPermissions))]));
    }

    if ($form_state->getValue('allow_roles_perms_admin')) {
      $usersInput = array_filter(array_map('trim', explode("\n", $form_state->getValue('permissions_users'))));
      $query = $this->connection->select('users_field_data', 'u');
      $query->join('user__roles', 'ur', 'u.uid = ur.entity_id');
      $query->fields('u', ['name'])
        ->fields('ur', ['roles_target_id'])
        ->condition('u.uid', 0, '>')
        ->condition('ur.roles_target_id', 'site_builder');
      $allSiteBuilders = $query->execute()->fetchCol(0);

      foreach ($usersInput as $user) {
        if (!in_array($user, $allSiteBuilders, TRUE)) {
          $badUsers[] = $user;
        }
      }

      // Throw error if entered user does not match users available on the site.
      if (!empty($badUsers)) {
        $form_state->setErrorByName('permissions_users', $this->t('The following users are not valid or do not have the Site Builder role: <strong>@users</strong>', ['@users' => implode(', ', array_map(fn($user) => "\"$user\"", $badUsers))]));
      }
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
    $governanceSettings = $this->config('asu_governance.settings');
    // Get the original values.
    $originals = $governanceSettings->get('allowable_modules');

    // Explode submitted modules textarea into an array and remove duplicates.
    $modulesInput = array_unique(array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_modules')))));
    // Save the array into configuration.
    $governanceSettings->set('allowable_modules', $modulesInput)->save();
    // Get a list of modules that were removed from the original list.
    $modulesDiff = array_diff($originals, $modulesInput);
    if (!empty($modulesDiff)) {
      // Revoke permissions for modules that are no longer allowed.
      $this->modulePermissionLoader->revokeSiteBuilderModulePermissions($modulesDiff);
    }

    // Update the Site Builder role's permissions.
    $this->modulePermissionLoader->addSiteBuilderModulePermissions($modulesInput);

    // Explode submitted themes textarea into an array and remove duplicates.
    $themesInput = array_unique(array_filter(array_map('trim', explode("\n", $form_state->getValue('allowable_themes')))));
    // Save the array into configuration.
    $governanceSettings->set('allowable_themes', $themesInput)->save();

    // Save the config access checkbox value into configuration.
    $governanceSettings->set('allow_config_access', $form_state->getValue('allow_config_access'))->save();

    // Explode submitted blacklist textarea into an array and remove duplicates.
    $blacklistInput = $form_state->getValue('permissions_blacklist') ? array_unique(array_filter(array_map('trim', explode("\n", $form_state->getValue('permissions_blacklist'))))) : [];
    // Save the array into configuration.
    $governanceSettings->set('permissions_blacklist', $blacklistInput)->save();

    if ($form_state->getValue('allow_roles_perms_admin')) {
      // Save the allow_roles_perms_admin checkbox value into configuration.
      $governanceSettings->set('allow_roles_perms_admin', $form_state->getValue('allow_roles_perms_admin'))->save();

      // Explode submitted users textarea into an array and remove duplicates.
      $permsUsersInput = array_unique(array_filter(array_map('trim', explode("\n", $form_state->getValue('permissions_users')))));
      // Save the array into configuration.
      $governanceSettings->set('permissions_users', $permsUsersInput)->save();
    }
    else {
      // Remove values from the active configuration.
      $governanceSettings->set('allow_roles_perms_admin', FALSE)->save();
      $governanceSettings->set('permissions_users', NULL)->save();
    }
  }

}
