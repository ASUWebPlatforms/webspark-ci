<?php

// Bottom Spacing options in Pixels
enum SpacingBottomEnum: String {
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
      self::EIGHT => 'spacing-bottom-8',
      self::SIXTEEN => 'spacing-bottom-16',
      self::TWENTYFOUR => 'spacing-bottom-24',
      self::THIRTYTWO => 'spacing-bottom-32',
      self::FORTY => 'spacing-bottom-40',
      self::FORTYEIGHT => 'spacing-bottom-48',
      self::SEVENTYTWO => 'spacing-bottom-72',
      self::NINETYSIX => 'spacing-bottom-96',
      self::NEGATIVEEIGHT => 'spacing-bottom-minus-8',
      self::NEGATIVESIXTEEN => 'spacing-bottom-minus-16',
      self::NEGATIVETWENTYFOUR => 'spacing-bottom-minus-24',
      self::NEGATIVETHIRTYTWO => 'spacing-bottom-minus-32',
      self::NEGATIVEFORTY => 'spacing-bottom-minus-40',
      self::NEGATIVEFORTYEIGHT => 'spacing-bottom-minus-48',
      self::NEGATIVESEVENTYTWO => 'spacing-bottom-minus-72',
      self::NEGATIVENINETYSIX => 'spacing-bottom-minus-96'
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
