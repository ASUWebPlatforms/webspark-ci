<?php

// View Mode Types available
enum ViewModeEnum: String {
  case DEFAULT = 'Default';
  case VERTICAL = 'Vertical';

  public function key(): string {
    return match ($this) {
      self::DEFAULT => '0',
      self::VERTICAL => '1'
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
