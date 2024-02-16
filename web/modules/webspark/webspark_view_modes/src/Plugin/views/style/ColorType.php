<?php

// In PHP Enums you can use ->name to return the Enum key and ->value to return the stored property
// So, for example ColorType::Grey7->name === "Grey 7", ColorType::Grey7->value === "Grey7"

// Color Types available
enum ColorType: String {
  case Default = 'Default';
  case White = 'White';
  case Grey7 = 'Grey 7';
  case Grey2 = 'Grey 2';
  case Maroon = 'Maroon';
}
