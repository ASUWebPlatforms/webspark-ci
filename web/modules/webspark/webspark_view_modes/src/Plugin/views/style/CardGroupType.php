<?php

// Card Group Types available with cooresponding text to present in UI
enum CardGroupType: String {
  case Ranking = 'Add Card Group Ranking';
  case Default = 'Add Card Group Default';
  case Degree = 'Add Card Group Degree';
  case Story = 'Add Card Group Story';
  case Icon = 'Add Card Group with Icon';


  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
