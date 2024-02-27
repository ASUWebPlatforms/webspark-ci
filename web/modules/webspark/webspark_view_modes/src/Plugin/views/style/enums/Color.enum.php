<?php

// In PHP Enums you can use ->name to return the Enum key and ->value to return the stored property
// So, for example ColorType::Grey7->name === "Grey 7", ColorType::Grey7->value === "Grey7"

// Color Types available
enum ColorEnum: String {
  case DEFAULT = 'Default';
  case WHITE = 'White';
  case GREY7 = 'Grey 7';
  case GREY2 = 'Grey 2';
  case MAROON = 'Maroon';
  case GOLD = 'Gold';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
