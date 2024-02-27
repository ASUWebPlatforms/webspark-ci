<?php

// Target Types available
enum TargetWindowEnum: String {
  case NONE = '- None -';
  case CURRENT = 'Current window (_self)';
  case NEW = 'New window (_blank)';
  case PARENT = 'Parent window (_parent)';
  case TOPMOST = 'Topmost window (_top)';

  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
