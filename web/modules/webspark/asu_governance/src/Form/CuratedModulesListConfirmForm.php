<?php

namespace Drupal\asu_governance\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ModuleInstallerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\KeyValueStore\KeyValueStoreExpirableInterface;
use Drupal\Core\Url;
use Drupal\system\Form\ModulesListConfirmForm;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Builds a confirmation form for enabling curated modules with dependencies.
 */
class CuratedModulesListConfirmForm extends ModulesListConfirmForm {

  /**
   * The config factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * {@inheritdoc}
   */
  public function __construct(ModuleHandlerInterface $module_handler, ModuleInstallerInterface $module_installer, KeyValueStoreExpirableInterface $key_value_expirable, ConfigFactoryInterface $config_factory) {
    parent::__construct($module_handler, $module_installer, $key_value_expirable);
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
  public function getCancelUrl() {
    return new Url('asu_governance.modules_list');
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
    parent::buildForm($form, $form_state);

    if (!$this->modules) {
      return $this->redirect('asu_governance.modules_list');
    }
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
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

}
