<?php

// Column Types available


enum ColumnEnum: String {
  case SELECT = '- Select a value -';
  case TWO = 'Two Columns';
  case THREE = 'Three Columns';
  case FOUR = 'Four Columns';

  public function key(): string {
    return match ($this) {
      self::SELECT => 'select',
      self::TWO => 'two-columns',
      self::THREE => 'three-columns',
      self::FOUR => 'four-columns',
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
