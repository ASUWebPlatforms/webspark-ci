<?php

declare(strict_types=1);

//Importing Enums to use for properties that have limited options to choose from
require 'CardGroupType.php';
require 'ViewModeType.php';
require 'ColumnType.php';
require 'SpacingType.php';

class Block {

  //Each block should have a unique identifier
  private string $uid;

  //Some basic block properties
  public string $block_title, $block_heading, $block_body;
  public bool $block_isDisplaying_title;

  //Certain properties have a limited number of options, which lends itself to custom Enums
  public ColorEnum $block_text_color;
  public CardGroupEnum $block_card_group_type;
  public SpacingEnum $spacing_bottom;
  public SpacingEnum $spacing_top;
  public ViewModeEnum $view_mode_type;
  public ColumnEnum $column_type;

  //Each block will have an ordered array of cards (Card.php)
  //TODO:  Discuss the option to associate cards by using a collection of Card UIDs instead of Card objects.
  public array $cards = array();



  // When constructing a Block if arguments are not passed in, generate a new one with the default paramaters as defined in the constructor argument.
  public function __construct($uid = "", $block_title = "", $block_heading = "", $block_body = "", $block_isDisplaying_title = false, $block_text_color = ColorEnum::DEFAULT, $block_card_group_type = CardGroupEnum::DEFAULT, $spacing_bottom = SpacingEnum::NONE, $spacing_top = SpacingEnum::NONE, $view_mode_type = ViewModeEnum::DEFAULT, $column_type = ColumnEnum::SELECT) {

    $this->uid = $uid ? $uid : uniqid(); //if there is no existing uid: generate one.
    $this->block_title = $block_title;
    $this->block_heading = $block_heading;
    $this->block_body = $block_body;
    $this->block_isDisplaying_title = $block_isDisplaying_title;
    $this->block_text_color = $block_text_color;
    $this->block_card_group_type = $block_card_group_type;
    $this->spacing_bottom = $spacing_bottom;
    $this->spacing_top = $spacing_top;
    $this->view_mode_type = $view_mode_type;
    $this->column_type = $column_type;

  }
}
