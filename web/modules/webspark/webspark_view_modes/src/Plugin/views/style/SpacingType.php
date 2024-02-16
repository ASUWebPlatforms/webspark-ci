<?php

// Top or Bottom Spacing options in Pixels
enum SpacingType: String {
  case None = '- None -';
  case Eight = '8px';
  case Sixteen = '16px';
  case TwentyFour = '24px';
  case ThirtyTwo = '32px';
  case Forty = '40px';
  case FortyEight = '48px';
  case SeventyTwo = '72px';
  case NinetySix = '96px';
  case NegativeEight = '-8px';
  case NegativeSixteen = '-16px';
  case NegativeTwentyFour = '-24px';
  case NegativeThirtyTwo = '-32px';
  case NegativeForty = '-40px';
  case NegativeFortyEight = '-48px';
  case NegativeSeventyTwo = '-72px';
  case NegativeNinetySix = '-96px';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
