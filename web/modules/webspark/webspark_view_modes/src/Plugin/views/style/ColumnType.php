<?php

// Column Types available
enum ColumnType: String {
  case Select = '- Select a value -';
  case Two = 'Two Columns';
  case Three = 'Three Columns';
  case Four = 'Four Columns';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
