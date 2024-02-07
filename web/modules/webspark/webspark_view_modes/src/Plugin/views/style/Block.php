<?php

declare(strict_types=1);

require 'ColorType.php';
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
  public ColorType $block_text_color;
  public CardGroupType $block_card_group_type;
  public SpacingType $spacing_bottom;
  public SpacingType $spacing_top;
  public ViewModeType $view_mode_type;
  public ColumnType $column_type;

  //Each block will have an ordered array of cards
  public array $cards = array();


  //Assign default values in the constructor (eventually load existing props *OR* set defaults)
  //TODO: Add ternary operator to pass in property if one exists,
  //      or separate the initializer from the load existing block function.

  public function __construct() {

    $this->uid = uniqid(); //TODO: NEVER regenerate uniqid if one exists.
    $this->block_title = "";
    $this->block_heading = "";
    $this->block_body = "";
    $this->block_isDisplaying_title = false;
    $this->block_text_color = ColorType::Default;
    $this->block_card_group_type = CardGroupType::Default;
    $this->spacing_bottom = SpacingType::None;
    $this->spacing_top = SpacingType::None;
    $this->view_mode_type = ViewModeType::Default;
    $this->column_type = ColumnType::None;

  }
}



//TODO:  Remove this test when complete.
$test_block = new Block();
echo "Printing test to the Debug Console from Block.php";
var_dump($test_block);

