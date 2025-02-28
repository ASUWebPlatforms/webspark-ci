<?php

namespace Drupal\asu_governance\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Config\PreExistingConfigException;
use Drupal\Core\Config\UnmetDependenciesException;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ModuleInstallerInterface;
use Drupal\Core\Form\ConfirmFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\KeyValueStore\KeyValueStoreExpirableInterface;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\system\Form\ModulesEnabledTrait;

/**
 * Builds a confirmation form for enabling curated modules with dependencies.
 */
class CuratedModulesListConfirmForm extends ConfirmFormBase {

  use ModulesEnabledTrait;

  /**
   * The module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The expirable key value store.
   *
   * @var \Drupal\Core\KeyValueStore\KeyValueStoreExpirableInterface
   */
  protected $keyValueExpirable;

  /**
   * An associative list of modules to install or uninstall.
   *
   * @var array
   */
  protected $modules = [];

  /**
   * The module installer.
   *
   * @var \Drupal\Core\Extension\ModuleInstallerInterface
   */
  protected $moduleInstaller;

  /**
   * The config factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * Constructs a CuratedModulesListConfirmForm object.
   *
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler.
   * @param \Drupal\Core\Extension\ModuleInstallerInterface $module_installer
   *   The module installer.
   * @param \Drupal\Core\KeyValueStore\KeyValueStoreExpirableInterface $key_value_expirable
   *   The key value expirable factory.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory.
   */
  public function __construct(ModuleHandlerInterface $module_handler, ModuleInstallerInterface $module_installer, KeyValueStoreExpirableInterface $key_value_expirable, ConfigFactoryInterface $config_factory) {
    $this->moduleHandler = $module_handler;
    $this->moduleInstaller = $module_installer;
    $this->keyValueExpirable = $key_value_expirable;
    $this->configFactory = $config_factory;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('module_handler'),
      $container->get('module_installer'),
      $container->get('keyvalue.expirable')->get('module_list'),
      $container->get('config.factory')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getQuestion() {
    return $this->t('Some required modules must be installed');
  }

  /**
   * {@inheritdoc}
   */
  public function getCancelUrl() {
    return new Url('asu_governance.modules_list');
  }

  /**
   * {@inheritdoc}
   */
  public function getConfirmText() {
    return $this->t('Continue');
  }

  /**
   * {@inheritdoc}
   */
  public function getDescription() {
    return $this->t('Would you like to continue with the above?');
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
    $account = $this->currentUser()->id();
    $this->modules = $this->keyValueExpirable->get($account);

    // Redirect to the modules list page if the key value store is empty.
    if (!$this->modules) {
      return $this->redirect('asu_governance.modules_list');
    }

    $items = $this->buildMessageList();
    $form['message'] = [
      '#theme' => 'item_list',
      '#items' => $items,
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * Builds the message list for the confirmation form.
   *
   * @return \Drupal\Component\Render\MarkupInterface[]
   *   Array of markup for the list of messages on the form.
   *
   * @see \Drupal\system\Form\ModulesListForm::buildModuleList()
   */
  protected function buildMessageList() {
    $items = [];
    $allDependencies = [];
    if (!empty($this->modules['dependencies'])) {
      // Display a list of required modules that have to be installed as well
      // but were not manually selected.
      foreach ($this->modules['dependencies'] as $module => $dependencies) {
        $items[] = $this->formatPlural(count($dependencies), 'You must install the @required module to install @module.', 'You must install the @required modules to install @module.', [
          '@module' => $this->modules['install'][$module],
          // It is safe to implode this because module names are not translated
          // markup and so will not be double-escaped.
          '@required' => implode(', ', $dependencies),
        ]);
        $allDependencies[] = current(array_keys($dependencies));
      }
      // Load the editable config object for asu_governance.settings.
      $config = $this->configFactory->getEditable('asu_governance.settings');
      $current_allowed = $this->config('asu_governance.settings')->get('allowable_modules');
      $new_allowed = array_unique(array_merge($current_allowed, $allDependencies));
      if ($current_allowed !== $new_allowed) {
        // Save the array into configuration.
        $config->set('allowable_modules', $new_allowed)->save();
      }
    }
    return $items;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Remove the key value store entry.
    $account = $this->currentUser()->id();
    $this->keyValueExpirable->delete($account);

    if (!empty($this->modules['install'])) {
      // Don't catch the exception that this can throw for missing dependencies:
      // the form doesn't allow modules with unmet dependencies, so the only way
      // this can happen is if the filesystem changed between form display and
      // submit, in which case the user has bigger problems.
      try {
        // Install the given modules.
        $this->moduleInstaller->install(array_keys($this->modules['install']));
      }
      catch (PreExistingConfigException $e) {
        $this->messenger()->addError($this->modulesFailToEnableMessage($this->modules, $e));
        return;
      }
      catch (UnmetDependenciesException $e) {
        $this->messenger()->addError(
          $e->getTranslatedMessage($this->getStringTranslation(), $this->modules['install'][$e->getExtension()])
        );
        return;
      }

      // Unset the messenger to make sure that we'll get the service from the
      // new container.
      $this->messenger = NULL;
      $this->messenger()
        ->addStatus($this->modulesEnabledConfirmationMessage($this->modules['install']));
    }

    $form_state->setRedirectUrl($this->getCancelUrl());
  }

}
