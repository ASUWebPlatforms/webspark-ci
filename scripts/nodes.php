<?php

use Drupal\node\Entity\Node;
use Drupal\layout_builder\Section;

$nodes = \Drupal::entityTypeManager()
  ->getStorage('node')
  ->loadByProperties(['type' => 'page']);

foreach ($nodes as $node) {
  if ($node->hasField('layout_builder__layout') && !$node->get('layout_builder__layout')->isEmpty()) {
    $sections = $node->get('layout_builder__layout')->getValue();
    foreach ($sections as $section_item) {
      $section = $section_item['section'];
      foreach ($section->getComponents() as $component) {
        $component_config = $component->get('configuration');
        if (isset($component_config['id']) && $component_config['id'] == 'inline_block:web_directory') {
          // Print the Node ID.
          print "Node with ID {$node->id()} uses the 'inline_block:web_directory' block.\n";
        }
      }
    }
  }
}

