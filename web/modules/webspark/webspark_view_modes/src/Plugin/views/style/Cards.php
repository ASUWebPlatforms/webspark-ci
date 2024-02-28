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

      //pasted from table
      $options['assignments'] = ['default' => []];
      $options['default'] = ['default' => ''];
      $options['info'] = ['default' => []];
      $options['override'] = ['default' => TRUE];
      $options['sticky'] = ['default' => FALSE];
      $options['order'] = ['default' => 'asc'];
      $options['caption'] = ['default' => ''];
      $options['summary'] = ['default' => ''];
      $options['description'] = ['default' => ''];
      $options['empty_table'] = ['default' => FALSE];
      //end paste

      $options['custom_arrangement_style'] = ['default' => ''];
      $options['summary'] = ['default' => ''];
      $options['heading'] = ['default' => ''];
      $options['heading_color'] = ['default' => ''];
      $options['spacing_top'] = ['default' => ''];
      $options['spacing_bottom'] = ['default' => ''];
      $options['assignments_to_display'] = ['default' => ''];
      $options['view_mode'] = ['default' => ''];






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

    //TODO: Eventually remove this and use which card arrangement style is selected to display or hide views
    $is_ranking_selected = FALSE;

//TODO: START DL EXPERIMENT 1/2
      //Heading text
      $form['heading'] = [
        '#title' => $this->t('Block Heading'),
        //'#description' => $this->t('The heading text to display.'),
        '#type' => 'textfield',
        '#size' => '30',
        '#default_value' => !empty($this->options['heading']),
      ];

      //Color of Heading Text
      $form['heading_color'] = [
        '#title' => $this->t('Block Text Color'),
        '#options' => [
          ColorEnum::GREY7->name => ColorEnum::GREY7->value,
          ColorEnum::WHITE->name => ColorEnum::WHITE->value
        ],
        '#type' => 'select',
        '#default_value' => !empty($this->options['heading_color']),
      ];


    //Note: views UI registers this theme handler on our behalf. Your module
    //will have to register your theme handlers if you do stuff like this.
    //echo $this->options['custom_arrangement_style'];
    //echo $this->t($this->options['custom_arrangement_style']);

      //Select which Arrangment type you want
    $form['custom_arrangement_style'] = [
      '#title' => $this->t('Card Arrangement Style currently set is ' . $this->options['custom_arrangement_style']),
      '#options' => ArrangementStyleEnum::allOptions(),
      '#type' => 'select',
      '#default_value' => !empty($this->options['custom_arrangement_style']),
    ];


    //TODO: Eventually use which card arrangement style is selected to display or hide views
    //if ($this->options['arrangement_style'] == ArrangementStyleEnum::RANKING){
    if ($this->options['custom_arrangement_style'] == ArrangementStyleEnum::DEFAULT->value){
      $form['test'] = [
      '#title' => $this->t('** TEST ** '),
      '#options' => SpacingEnum::allOptions(),
      '#type' => 'select',
      '#default_value' => !empty($this->options['test']),
    ];
  }


    //Themeing fluff
    //$form['#theme'] = 'views_ui_style_plugin_table';
    //Table view way of defining the columns
    //$assignments = $this->sanitizeColumns($this->options['assignments']);

    //Create an array of allowed assignments from the data we know:
    $field_names = $this->displayHandler->getFieldLabels();


    // Here is where we are currently forcing the assignemnts of required assignment selection.  Move this later.
    //TODO: The value for each assignement might need to be more carefully assigned based on persistance attributes
    $assignments = ['Card Media' => 0, 'Card Heading' => 1, 'Card Body' => 2, 'Card Link' => 3];


    // Which of these are "Assignements" to make VS which are options to adjust in this "Format Settings" page ?
    // 'Card Media'  = ASSIGN ME
    // 'Card Heading' = ASSIGN ME
    // 'Card Body'  = ASSIGN ME
    // 'Card Link' = ASSIGN ME

    // 'Card Ranking Image Size'
    // 'Card Icon'
    // 'Card Show Borders'



  //TODO:  What's up with this code?
    if (isset($this->options['default'])) {
      $default = $this->options['default'];
      if (!isset($assignments[$default])) {
        $default = -1;
      }
    }
    else {
      $default = -1;
    }

    foreach ($assignments as $field => $assignment) {
      //$column_selector = ':input[name="style_options[assignments][' . $field . ']"]';

      $form['assignments'][$field] = [
        '#title' => $this->t('Assignment for @field', ['@field' => $field]),
        '#type' => 'select',
        '#options' => $field_names,
        '#default_value' => $assignment,
      ];
    }




    // Not working yet
    // foreach ($assignments as $field => $column) {

    //   //Won't persist
    // $form['assigned_media'][$field] = [
    //   '#title' => $this->t('Assign Media'),
    //   //'#description' => $this->t('The heading text to display.'),
    //   '#type' => 'select',
    //   '#options' => $field_names,
    //   '#default_value' => $column,
    // ];

    // }


