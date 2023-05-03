<?php

/**
 * @file
 * Custom theme hooks.
 */

/**
 * Implements hook_library_info_build().
 * Automatically creates components libraries (Not visible in theme's libraries.yml file)
 * This allows us to add js files/behaviours to components within the components own folder.
 * Note that the component should have the same name as the folder.
 *  {{ attach_library('renovation/block') }}.
 */
function renovation_library_info_build() {
  $extensions = ['css', 'js'];
  $theme_path = \Drupal::service('theme_handler')->getTheme('renovation')->getPath();
  $directory = $theme_path . '/src/components';
  $extensions = array_map('preg_quote', $extensions);
  $extensions = implode('|', $extensions);
  if (!is_dir($directory)) {
    return [];
  }
  $file_scan = \Drupal::service('file_system')->scanDirectory($directory, "/{$extensions}$/");
  $libraries = [];
  foreach ($file_scan as $file) {
    $parts = explode('.', $file->filename);
    $extension = end($parts);
    switch ($extension) {
      case 'css':
        $libraries[$file->name][$extension] = [
          'component' => [
            '/' . $file->uri => [],
          ],
        ];
        break;

      case 'js':
        $libraries[$file->name][$extension] = [
          '/' . $file->uri => [],
        ];
        break;
    }
  }
  return $libraries;
}

/**
 * Preprocess variables for all templates.
 * @param $variables
 */
function renovation_preprocess(&$variables, $hook) {
  // Inject the current language into every template
  $language = \Drupal::languageManager()->getCurrentLanguage()->getId();
  $variables['language'] = $language;

  // Inject the base url into every template
  global $base_url;
  $variables['base_url'] = $base_url;

  // Check if we have an error and add the required asu class.
  // Add new hooks here if they need this class on error.
  if (in_array($hook, ['input', 'textarea', 'select'])) {
    if (isset($variables['element']['#errors']) && $variables['element']['#errors']) {
      $variables['attributes']['class'][] = 'is-invalid';
    }
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function renovation_theme_suggestions_image_style_alter(array &$suggestions, array $variables) {
  $suggestions[] = $variables['theme_hook_original'] . '__' . $variables['style_name'];
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function renovation_theme_suggestions_image_alter(array &$suggestions, array $variables) {
  $suggestions[] = $variables['theme_hook_original'] . '__' . $variables['style_name'];
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function renovation_theme_suggestions_input_alter(array &$suggestions, array $variables) {
  $element = $variables['element'];
  if (isset($element['#name']) && strpos($element['#name'], 'field_banner_background_color') > 0) {
    // Specifically for radio inputs on color selector.
    $suggestions[] = $variables['theme_hook_original'] . '__' . 'field_banner_background_color';
  }
}

/**
 * Implements hook_page_attachments_alter().
 * @param array $page
 */
function renovation_page_attachments_alter(array &$page) {
  // Get the path to the Drupal installation.
  $fragments = explode('/', DRUPAL_ROOT);
  // Remove the last element (web) because we want to go up a level.
  array_pop($fragments);
  // Build the composer path.
  $composer_path = implode('/', $fragments) . '/upstream-configuration/composer.json';
  
  // Get the version number.
  $version = '1.0';
  if (file_exists($composer_path)) {
    $composerJSON = file_get_contents($composer_path);
    $composer_contents = \Drupal\Component\Serialization\Json::decode($composerJSON);
    $version = $composer_contents['version'] ?? '1.0';
  }
  
  $tag = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'cmsversion',
      'http-equiv' => 'X-Name-of-Distro',
      'content' => 'Webspark2:' . $version,
    ),
  );
  
  $page['#attached']['html_head'][] = [$tag, 'tagname'];
}
