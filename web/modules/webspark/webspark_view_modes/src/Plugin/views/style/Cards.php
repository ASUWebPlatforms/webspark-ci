<?php
declare(strict_types=1);

namespace Drupal\webspark_view_modes\Plugin\views\style;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\style\StylePluginBase;



//TODO:  Is this the correct way to import the Enums? Seems awkward.
require_once('enums/Color.enum.php');
use ColorEnum;

require_once('enums/Column.enum.php');
use ColumnEnum;

require_once('enums/TargetWindow.enum.php');
use TargetWindowEnum;

require_once('enums/Spacing.enum.php');
use SpacingEnum;

require_once('enums/ViewMode.enum.php');
use ViewModeEnum;

/**
   * Style plugin to render each item in an ordered or unordered list.
   *
   * @ingroup views_style_plugins
    *
  * @ViewsStyle(
  *   id = "cards",
  *   title = @Translation("Cards"),
  *   help = @Translation("Displays rows as Cards list."),
  *   theme = "views_view_list",
  *   display_types = {"normal"}
  * )
  */
  class Cards extends StylePluginBase {

    /**
     * {@inheritdoc}
     */
    protected $usesRowPlugin = TRUE;

    /**
     * Does the style plugin support custom css class for the rows.
     *
     * @var bool
     */
    protected $usesRowClass = TRUE;

    /**
     * Set default options.
     */
    protected function defineOptions() {
      $options = parent::defineOptions();
      $options['type'] = ['default' => 'ul'];
      $options['class'] = ['default' => ''];
      $options['wrapper_class'] = ['default' => 'item-list'];
      return $options;
    }


    /**
     * Render the given style.
     */

    public function buildOptionsForm(&$form, FormStateInterface $form_state) {

      parent::buildOptionsForm($form, $form_state);

      //Title text
      // $form['title'] = [
      //   '#title' => $this->t('Block admin title'),
      //   '#description' => $this->t('The title of the block as shown to the user.'),
      //   '#type' => 'textfield',
      //   '#size' => '30',
      //   '#required' => TRUE,
      //   '#default_value' => '',
      // ];

      // //Is title displayed?
      // $form['display_title'] = [
      //   '#type' => 'checkbox',
      //   '#title' => $this->t('Display Title'),
      //   '#default_value' => 0,
      // ];

      //Heading text
      $form['heading'] = [
        '#title' => $this->t('Heading'),
        //'#description' => $this->t('The heading text to display.'),
        '#type' => 'textfield',
        '#size' => '30',
        '#default_value' => '',
      ];

      //Color of Heading Text
      $form['heading_color'] = [
        '#title' => $this->t('Text Color'),
        '#options' => [
          ColorEnum::GREY7->name => ColorEnum::GREY7->value,
          ColorEnum::WHITE->name => ColorEnum::WHITE->value
        ],
        '#type' => 'select',
        '#default_value' => ColorEnum::GREY7->name,
      ];

      //CTA url
      // $form['cta_url'] = [
      //   '#title' => $this->t('CTA URL'),
      //   //'#description' => $this->t('The call to action link.'),
      //   '#type' => 'textfield',
      //   '#size' => '30',
      //   '#default_value' => '',
      // ];

      //CTA text
      // $form['cta_text'] = [
      //   '#title' => $this->t('CTA Link Text'),
      //   //'#description' => $this->t('The heading text to display.'),
      //   '#type' => 'textfield',
      //   '#size' => '30',
      //   '#default_value' => '',
      // ];

      // //CTA target type
      // $form['cta_target'] = [
      //   '#title' => $this->t('Select a target'),
      //   '#options' => TargetType::allOptions(),
      //   '#type' => 'select',
      //   '#default_value' => TargetType::None->name,
      // ];

      // //TEXT AREA
      // //TODO: Can we add the wysiwyg toolbar to this text area?
      // $form['formatted_text'] = [
      //   '#title' => $this->t('Formatted Text (Only for Card Vertical Arrangements)'),
      //   '#type' => 'textarea',
      //   '#default_value' => '',
      // ];

      //TEXT FORMAT
      //TOOLTIP
      //TODO: CARDS
      //TODO: --CARD DETAILS
      //ANCHOR STUFF?

      //Spacing top

      $form['spacing_top'] = [
        '#title' => $this->t('Spacing Top'),
        '#options' => SpacingEnum::allOptions(),
        '#type' => 'select',
        '#default_value' => SpacingEnum::NONE->name,
      ];

      //Spacing bottom
      $form['spacing_bottom'] = [
        '#title' => $this->t('Spacing Bottom'),
        '#options' => SpacingEnum::allOptions(),
        '#type' => 'select',
        '#default_value' => SpacingEnum::NONE->name,
      ];

      //Number of columns to display
      $form['columns_to_display'] = [
        '#type' => 'select',
        '#title' => $this->t('Columns to Display'),
        '#options' => ColumnEnum::allOptions(),
        '#default_value' => ColumnEnum::SELECT->name, //$this->options['type'],
      ];

      //Default or Landscape view mode
      $form['view_mode'] = [
        '#type' => 'select',
        '#title' => $this->t('View Mode'),
        '#description' => $this->t('The view mode in which to render the block.'),
        '#options' => ViewModeEnum::allOptions(),
        '#default_value' => 'default',
      ];

      //Previously existing options
      // $options = [
      //   ''  => $this->t('- None -'),
      //   '.' => $this->t('Decimal point'),
      //   ',' => $this->t('Comma'),
      //   ' ' => $this->t('Space'),
      //   chr(8201) => $this->t('Thin space'),
      //   "'" => $this->t('Apostrophe'),
      // ];
      // $elements['thousand_separator'] = [
      //   '#type' => 'select',
      //   '#title' => $this->t('Thousand marker'),
      //   '#options' => $options,
      //   '#default_value' => $this->getSetting('thousand_separator'),
      //   '#weight' => 0,
      // ];
      // $form['wrapper_class'] = [
      //   '#title' => $this->t('Wrapper class'),
      //   '#description' => $this->t('The class to provide on the wrapper, outside the list.'),
      //   '#type' => 'textfield',
      //   '#size' => '30',
      //   '#default_value' => $this->options['wrapper_class'],
      // ];
      // $form['class'] = [
      //   '#title' => $this->t('List class'),
      //   '#description' => $this->t('The class to provide on the list element itself.'),
      //   '#type' => 'textfield',
      //   '#size' => '30',
      //   '#default_value' => $this->options['class'],
      // ];
    }
  }



