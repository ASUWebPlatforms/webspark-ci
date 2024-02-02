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
  //TODO: CARDS Properties needed:
  //admin_title: String
  //is_displaying_title: Bool
  //heading, text_color (ColorType.php [grey_7, white])
  //cta_url: String
  //cta_text: String
  //target (TargetType.php)
  //cta_style (ColorType.php only [gold, maroon, grey_2, grey_7])
  //vertical_alignment_text,
  //columns_displayed (ColumnType.php)
  //view_mode (ViewModeType.php only [default, landscape])
  //cards (Card.php)
  //cards_group_type (CardGroupType.php)
  //anchors (TBD)
  //spacing_bottom (Spacing.php)
  //spacing_top (Spacing.php)


  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
    $form['type'] = [
      '#type' => 'radios',
      '#title' => $this->t('List type'),
      '#options' => ['ul' => $this->t('Unordered list'), 'ol' => $this->t('Ordered list')],
      '#default_value' => $this->options['type'],
    ];
    $form['wrapper_class'] = [
      '#title' => $this->t('Wrapper class'),
      '#description' => $this->t('The class to provide on the wrapper, outside the list.'),
      '#type' => 'textfield',
      '#size' => '30',
      '#default_value' => $this->options['wrapper_class'],
    ];
    $form['class'] = [
      '#title' => $this->t('List class'),
      '#description' => $this->t('The class to provide on the list element itself.'),
      '#type' => 'textfield',
      '#size' => '30',
      '#default_value' => $this->options['class'],
    ];
  }

}



