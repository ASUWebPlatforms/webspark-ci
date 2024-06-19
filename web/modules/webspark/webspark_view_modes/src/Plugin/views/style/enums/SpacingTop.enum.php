<?php

// Top Spacing options in Pixels
enum SpacingTopEnum: String {
  case NONE = '- None -';
  case EIGHT = '8px';
  case SIXTEEN = '16px';
  case TWENTYFOUR = '24px';
  case THIRTYTWO = '32px';
  case FORTY = '40px';
  case FORTYEIGHT = '48px';
  case SEVENTYTWO = '72px';
  case NINETYSIX = '96px';
  case NEGATIVEEIGHT = '-8px';
  case NEGATIVESIXTEEN = '-16px';
  case NEGATIVETWENTYFOUR = '-24px';
  case NEGATIVETHIRTYTWO = '-32px';
  case NEGATIVEFORTY = '-40px';
  case NEGATIVEFORTYEIGHT = '-48px';
  case NEGATIVESEVENTYTWO = '-72px';
  case NEGATIVENINETYSIX = '-96px';


  public function key(): string {
    return match ($this) {
      self::NONE => '',
      self::EIGHT => 'spacing-top-8',
      self::SIXTEEN => 'spacing-top-16',
      self::TWENTYFOUR => 'spacing-top-24',
      self::THIRTYTWO => 'spacing-top-32',
      self::FORTY => 'spacing-top-40',
      self::FORTYEIGHT => 'spacing-top-48',
      self::SEVENTYTWO => 'spacing-top-72',
      self::NINETYSIX => 'spacing-top-96',
      self::NEGATIVEEIGHT => 'spacing-top-minus-8',
      self::NEGATIVESIXTEEN => 'spacing-top-minus-16',
      self::NEGATIVETWENTYFOUR => 'spacing-top-minus-24',
      self::NEGATIVETHIRTYTWO => 'spacing-top-minus-32',
      self::NEGATIVEFORTY => 'spacing-top-minus-40',
      self::NEGATIVEFORTYEIGHT => 'spacing-top-minus-48',
      self::NEGATIVESEVENTYTWO => 'spacing-top-minus-72',
      self::NEGATIVENINETYSIX => 'spacing-top-minus-96'
    };
  }

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
      $options[$case->key()] = $case->value;
    }
    return $options;
  }
}
