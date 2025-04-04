<?php

namespace Drupal\asu_governance\Services;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\user\PermissionHandlerInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\user\Entity\Role;
use Drupal\views\Views;

/**
 * Service to handle permissions for all asu_governance allowed modules.
 *
 * Allows to dynamically add/update them to the Site Builder role.
 */
class ModulePermissionHandler {

  /**
   * The permission handler service.
   *
   * @var \Drupal\user\PermissionHandlerInterface
   */
  protected $permissionHandler;

  /**
   * The module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The config factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * The entity type manager service.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Blacklisted permissions.
   *
   * @var string[]
   */
  public const BLACKLIST = [
    'administer asu governance configuration',
    'administer actions',
    'administer modules',
    'administer permissions',
    'administer software updates',
    'administer themes',
    'view update notifications',
    'export configuration',
    'import configuration',
    'synchronize configuration',
    'use PHP for settings',
  ];

  /**
   * Constructs the ModulePermissionHandler object.
   *
   * @param \Drupal\user\PermissionHandlerInterface $permission_handler
   *   The permission handler service.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler service.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager service.
   */
  public function __construct(PermissionHandlerInterface $permission_handler, ModuleHandlerInterface $module_handler, ConfigFactoryInterface $config_factory, EntityTypeManagerInterface $entity_type_manager) {
    $this->permissionHandler = $permission_handler;
    $this->moduleHandler = $module_handler;
    $this->configFactory = $config_factory;
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * Add the Site Builder role's permissions.
   *
   * @param array $modules
   *   An array of module names.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function addSiteBuilderPermissions(array $modules) {
    $allowed_modules = $this->configFactory->get('asu_governance.settings')->get('allowable_modules');
    // Load the Site Builder role.
    /** @var \Drupal\user\Entity\Role $role */
    $role = Role::load('site_builder');
    // Get the role's permissions.
    $siteBuilderPerms = $role->getPermissions();
    foreach ($modules as $module) {
      // Skip modules that are not enabled or not allowed
      // in asu_governance module's settings form.
      if (!$this->moduleHandler->moduleExists($module) || !in_array($module, $allowed_modules, TRUE)) {
        continue;
      }
      // Get the module's permissions.
      $modulePermissions = $this->getModulePermissions($module);
      if (empty($modulePermissions)) {
        continue;
      }
      // Find the difference between the module permissions and
      // the Site Builder role's permissions.
      $diff = array_diff($modulePermissions, $siteBuilderPerms);
      // If there are differences, add them to the Site Builder role.
      if (!empty($diff)) {
        // Grant permission for each role in the diff array.
        foreach ($modulePermissions as $permission) {
          $role->grantPermission($permission);
        }
      }
    }
    $role->save();

    // Adjust views display permissions to grant access to Site Builders.
    $view_storage = $this->entityTypeManager->getStorage('view');
    $views = $view_storage->loadMultiple();
    foreach ($views as $view_id => $view) {
      $view_config = $this->configFactory->getEditable('views.view.' . $view_id);
      $display_definitions = $view_config->get('display');
      $config_changed = false;
      foreach ($display_definitions as $display_id => $display_definition) {
        $access_type = $display_definition['display_options']['access']['type'] ?? NULL;
        if ($access_type && $access_type === 'role') {
          if (isset($display_definition['display_options']['access']['options']['role']['administrator'])) {
            $view_config->set('display.' . $display_id . '.display_options.access.options.role.site_builder', 'site_builder');
            $config_changed = true;
          }
        }
      }
      if ($config_changed) {
        $view_config->save();
      }
    }

  }

  /**
   * Revoke the Site Builder role's permissions.
   *
   * @param array $modules
   *   An array of module names to have permissions revoked.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function revokeSiteBuilderPermissions(array $modules) {
    foreach ($modules as $module) {
      // Get the module's permissions.
      $modulePermissions = $this->getModulePermissions($module);
      if (empty($modulePermissions)) {
        continue;
      }
      // Load the Site Builder role.
      /** @var \Drupal\user\Entity\Role $role */
      $role = Role::load('site_builder');
      // Revoke permissions from the Site Builder role.
      foreach ($modulePermissions as $permission) {
        $role->revokePermission($permission);
      }
      $role->save();
    }
  }

  /**
   * Gets all permissions provided by a specific module.
   *
   * @param string $module
   *   The machine name of the module.
   *
   * @return array
   *   An array of permissions provided by the module.
   */
  public function getModulePermissions(string $module): array {
    $permissions = $this->permissionHandler->getPermissions();
    $module_permissions = [];

    foreach ($permissions as $permission_id => $permission_info) {
      if (isset($permission_info['provider']) && $permission_info['provider'] === $module) {
        $module_permissions[$permission_id] = $permission_info;
      }
    }

    return array_keys($module_permissions);
  }

  /**
   * Blacklist permissions for all roles, except for the administrator role.
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function blacklistPermissions() {
    $blacklist = $this::BLACKLIST;
    // Get all roles.
    $roles = Role::loadMultiple();
    // Remove the administrator role from the list.
    unset($roles['administrator']);
    // Loop through each role.
    foreach ($roles as $role) {
      // Get the role's permissions.
      $permissions = $role->getPermissions();
      // Loop through each permission.
      foreach ($permissions as $permission) {
        // If the permission is in the blacklist, revoke it.
        if (in_array($permission, $blacklist)) {
          $role->revokePermission($permission);
        }
      }
      // Save the role.
      $role->save();
    }
  }

}
