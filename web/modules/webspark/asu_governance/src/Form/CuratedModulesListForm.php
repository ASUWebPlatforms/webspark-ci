<?php

namespace Drupal\asu_governance\Form;

use Drupal\Core\Access\AccessManagerInterface;
use Drupal\Core\Extension\InfoParserException;
use Drupal\Core\Extension\ModuleExtensionList;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ModuleInstallerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\KeyValueStore\KeyValueStoreExpirableInterface;
use Drupal\Core\Messenger\Messenger;
use Drupal\Core\Render\Element;
use Drupal\Core\Render\Markup;
use Drupal\Core\Session\AccountInterface;
use Drupal\system\Form\ModulesListForm;
use Drupal\user\PermissionHandlerInterface;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Component\Utility\Xss;

/**
 * Provides module installation interface.
 *
 * The list of curated modules includes all modules marked as allowed in the
 * asu_governance's settings form, except for obsolete modules.
 *
 * @see \Drupal\Core\Extension\InfoParser
 */
class CuratedModulesListForm extends ModulesListForm {

  /**
   * Allowed modules from the configuration.
   *
   * @var array
   */
  protected $allowableModules;

  /**
   * The messenger service.
   *
   * @var \Drupal\Core\Messenger\Messenger
   */
  protected $messenger;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('module_handler'),
      $container->get('module_installer'),
      $container->get('keyvalue.expirable')->get('module_list'),
      $container->get('access_manager'),
      $container->get('current_user'),
      $container->get('user.permissions'),
      $container->get('extension.list.module'),
      $container->get('messenger')
    );
  }

  /**
   * Constructs a CuratedModulesListForm object.
   *
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler.
   * @param \Drupal\Core\Extension\ModuleInstallerInterface $module_installer
   *   The module installer.
   * @param \Drupal\Core\KeyValueStore\KeyValueStoreExpirableInterface $key_value_expirable
   *   The key value expirable factory.
   * @param \Drupal\Core\Access\AccessManagerInterface $access_manager
   *   Access manager.
   * @param \Drupal\Core\Session\AccountInterface $current_user
   *   The current user.
   * @param \Drupal\user\PermissionHandlerInterface $permission_handler
   *   The permission handler.
   * @param \Drupal\Core\Extension\ModuleExtensionList $extension_list_module
   *   The module extension list.
   * @param \Drupal\Core\Messenger\Messenger $messenger
   *    The messenger service.
   */
  public function __construct(ModuleHandlerInterface $module_handler, ModuleInstallerInterface $module_installer, KeyValueStoreExpirableInterface $key_value_expirable, AccessManagerInterface $access_manager, AccountInterface $current_user, PermissionHandlerInterface $permission_handler, ModuleExtensionList $extension_list_module, Messenger $messenger) {
    parent::__construct($module_handler, $module_installer, $key_value_expirable, $access_manager, $current_user, $permission_handler, $extension_list_module);
    $this->allowableModules = $this->config('asu_governance.settings')->get('allowable_modules') ?? [];
    $this->messenger = $messenger;
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'asu_governance_curated_modules';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);
    $form['modules'] = [];

    $this->messenger->addMessage($this->t('<p><strong>Please note:</strong> This is a filtered list of all the modules available to you in the site based on your user role/permissions.</p><p>If you do not see a module you previously had access to in Pantheon, please <a href="https://asu.edu/webservices">open a Web Services ticket</a> and we will assist you.</p>'), 'warning');

    require_once DRUPAL_ROOT . '/core/includes/install.inc';
    $distribution = drupal_install_profile_distribution_name();

    // Include system.admin.inc so we can use the sort callbacks.
    $this->moduleHandler->loadInclude('system', 'inc', 'system.admin');

    $form['filters']['text']['#attributes'] = [
        'class' => ['table-filter-text'],
        'data-table' => '#asu-governance-curated-modules',
        'autocomplete' => 'off',
    ];

    // Sort all modules by their names.
    try {
      // The module list needs to be reset so that it can re-scan and include
      // any new modules that may have been added directly into the filesystem.
      $all_modules = array_filter($this->moduleExtensionList->reset()->getList(), function ($module) {
        return !$module->isObsolete();
      });

      // Only include ASU modules.
      $displayed_modules = array_filter($all_modules, function ($module) {
        if (!$module->isObsolete()
            && (in_array($module->getName(), $this->allowableModules, TRUE)
          )) {
          return $module;
        }
        return FALSE;
      });
      uasort($displayed_modules, [ModuleExtensionList::class, 'sortByName']);
    }
    catch (InfoParserException $e) {
      $this->messenger()->addError($this->t('Modules could not be listed due to an error: %error', ['%error' => $e->getMessage()]));
      $displayed_modules = [];
    }

    // Iterate over each of the modules.
    $form['modules']['#tree'] = TRUE;
    $incompatible_installed = FALSE;
    foreach ($displayed_modules as $filename => $module) {
      if (empty($module->info['hidden'])) {
        $package = $module->info['package'];
        $form['modules'][$package][$filename] = $this->buildRow($all_modules, $module, $distribution);
        $form['modules'][$package][$filename]['#parents'] = ['modules', $filename];
      }
      if (!$incompatible_installed && $module->status && $module->info['core_incompatible']) {
        $incompatible_installed = TRUE;
        $this->messenger()->addWarning($this->t(
          'There are errors with some installed modules. Visit the <a href=":link">status report page</a> for more information.',
          [':link' => Url::fromRoute('system.status')->toString()]
        ));
      }
    }

    // Add a wrapper around every package.
    foreach (Element::children($form['modules']) as $package) {
      $form['modules'][$package] += [
        '#type' => 'details',
        '#title' => Markup::create(Xss::filterAdmin($this->t($package))),
        '#open' => TRUE,
        '#theme' => 'system_modules_details',
        '#attributes' => ['class' => ['package-listing']],
        // Ensure that the "Core" package comes first.
        '#weight' => $package == 'Core' ? -10 : NULL,
      ];
    }

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    $route_name = !empty($modules['non_stable']) ? 'system.modules_list_non_stable_confirm' : 'asu_governance.modules_list_confirm';
    // Redirect to the confirmation form.
    $form_state->setRedirect($route_name);
  }

}
