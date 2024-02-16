<?php

// Target Types available
enum TargetType: String {
  case None = '- None -';
  case Current = 'Current window (_self)';
  case New = 'New window (_blank)';
  case Parent = 'Parent window (_parent)';
  case Topmost = 'Topmost window (_top)';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
