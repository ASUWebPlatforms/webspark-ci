<?php

//I like to define what Types to expect.. sue me.
declare(strict_types=1);

//Importing Enums to use for props that have limited options to choose from to prevent against typos
require 'enums/CardGroup.enum.php';
require 'enums/ViewMode.enum.php';
require 'enums/Column.enum.php';
require 'enums/Spacing.enum.php';
require 'enums/Color.enum.php';

class Block {

  //Each block should have a unique identifier, but not be able to explicitly set it
  protected string $uid;

  //Some basic block properties
  public string $block_title, $block_heading, $block_body; //some strings
  public bool $block_isDisplaying_title; //a bool

  //Certain properties have a limited number of options, which I would think lends itself to using Enums
  public ColorEnum $block_text_color;
  public ArrangementStyleEnum $block_card_group_type;
  public SpacingBottomEnum $spacing_bottom;
  public SpacingTopEnum $spacing_top;
  public ViewModeEnum $view_mode_type;
  public ColumnEnum $column_type;

  //Each block will have an ordered array of cards (Card.php)
  //TODO:  Discuss the option to associate cards by using a collection of Card UIDs instead of Card objects.
  public array $cards = array();

  //Construct a Block with key/value arguments, or else use default values defined in the Ternary operators below (??)
  public function __construct($args=[]) {

    $this->uid = $args['uid'] ?? uniqid(); //if there is no existing uid: generate one.
    $this->block_title = $args['block_title'] ?? '';
    $this->block_heading = $args['block_heading'] ?? '';
    $this->block_body = $args['block_body'] ?? '';
    $this->block_isDisplaying_title = $args['block_isDisplaying'] ?? '';
    $this->block_text_color = $args['block_text_color'] ?? '';
    $this->block_card_group_type = $args['block_card_group_type'] ?? '';
    $this->spacing_bottom = $args['spacing_bottom'] ?? '';
    $this->spacing_top = $args['spacing_top'] ?? '';
    $this->view_mode_type = $args['view_mode_type'] ?? '';
    $this->column_type = $args['column_type'] ?? '';
  }

  //This is a trick so they can take a look at the uid... look but no touch!
  public function uid() {
      return self::$uid;
  }
}
