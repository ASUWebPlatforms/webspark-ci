<?php

declare(strict_types=1);

require 'enums/Color.enum.php';
require 'enums/TargetWindow.enum.php';

class Card {
  public string $uid;

  public string $card_media;
  public string $card_heading;
  public string $card_body;
  public string $card_link;
  public string $card_text;
  public string $card_cta_link;
  public string $card_cta_text;
  public string $card_cta_second_link;
  public string $card_cta_second_text;
  public bool $card_is_border_showing;

  public ColorEnum $card_cta_style;
  public TargetWindowEnum $card_target_type;
}
