<?php

// Color Types available
enum ColorType: String {
  case Default = 'Default';
  case White = 'White';
  case Grey_7 = 'Grey 7';
  case Grey_2 = 'Grey 2';
  case Maroon = 'Maroon';


  //I guess PHP doesn't have a built in safe way to return the value of an enum?
  //Well, that kind of defeats the whole reason I was adding them
  //I'll press on but I might trash this whole idea later.
  //https://stackoverflow.com/questions/71002391/get-enum-value-by-name-stored-in-a-string-in-php
  public static function fromName(string $name): string {
      foreach (self::cases() as $status) {
          if( $name === $status->name ){
              return $status->value;
          }
      }
      throw new \ValueError("$name is not a valid enum option here" . self::class );
  }

}
