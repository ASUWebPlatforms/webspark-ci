<?php
declare(strict_types=1);

namespace Drupal\webspark_view_modes\Plugin\views\style;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\style\StylePluginBase;

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
require_once('enums/ArrangementStyle.enum.php');
use ArrangementStyleEnum;

/**
   * Style plugin to render each item in an ordered or unordered list.
   *
   * @ingroup views_style_plugins
    *
  * @ViewsStyle(
  *   id = "cards",
  *   title = @Translation("Cards"),
  *   help = @Translation("Displays rows as Cards list."),
  *   theme = "views_view_webspark_cards",
  *   display_types = {"normal"}
  * )
  */
  class Cards extends StylePluginBase {

      /**
   * Does the style plugin for itself support to add fields to its output.
   *
   * @var bool
   */
    protected $usesFields = TRUE;

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

    protected $usesOptions = true;


    /**
     * Set default options.
     */
    protected function defineOptions() {
      $options = parent::defineOptions();

      $options['card_media'] = ['default' => []];
      $options['card_heading'] = ['default' => []];
      $options['card_body'] = ['default' => []];
      $options['card_cta'] = ['default' => []];
      $options['custom_arrangement_style'] = ['default' => ''];
      $options['heading'] = ['default' => ''];
      $options['heading_color'] = ['default' => ''];
      $options['spacing_top'] = ['default' => ''];
      $options['spacing_bottom'] = ['default' => ''];
      $options['columns_to_display'] = ['default' => ''];
      $options['view_mode'] = ['default' => ''];
      $options['card_ranking'] = ['default' => ''];
      $options['card_icon'] = ['default' => ''];
      $options['card_is_border_showing'] = ['default' => ''];

      $options['type'] = ['default' => 'ul'];
      $options['class'] = ['default' => ''];
      $options['wrapper_class'] = ['default' => 'item-list'];
      return $options;
    }


    public function buildOptionsForm(&$form, FormStateInterface $form_state) {

      parent::buildOptionsForm($form, $form_state);

      //Here's the magic where we pull in all of the Fields to select from when assigning the items below.
      $field_names = $this->displayHandler->getFieldLabels();

      $form['heading'] = [
        '#title' => $this->t('Heading'),
        '#type' => 'textfield',
        '#size' => '30',
        '#default_value' => $this->options['heading'],
      ];

      $form['heading_color'] = [
        '#title' => $this->t('Text Color'),
        '#options' => ColorEnum::mainContentTextOptions(),
        '#type' => 'select',
        '#default_value' => $this->options['heading_color'],
      ];

      //Select which Card Arrangment style you want (Default, Ranking, Icon, etc.)
      //TODO: Can I make this effectively APPLY when the selection is changed, but not dismiss the view?
      $form['custom_arrangement_style'] = [
        '#title' => $this->t('Card Arrangement Style'),
        '#options' => ArrangementStyleEnum::allOptions(),
        '#type' => 'select',
        '#default_value' => $this->options['custom_arrangement_style'],
      ];

    //HIDDEN RANKING OPTION
    if ($this->options['custom_arrangement_style'] == ArrangementStyleEnum::RANKING->name){

      $form['card_ranking'] = [
        '#title' => $this->t('Card Ranking'),
        '#type' => 'select',
        '#options' => $field_names,
        '#default_value' => $this->options['card_ranking'],
      ];

    }

    //HIDDEN ICON OPTIONS
    if ($this->options['custom_arrangement_style'] == ArrangementStyleEnum::ICON->name){

      $form['card_icon'] = [
        '#title' => $this->t('Card Icon'),
        '#options' => $field_names,
        '#type' => 'select',
        '#default_value' => $this->options['card_icon'],
      ];

      $form['card_is_border_showing'] = [
        '#title' => $this->t('Show Card Border'),
        '#type' => 'checkbox',
        '#default_value' => $this->options['card_is_border_showing'],
      ];

      $form['card_media'] = [
        '#title' => $this->t('Card Media'),
        '#type' => 'select',
        '#options' => $field_names,
        '#default_value' => $this->options['card_media'],
      ];

      $form['card_heading'] = [
        '#title' => $this->t('Card Heading'),
        '#type' => 'select',
        '#options' => $field_names,
        '#default_value' => $this->options['card_heading'],
      ];

      $form['card_body'] = [
        '#title' => $this->t('Card Body'),
        '#type' => 'select',
        '#options' => $field_names,
        '#default_value' => $this->options['card_body'],
      ];

      $form['card_cta'] = [
        '#title' => $this->t('Card CTA'),
        '#type' => 'select',
        '#options' => $field_names,
        '#default_value' => $this->options['card_cta'],
      ];

      //TODO: Add Tooltip?
      //TODO: Add Anchor Menu Settings?

      //Some additional Block Settings
      $form['spacing_top'] = [
        '#title' => $this->t('Spacing Top'),
        '#options' => SpacingEnum::allOptions(),
        '#type' => 'select',
        '#default_value' => $this->options['spacing_top'],
      ];

      $form['spacing_bottom'] = [
        '#title' => $this->t('Spacing Bottom'),
        '#options' => SpacingEnum::allOptions(),
        '#type' => 'select',
        '#default_value' => $this->options['spacing_bottom'],
      ];

      /* Hi Dave! Probably want to set a default value for the columns here if nothing is selected
      for example  (isset($this->options['columns_to_display'])) ? $this->options['columns_to_display'] : 'TWO' 
      probably should match whatever the default columns are in layout builder card arrangement */

      $form['columns_to_display'] = [
        '#type' => 'select',
        '#title' => $this->t('Columns to Display'),
        '#options' => ColumnEnum::allOptions(),
        '#default_value' => $this->options['columns_to_display'],
      ];

      $form['view_mode'] = [
        '#type' => 'select',
        '#title' => $this->t('View Mode'),
        '#description' => $this->t('The view mode in which to render the block.'),
        '#options' => ViewModeEnum::allOptions(),
        '#default_value' =>  $this->options['view_mode'],
      ];
    }
    
  }
}