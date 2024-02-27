<?php

// Top or Bottom Spacing options in Pixels
enum SpacingEnum: String {
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
  case NegativeTwentyFour = '-24px';
  case NEGATIVETHIRTYTWO = '-32px';
  case NEGATIVEFORTY = '-40px';
  case NEGATIVEFORTYEIGHT = '-48px';
  case NEGATIVESEVENTYTWO = '-72px';
  case NEGATIVENINETYSIX = '-96px';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
