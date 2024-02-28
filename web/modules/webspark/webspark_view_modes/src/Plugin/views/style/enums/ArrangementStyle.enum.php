<?php

// Card Group Types available with cooresponding text to present in UI
enum ArrangementStyleEnum: String {
  case DEFAULT = 'Card Group Default style';
  case RANKING = 'Card Group Ranking style';
  case DEGREE = 'Card Group Degree style';
  case STORY = 'Card Group Story style';
  case ICON = 'Card Group with Icon style';


  public static function allOptions(): array {
    $options = [];
    foreach (self::cases() as $case) {
        $options[$case->name] = $case->value;
    }
    return $options;
  }
}
