<?php
declare(strict_types=1);

namespace Drupal\webspark_view_modes\Plugin\views\style;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\style\StylePluginBase;

//TODO:  Is this the correct way to import the Enums? Seems awkward.
require_once('ColorType.php');
use ColorType;

require_once('ColumnType.php');
use ColumnType;

require_once('TargetType.php');
use TargetType;

require_once('SpacingType.php');
use SpacingType;

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
      $form['title'] = [
        '#title' => $this->t('Block admin title'),
        '#description' => $this->t('The title of the block as shown to the user.'),
        '#type' => 'textfield',
        '#size' => '30',
        '#required' => TRUE,
        '#default_value' => '',
      ];

      //Is title displayed?
      $form['display_title'] = [
        '#type' => 'checkbox',
        '#title' => $this->t('Display Title'),
        '#default_value' => 0,
      ];

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
          ColorType::Grey7->name => ColorType::Grey7->value,
          ColorType::White->name => ColorType::White->value
        ],
        '#type' => 'select',
        '#default_value' => ColorType::Grey7->name,
      ];

      //CTA url
      $form['cta_url'] = [
        '#title' => $this->t('CTA URL'),
        //'#description' => $this->t('The call to action link.'),
        '#type' => 'textfield',
        '#size' => '30',
        '#default_value' => '',
      ];

      //CTA text
      $form['cta_text'] = [
        '#title' => $this->t('CTA Link Text'),
        //'#description' => $this->t('The heading text to display.'),
        '#type' => 'textfield',
        '#size' => '30',
        '#default_value' => '',
      ];

      //CTA target type
      $form['cta_target'] = [
        '#title' => $this->t('Select a target'),
        '#options' => [
          TargetType::None->name => TargetType::None->value,
          TargetType::Current->name => TargetType::Current->value,
          TargetType::New->name => TargetType::New->value,
          TargetType::Parent->name => TargetType::Parent->value,
          TargetType::Topmost->name => TargetType::Topmost->value
        ],
        '#type' => 'select',
        '#default_value' => TargetType::None->name,
      ];

      //TEXT AREA
      //TODO: Can we add the wysiwyg toolbar to this text area?
      $form['formatted_text'] = [
        '#title' => $this->t('Formatted Text (Only for Card Vertical Arrangements)'),
        '#type' => 'textarea',
        '#default_value' => '',
      ];

      //TEXT FORMAT
      //TOOLTIP
      //CARDS
      //--CARD DETAILS
      //ANCHOR STUFF?

      //Spacing top
      $form['spacing_top'] = [
        '#title' => $this->t('Spacing Top'),
        '#options' => [
          SpacingType::None->name => SpacingType::None->value,
          SpacingType::Eight->name => SpacingType::Eight->value,
          SpacingType::Sixteen->name => SpacingType::Sixteen->value,
          SpacingType::ThirtyTwo->name => SpacingType::ThirtyTwo->value,
          SpacingType::Forty->name => SpacingType::Forty->value,
          SpacingType::FortyEight->name => SpacingType::FortyEight->value,
          SpacingType::SeventyTwo->name => SpacingType::SeventyTwo->value,
          SpacingType::NinetySix->name => SpacingType::NinetySix->value,
          SpacingType::NegativeEight->name => SpacingType::NegativeEight->value,
          SpacingType::NegativeSixteen->name => SpacingType::NegativeSixteen->value,
          SpacingType::NegativeThirtyTwo->name => SpacingType::NegativeThirtyTwo->value,
          SpacingType::NegativeForty->name => SpacingType::NegativeForty->value,
          SpacingType::NegativeFortyEight->name => SpacingType::NegativeFortyEight->value,
          SpacingType::NegativeSeventyTwo->name => SpacingType::NegativeSeventyTwo->value,
          SpacingType::NegativeNinetySix->name => SpacingType::NegativeNinetySix->value
        ],
        '#type' => 'select',
        '#default_value' => SpacingType::None->name,
      ];

      //Spacing bottom
      $form['spacing_bottom'] = [
        '#title' => $this->t('Spacing Bottom'),
        '#options' => [
          SpacingType::None->name => SpacingType::None->value,
          SpacingType::Eight->name => SpacingType::Eight->value,
          SpacingType::Sixteen->name => SpacingType::Sixteen->value,
          SpacingType::ThirtyTwo->name => SpacingType::ThirtyTwo->value,
          SpacingType::Forty->name => SpacingType::Forty->value,
          SpacingType::FortyEight->name => SpacingType::FortyEight->value,
          SpacingType::SeventyTwo->name => SpacingType::SeventyTwo->value,
          SpacingType::NinetySix->name => SpacingType::NinetySix->value,
          SpacingType::NegativeEight->name => SpacingType::NegativeEight->value,
          SpacingType::NegativeSixteen->name => SpacingType::NegativeSixteen->value,
          SpacingType::NegativeThirtyTwo->name => SpacingType::NegativeThirtyTwo->value,
          SpacingType::NegativeForty->name => SpacingType::NegativeForty->value,
          SpacingType::NegativeFortyEight->name => SpacingType::NegativeFortyEight->value,
          SpacingType::NegativeSeventyTwo->name => SpacingType::NegativeSeventyTwo->value,
          SpacingType::NegativeNinetySix->name => SpacingType::NegativeNinetySix->value
        ],
        '#type' => 'select',
        '#default_value' => SpacingType::None->name,
      ];

      //Number of columns to display
      $form['columns_to_display'] = [
        '#type' => 'select',
        '#title' => $this->t('Columns to Display'),
        '#options' => [
          ColumnType::Select->name => ColumnType::Select->value,
          ColumnType::Two->name => ColumnType::Two->value,
          ColumnType::Three->name => ColumnType::Three->value,
          ColumnType::Four->name => ColumnType::Four->value
        ],
        '#default_value' => ColumnType::Select->name, //$this->options['type'],
      ];

      //Default or Landscape view mode
      $form['view_mode'] = [
        '#type' => 'select',
        '#title' => $this->t('View Mode'),
        '#description' => $this->t('The view mode in which to render the block.'),
        '#options' => ['default' => $this->t('Default'), 'landscape' => $this->t('Landscape')],
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