//TODO: END OF DL EXPERIMENT 1/2



      //TEXT FORMAT
      //TOOLTIP
      //ANCHOR STUFF

      //Spacing top

      $form['spacing_top'] = [
        '#title' => $this->t('Spacing Top'),
        '#options' => SpacingEnum::allOptions(),
        '#type' => 'select',
        '#default_value' => !empty($this->options['spacing_top']),
      ];

      //Spacing bottom
      $form['spacing_bottom'] = [
        '#title' => $this->t('Spacing Bottom'),
        '#options' => SpacingEnum::allOptions(),
        '#type' => 'select',
        '#default_value' => !empty($this->options['spacing_bottom']),
      ];

      //Number of assignments to display
      $form['assignments_to_display'] = [
        '#type' => 'select',
        '#title' => $this->t('Columns to Display'),
        '#options' => ColumnEnum::allOptions(),
        '#default_value' => !empty($this->options['assignments_to_display']),
      ];

      //Default or Landscape view mode
      $form['view_mode'] = [
        '#type' => 'select',
        '#title' => $this->t('View Mode'),
        '#description' => $this->t('The view mode in which to render the block.'),
        '#options' => ViewModeEnum::allOptions(),
        '#default_value' =>  !empty($this->options['view_mode']),
      ];

      // Previously existing options
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




//TODO: START DL EXPERIMENT 2/2
// Copied from Table to support experiment above


  /**
   * Sanitizes the assignments.
   *
   * Normalize a list of assignments based upon the fields that are
   * available. This compares the fields stored in the style handler
   * to the list of fields actually in the view, removing fields that
   * have been removed and adding new fields in their own column.
   *
   * - Each field must be in a column.
   * - Each column must be based upon a field, and that field
   *   is somewhere in the column.
   * - Any fields not currently represented must be added.
   * - Columns must be re-ordered to match the fields.
   *
   * @param $assignments
   *   An array of all fields; the key is the id of the field and the
   *   value is the id of the column the field should be in.
   * @param $fields
   *   The fields to use for the assignments. If not provided, they will
   *   be requested from the current display. The running render should
   *   send the fields through, as they may be different than what the
   *   display has listed due to access control or other changes.
   *
   * @return array
   *   An array of all the sanitized assignments.
   */
// public function sanitizeColumns($assignments, $fields = NULL) {
//   $sanitized = [];
//   if ($fields === NULL) {
//     $fields = $this->displayHandler->getOption('fields');
//   }
//   // Preconfigure the sanitized array so that the order is retained.
//   foreach ($fields as $field => $info) {
//     // Set to itself so that if it isn't touched, it gets column
//     // status automatically.
//     $sanitized[$field] = $field;
//   }

//   foreach ($assignments as $field => $column) {
//     // first, make sure the field still exists.
//     if (!isset($sanitized[$field])) {
//       continue;
//     }

//     // If the field is the column, mark it so, or the column
//     // it's set to is a column, that's ok
//     if ($field == $column || $assignments[$column] == $column && !empty($sanitized[$column])) {
//       $sanitized[$field] = $column;
//     }
//     // Since we set the field to itself initially, ignoring
//     // the condition is ok; the field will get its column
//     // status back.
//   }

//   return $sanitized;
// }
//TODO: END EXPERIMENT 2/2

  }



