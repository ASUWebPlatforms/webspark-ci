<?php

namespace Drupal\webspark_view_modes\Plugin\views\style;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\style\StylePluginBase;

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


   //TODO: Allow the buildOptionsForm function the ability to accept appropriate properties
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    $form['title'] = [
      '#title' => $this->t('Block admin title'),
      '#description' => $this->t('The title of the block as shown to the user.'),
      '#type' => 'textfield',
      '#size' => '30',
      '#required' => TRUE,
      '#default_value' => '',
    ];

    $form['display_title'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Display Title'),
      '#default_value' => 0,
    ];

    $form['heading'] = [
      '#title' => $this->t('Heading'),
      //'#description' => $this->t('The heading text to display.'),
      '#type' => 'textfield',
      '#size' => '30',
      '#default_value' => '',
    ];

    //TEXT COLOR

    $form['heading_color'] = [
      '#title' => $this->t('Text Color'),
      //'#description' => $this->t('The style for the heading text.'),
      '#options' => ['gray7' => $this->t('Gray 7'), 'white' => $this->t('White')],
      '#type' => 'select',
      '#default_value' => 'gray7',
    ];

    //CTA URL
    //CTA TEXT
    //TARGET
    //CTA STYLE
    //TEXT AREA
    //TEXT FORMAT
    //TOOLTIP?
    //CARDS
    // CARD STUFF
    //ANCHOR STUFF
    //SPACING TOP
    //SPACING BOTTOM

    $form['columns_to_display'] = [
      '#type' => 'select',
      '#title' => $this->t('Columns to Display'),
      '#options' => ['none' => $this->t('- Select a value -'), 'two_columns' => $this->t('Two Columns'), 'three_columns' => $this->t('Three Columns'), 'four_columns' => $this->t('Four Columns')],
      '#default_value' => 'none', //$this->options['type'],
    ];

        $form['view_mode'] = [
          '#type' => 'select',
          '#title' => $this->t('View Mode'),
          '#options' => ['default' => $this->t('Default'), 'landscape' => $this->t('Landscape')],
          '#default_value' => 'default',
        ];

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



