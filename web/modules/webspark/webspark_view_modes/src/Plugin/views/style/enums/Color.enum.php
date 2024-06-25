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

// NOTE: It is possible or likely that we may need to have multiple different keys returned based on the element style
// because it seems like there is not consistancy between the various block properties
// in regards to color keys.
  public function key(): string {
    return match ($this) {
      self::DEFAULT => '',
      self::WHITE => 'text-white',
      self::GREY7 => 'bg-dark',
      self::GREY2 => 'bg-gray-2',
      self::MAROON => 'accent-maroon',
      self::GOLD => 'text-gold',
      };
  }

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
      $options[$case->key()] = $case->value;
    }
    return $options;
  }


  //TODO: Replace with the exact key needed for this specific content.
  public static function cardArrangementOptions(): array {
    $options = [];
    $options['text-gold'] = self::GOLD->value;
    $options['accent-maroon'] = self::MAROON->value;
    $options['bg-gray-2'] = self::GREY2->value;
    $options['bg_dark'] = self::GREY7->value;
    return $options;
  }

  //TODO: Replace with the exact key needed for this specific content.
  public static function mainContentTextOptions(): array {
    $options = [];
    $options['bg-dark'] = self::GREY7->value;
    $options['text-white'] = self::WHITE->value;
    return $options;
  }
}


// -
// value: default
// label: Gold
// -
// value: accordion-item-maroon
// label: Maroon
// value: accordion-item-gray
// label: 'Gray 2'
// value: accordion-item-dark
// label: 'Gray 7'
// value: bg-white
// label: White
// value: bg-gray-1
// label: 'Gray 1'
// value: bg-gray-2
// label: 'Gray 2'
// value: bg-dark
// label: 'Gray 7'
// value: text-gold
// label: 'Gold Links'
// value: text-white
// label: 'White Links'

// value: "''"
// label: 'Gray 7'
// -
// value: accent-maroon
// label: Maroon
// -
// value: accent-gold
// label: Gold
