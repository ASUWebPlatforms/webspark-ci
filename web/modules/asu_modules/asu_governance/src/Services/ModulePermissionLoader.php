<?php

namespace Drupal\asu_governance\Services;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\user\PermissionHandlerInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\user\Entity\Role;

/**
 * Service to load permissions for all asu_governance allowed modules.
 *
 * Allows to dynamically add/update them to the Site Builder role.
 */
class ModulePermissionLoader {

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

  public const array BLACKLIST = [
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
  ];

  /**
   * Constructs the ModulePermissionLoader object.
   *
   * @param \Drupal\user\PermissionHandlerInterface $permission_handler
   *   The permission handler service.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler service.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory.
   */
  public function __construct(PermissionHandlerInterface $permission_handler, ModuleHandlerInterface $module_handler, ConfigFactoryInterface $config_factory) {
    $this->permissionHandler = $permission_handler;
    $this->moduleHandler = $module_handler;
    $this->configFactory = $config_factory;
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
      // Load the Site Builder role.
      /** @var \Drupal\user\Entity\Role $role */
      $role = Role::load('site_builder');
      // Get the role's permissions.
      $siteBuilderPerms = $role->getPermissions();
      // Find the difference between the module permissions and
      // the Site Builder role's permissions.
      $diff = array_diff($modulePermissions, $siteBuilderPerms);
      // If there are differences, add them to the Site Builder role.
      if (!empty($diff)) {
        // Grant permission for each role in the diff array.
        foreach ($modulePermissions as $permission) {
          $role->grantPermission($permission);
        }
        $role->save();
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
