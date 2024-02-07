<?php

declare(strict_types=1);

class Card {

  public string $card_media;
  public string $card_heading;
  public string $card_body;
  public string $card_link;
  public string $card_text;
  public string $card_cta_link;
  public string $card_cta_text;
  public string $card_cta_second_link;
  public string $card_cta_second_text;
  public ColorType $card_cta_style;
  public TargetType $card_target_type;
  public bool $card_is_border_showing;

}

 // [card] (array of Card.php)
    //cta_style (ColorType.php only [gold, maroon, grey_2, grey_7])
    //target (TargetType.php)
    //vertical_alignment_text?
