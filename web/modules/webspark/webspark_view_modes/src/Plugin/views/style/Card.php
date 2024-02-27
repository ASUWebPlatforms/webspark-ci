<?php

declare(strict_types=1);

require 'enums/Color.enum.php';
require 'enums/TargetWindow.enum.php';
require 'enums/CardGroup.enum.php';

class Card {
  //Each block should have a unique identifier, but not be able to explicitly set it
  protected string $uid;

  public string $card_media;
  public string $card_heading;
  public string $card_body;

  //might want to refactor a CTA into it's own class
  public string $card_cta1_link;
  public string $card_cta1_text;
  public string $card_cta1_target;
  public string $card_cta1_style;
  public string $card_cta2_link;
  public string $card_cta2_text;
  public string $card_cta2_target;
  public string $card_cta2_style;

  public string $card_link;
  public string $card_text;
  public string $card_ranking_image_size; //only for ranking arrangement
  public string $card_icon; //only for icon arrangement
  public bool $card_is_border_showing; //only for icon arrangement

  public ColorEnum $card_cta_style;
  public TargetWindowEnum $card_target_type;
  public CardGroupEnum $card_group_type;

  //Construct a Block with key/value arguments, or else use default values defined in the Ternary operators below (??)
  public function __construct($args=[]) {

    $this->uid = $args['uid'] ?? uniqid(); //if there is no existing uid: generate one.

    $this->card_media = $args['card_media'] ?? '';
    $this->card_heading = $args['card_heading'] ?? '';
    $this->card_body = $args['card_body'] ?? '';

    $this->card_cta1_link = $args['card_cta1_link'] ?? '';
    $this->card_cta1_text = $args['card_cta1_text'] ?? '';
    $this->card_cta1_target = $args['card_cta1_target'] ?? '';
    $this->card_cta1_style = $args['card_cta1_style'] ?? '';
    $this->card_cta2_link = $args['card_cta2_link'] ?? '';
    $this->card_cta2_text = $args['card_cta2_text'] ?? '';
    $this->card_cta2_target = $args['card_cta2_target'] ?? '';
    $this->card_cta2_style = $args['card_cta2_style'] ?? '';

    $this->card_link = $args['card_link'] ?? '';
    $this->card_text = $args['card_text'] ?? '';
    $this->card_ranking_image_size = $args['card_ranking_image_size'] ?? ''; //only for ranking arrangement
    $this->card_icon = $args['card_icon'] ?? ''; //only for icon arrangement
    $this->card_is_border_showing = $args['card_is_border_showing'] ?? false; //only for icon arrangement

    $this->card_cta_style = $args['card_cta_style'] ?? ColorEnum::GOLD;
    $this->card_target_type = $args['card_target_type'] ?? TargetWindowEnum::NONE;
    $this->card_group_type = $args['card_group_type'] ?? CardGroupEnum::DEFAULT;

  }

  //This is a trick so they can take a look at the uid... look but no touch!
  public function uid() {
      return self::$uid;
  }
}
