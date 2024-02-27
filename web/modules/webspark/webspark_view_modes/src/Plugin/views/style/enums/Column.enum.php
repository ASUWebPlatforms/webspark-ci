<?php

// Column Types available
enum ColumnEnum: String {
  case SELECT = '- Select a value -';
  case TWO = 'Two Columns';
  case THREE = 'Three Columns';
  case FOUR = 'Four Columns';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
