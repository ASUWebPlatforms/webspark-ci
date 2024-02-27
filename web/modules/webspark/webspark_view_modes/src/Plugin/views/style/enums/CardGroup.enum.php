<?php

// Card Group Types available with cooresponding text to present in UI
enum CardGroupEnum: String {
  case RANKING = 'Add Card Group Ranking';
  case DEFAULT = 'Add Card Group Default';
  case DEGREE = 'Add Card Group Degree';
  case STORY = 'Add Card Group Story';
  case ICON = 'Add Card Group with Icon';


  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
