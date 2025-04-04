<?php

namespace Drupal\asu_governance\Controller;

use Symfony\Component\HttpFoundation\Request;
use Drupal\system\Controller\ThemeController;

/**
 * Controller for curated theme handling.
 */
class CuratedThemeController extends ThemeController {

  /**
   * {@inheritdoc}
   */
  public function uninstall(Request $request) {
    parent::uninstall($request);
    return $this->redirect('asu_governance.themes_page');
  }

  /**
   * {@inheritdoc}
   */
  public function install(Request $request) {
    parent::install($request);
    return $this->redirect('asu_governance.themes_page');
  }

  /**
   * {@inheritdoc}
   */
  public function setDefaultTheme(Request $request) {
    parent::setDefaultTheme($request);
    return $this->redirect('asu_governance.themes_page');
  }

}
