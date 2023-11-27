<?php

namespace Drupal\webspark_ckeditor_plugins\Plugin\CKEditor4To5Upgrade;

use Drupal\ckeditor5\HTMLRestrictions;
use Drupal\ckeditor5\Plugin\CKEditor4To5UpgradePluginInterface;
use Drupal\Core\Plugin\PluginBase;
use Drupal\filter\FilterFormatInterface;

class WebsparkListStyle extends PluginBase implements CKEditor4To5UpgradePluginInterface {

    /**
     * {@inheritdoc}
     */
    public function mapCKEditor4ToolbarButtonToCKEditor5ToolbarItem(string $cke4_button, HTMLRestrictions $text_format_html_restrictions): ?array {
        switch ($cke4_button) {
            case 'WebsparkListStyle':
                return ['websparkliststyle'];

            default:
                throw new \OutOfBoundsException();
        }
    }

    /**
     * {@inheritdoc}
     */
    public function mapCKEditor4SettingsToCKEditor5Configuration(string $cke4_plugin_id, array $cke4_plugin_settings): ?array {
        throw new \OutOfBoundsException();
    }

    /**
     * {@inheritdoc}
     */
    public function computeCKEditor5PluginSubsetConfiguration(string $cke5_plugin_id, FilterFormatInterface $text_format): ?array {
        throw new \OutOfBoundsException();
    }
}