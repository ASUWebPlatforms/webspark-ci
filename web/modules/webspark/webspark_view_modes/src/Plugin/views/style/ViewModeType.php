<?php

// View Mode Types available
enum ViewModeType: String {
  case Default = 'Default';
  case Vertical = 'Vertical';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
