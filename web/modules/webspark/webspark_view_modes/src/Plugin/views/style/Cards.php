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

      $options['card_media'] = ['default' => []];
      $options['card_heading'] = ['default' => []];
      $options['card_body'] = ['default' => []];
      $options['custom_arrangement_style'] = ['default' => ''];
      $options['summary'] = ['default' => ''];
      $options['heading'] = ['default' => ''];
      $options['heading_color'] = ['default' => ''];
      $options['spacing_top'] = ['default' => ''];
      $options['spacing_bottom'] = ['default' => ''];
      $options['columns_to_display'] = ['default' => ''];
      $options['view_mode'] = ['default' => ''];
      $options['card_ranking_image_size'] = ['default' => ''];
      $options['card_icon'] = ['default' => ''];
      $options['card_is_border_showing'] = ['default' => ''];

      $options['type'] = ['default' => 'ul'];
      $options['class'] = ['default' => ''];
      $options['wrapper_class'] = ['default' => 'item-list'];
      return $options;
    }


    public function buildOptionsForm(&$form, FormStateInterface $form_state) {

    parent::buildOptionsForm($form, $form_state);

    $form['heading'] = [
      '#title' => $this->t('Block Heading'),
      //'#description' => $this->t('The heading text to display.'),
      '#type' => 'textfield',
      '#size' => '30',
      '#default_value' => $this->options['heading'],
    ];

    $form['heading_color'] = [
      '#title' => $this->t('Block Text Color'),
      '#options' => [
        ColorEnum::GREY7->name => ColorEnum::GREY7->value,
        ColorEnum::WHITE->name => ColorEnum::WHITE->value
      ],
      '#type' => 'select',
      '#default_value' => $this->options['heading_color'],
    ];

    //Select which Card Arrangment style you want (Default, Ranking, Icon, etc.)
    //TODO: Can I make this effectively APPLY when the selection is changed, but not dismiss the view?
    $form['custom_arrangement_style'] = [
      '#title' => $this->t('Select Card Style'),
      '#options' => ArrangementStyleEnum::allOptions(),
      '#type' => 'select',
      '#default_value' => $this->options['custom_arrangement_style'],
    ];

  //HIDDEN RANKING OPTION
  if ($this->options['custom_arrangement_style'] == ArrangementStyleEnum::RANKING->name){
    //CUSTOM RANKING STYLE OPTIONS
    $form['card_ranking_image_size'] = [
      '#title' => $this->t('Card Ranking Image Size'),
      '#options' => SpacingEnum::allOptions(), //TODO: Add in appropriate Card Rank Image Size options
      '#type' => 'select',
      '#default_value' => $this->options['card_ranking_image_size'],
    ];
  }

  //HIDDEN ICON OPTIONS
  if ($this->options['custom_arrangement_style'] == ArrangementStyleEnum::ICON->name){

    $form[''] = [
      '#title' => $this->t('Card Icon'),
      '#options' => SpacingEnum::allOptions(), //TODO: Add in appropriate Card Icon options
      '#type' => 'select',
      '#default_value' => $this->options['card_icon'],
    ];

    $form['card_is_border_showing'] = [
      '#title' => $this->t('Show Card Border'),
      '#type' => 'checkbox',
      '#default_value' => $this->options['card_is_border_showing'],
    ];

  }

  //Here's the magic where we pull in all of the Fields to select from when assigning the items below.
  $field_names = $this->displayHandler->getFieldLabels();

    $form['card_media'] = [
      '#title' => $this->t('Select Card Media'),
      '#type' => 'select',
      '#options' => $field_names,
      '#default_value' => $this->options['card_media'],
    ];

    $form['card_heading'] = [
      '#title' => $this->t('Select Card Heading'),
      '#type' => 'select',
      '#options' => $field_names,
      '#default_value' => $this->options['card_heading'],
    ];

    $form['card_body'] = [
      '#title' => $this->t('Select Card Body'),
      '#type' => 'select',
      '#options' => $field_names,
      '#default_value' => $this->options['card_body'],
    ];

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



