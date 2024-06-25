<?php

// Card Group Types available with cooresponding text to present in UI
enum ArrangementStyleEnum: String {
  case DEFAULT = 'Card Group Default style';
  case RANKING = 'Card Group Ranking style';
  case DEGREE = 'Card Group Degree style';
  case STORY = 'Card Group Story style';
  case ICON = 'Card Group with Icon style';


  public function key(): string {
    return match ($this) {
      self::DEFAULT => 'card_group_story',
      self::RANKING => 'card_group_ranking',
      self::DEGREE => 'card_group_degree',
      self::STORY => 'card_group_story',
      self::ICON => 'card_group_with_icon'
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
