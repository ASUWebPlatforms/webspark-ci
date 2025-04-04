<?php

namespace Drupal\asu_governance\Services;

use Drupal\Core\Cache\Cache;
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

  public const BASE_SB_PERMISSIONS = [
    'access administration pages',
    'access any webform configuration',
    'access block library',
    'access content',
    'access content overview',
    'access contextual links',
    'access files overview',
    'access fontawesome additional settings',
    'access help pages',
    'access media overview',
    'access node layout reports',
    'access own webform configuration',
    'access shortcuts',
    'access site in maintenance mode',
    'access site reports',
    'access site-wide contact form',
    'access taxonomy overview',
    'access toolbar',
    'access user profiles',
    'access webform help',
    'access webform overview',
    'access webform submission user',
    'administer account settings',
    'administer asu modules',
    'administer asu themes',
    'administer block content',
    'administer block types',
    'administer block_content display',
    'administer block_content fields',
    'administer block_content form display',
    'administer blocks',
    'administer contact forms',
    'administer contact_message display',
    'administer contact_message fields',
    'administer contact_message form display',
    'administer content types',
    'administer crop',
    'administer crop types',
    'administer display modes',
    'administer filters',
    'administer image styles',
    'administer media',
    'administer media display',
    'administer media fields',
    'administer media form display',
    'administer media types',
    'administer menu',
    'administer meta tags',
    'administer node display',
    'administer node fields',
    'administer node form display',
    'administer nodes',
    'administer paragraph display',
    'administer paragraph fields',
    'administer paragraph form display',
    'administer pathauto',
    'administer permissions',
    'administer redirect settings',
    'administer redirects',
    'administer responsive images',
    'administer robots.txt',
    'administer search',
    'administer seckit',
    'administer shortcuts',
    'administer site configuration',
    'administer sitemap settings',
    'administer taxonomy',
    'administer taxonomy_term display',
    'administer taxonomy_term fields',
    'administer taxonomy_term form display',
    'administer url aliases',
    'administer users',
    'administer views',
    'administer webform',
    'administer webform element access',
    'administer webform submission',
    'administer webspark_module_asu_breadcrumb configuration',
    'administer webspark_module_renovation_layouts configuration',
    'bypass node access',
    'configure any layout',
    'create accordion block content',
    'create and edit custom blocks',
    'create banner block content',
    'create blockquote block content',
    'create card_and_image block content',
    'create card_arrangement block content',
    'create card_carousel block content',
    'create card_image_and_content block content',
    'create carousel_image block content',
    'create content_image block content',
    'create display_list block content',
    'create divider block content',
    'create donut_chart block content',
    'create events block content',
    'create gallery block content',
    'create grid_links block content',
    'create hero block content',
    'create hover_cards block content',
    'create icon_list block content',
    'create image block content',
    'create image_and_text_block block content',
    'create image_background_with_cta block content',
    'create inset_box block content',
    'create media',
    'create menu_sidebar block content',
    'create news block content',
    'create step_list block content',
    'create tabbed_content block content',
    'create terms in location',
    'create terms in tags',
    'create testimonial block content',
    'create testimonial_carousel block content',
    'create testimonial_on_image_background block content',
    'create text_content block content',
    'create url aliases',
    'create video block content',
    'create video_hero block content',
    'create web_directory block content',
    'create webform',
    'create webform block content',
    'customize shortcut links',
    'delete all revisions',
    'delete any accordion block content',
    'delete any banner block content',
    'delete any blockquote block content',
    'delete any card_and_image block content',
    'delete any card_arrangement block content',
    'delete any card_carousel block content',
    'delete any card_image_and_content block content',
    'delete any carousel_image block content',
    'delete any content_image block content',
    'delete any display_list block content',
    'delete any divider block content',
    'delete any donut_chart block content',
    'delete any events block content',
    'delete any file',
    'delete any gallery block content',
    'delete any grid_links block content',
    'delete any hero block content',
    'delete any hover_cards block content',
    'delete any icon_list block content',
    'delete any image block content',
    'delete any image_and_text_block block content',
    'delete any image_background_with_cta block content',
    'delete any inset_box block content',
    'delete any menu_sidebar block content',
    'delete any news block content',
    'delete any step_list block content',
    'delete any tabbed_content block content',
    'delete any testimonial block content',
    'delete any testimonial_carousel block content',
    'delete any testimonial_on_image_background block content',
    'delete any text_content block content',
    'delete any video block content',
    'delete any video_hero block content',
    'delete any web_directory block content',
    'delete any webform',
    'delete any webform block content',
    'delete any webform submission',
    'delete any media',
    'delete term revisions in location',
    'delete term revisions in tags',
    'delete terms in location',
    'delete terms in tags',
    'edit any accordion block content',
    'edit any banner block content',
    'edit any blockquote block content',
    'edit any card_and_image block content',
    'edit any card_arrangement block content',
    'edit any card_carousel block content',
    'edit any card_image_and_content block content',
    'edit any carousel_image block content',
    'edit any content_image block content',
    'edit any display_list block content',
    'edit any divider block content',
    'edit any donut_chart block content',
    'edit any events block content',
    'edit any gallery block content',
    'edit any grid_links block content',
    'edit any hero block content',
    'edit any hover_cards block content',
    'edit any icon_list block content',
    'edit any image block content',
    'edit any image_and_text_block block content',
    'edit any image_background_with_cta block content',
    'edit any inset_box block content',
    'edit any menu_sidebar block content',
    'edit any news block content',
    'edit any step_list block content',
    'edit any tabbed_content block content',
    'edit any testimonial block content',
    'edit any testimonial_carousel block content',
    'edit any testimonial_on_image_background block content',
    'edit any text_content block content',
    'edit any video block content',
    'edit any video_hero block content',
    'edit any web_directory block content',
    'edit any webform',
    'edit any webform block content',
    'edit any webform submission',
    'edit terms in location',
    'edit terms in tags',
    'edit webform assets',
    'edit webform source',
    'edit webform twig',
    'edit webform variants',
    'notify of path changes',
    'revert all revisions',
    'revert term revisions in location',
    'revert term revisions in tags',
    'search content',
    'switch shortcut sets',
    'use advanced search',
    'use text format basic_html',
    'use text format full_html',
    'use text format minimal_format',
    'use text format restricted_html',
    'use text format webform_default',
    'update media',
    'update any media',
    'view all revisions',
    'view any accordion block content history',
    'view any banner block content history',
    'view any blockquote block content history',
    'view any card_and_image block content history',
    'view any card_arrangement block content history',
    'view any card_carousel block content history',
    'view any card_image_and_content block content history',
    'view any carousel_image block content history',
    'view any content_image block content history',
    'view any display_list block content history',
    'view any divider block content history',
    'view any donut_chart block content history',
    'view any events block content history',
    'view any gallery block content history',
    'view any grid_links block content history',
    'view any hero block content history',
    'view any hover_cards block content history',
    'view any icon_list block content history',
    'view any image block content history',
    'view any image_and_text_block block content history',
    'view any image_background_with_cta block content history',
    'view any inset_box block content history',
    'view any menu_sidebar block content history',
    'view any news block content history',
    'view any step_list block content history',
    'view any tabbed_content block content history',
    'view any testimonial block content history',
    'view any testimonial_carousel block content history',
    'view any testimonial_on_image_background block content history',
    'view any text_content block content history',
    'view any video block content history',
    'view any video_hero block content history',
    'view any web_directory block content history',
    'view any webform block content history',
    'view any webform submission',
    'view media',
    'view own unpublished content',
    'view own webform submission',
    'view term revisions in location',
    'view term revisions in tags',
    'view the administration theme',
    'view user email addresses',
    'view vocabulary labels',
  ];

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

  public function createSiteBuilderRole() {
    $role_storage = $this->entityTypeManager->getStorage('user_role');
    // Check if the Site Builder role already exists.
    $site_builder = $role_storage->load('site_builder');
    if ($site_builder) {
      // Role already exists, no need to create it again.
      return;
    }
    // Create the Site Builder role if it does not exist.
    $role = $role_storage->create([
      'id' => 'site_builder',
      'label' => t('Site Builder'),
    ]);
    $role->save();
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
    // Load the Site Builder role.
    /** @var \Drupal\user\Entity\Role $role */
    $role = Role::load('site_builder');

    // Get the available site permissions.
    $allPermissions = $this->permissionHandler->getPermissions();
    $basePermissions = $this::BASE_SB_PERMISSIONS;
    // Remove missing permissions from base list.
    $availablePermissions = array_filter(array_keys($allPermissions), function ($permission) use ($basePermissions) {
      if (in_array($permission, $basePermissions, TRUE)) {
        return TRUE;
      }
      return FALSE;
    });

    // Add available base permissions.
    if ($role) {
      foreach ($availablePermissions as $permission) {
        $role->grantPermission($permission);
      }
    }
    $role->save();

    // Add module permissions.
    $allowed_modules = $this->configFactory->get('asu_governance.settings')->get('allowable_modules');
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
