<?php

namespace Drupal\asu_react_core\Utils;

use Drupal\Core\Url;
use Drupal\image\Entity\ImageStyle;
use Drupal\crop\Entity\Crop;

/**
 * Class ReactComponentHelperFunctionss.
 */
class ReactComponentHelperFunctions {

  public function getImagesItems($block, $rand_id) {
    $image_carousel = new \stdClass();
    $image_carousel->items = [];

    if ($block->field_type) {
      $image_carousel->type = $block->field_type->value;
    }

    foreach ($block->field_carousel_card as $paragraph_ref) {
      $image_carousel->items[] = $paragraph_ref->entity->uuid();
    }

    $settings = [];
    $settings['components'][$block->bundle()][$rand_id] = $image_carousel;

    return $settings;
  }

  public function getCardContent($paragraph) {
    if (empty($paragraph)) {
      return;
    }
    $id = $paragraph->uuid();
    $card = new \stdClass();
    $card->id = $id;

    switch ($paragraph->getType()) {
      case 'card':
      case 'card_with_icon':
        $card->cardType = 'default';
        break;
      case 'card_degree':
        $card->cardType = 'degree';
        break;
      case 'card_event':
        $card->cardType = 'event';
        break;
      case 'card_story':
        $card->cardType = 'story';
        break;
    }

    if ($paragraph->field_media && $paragraph->field_media->target_id && $paragraph->field_media->entity->field_media_image->target_id) {
      $uri = $paragraph->field_media->entity->field_media_image->entity->getFileUri();

      $image_source = NULL;
      if (Crop::cropExists($uri, 'images_block')) {
        $style = ImageStyle::load('block_image_med');
        if ($style) {
          $image_source = $style->buildUrl($uri);
        }
      }

      if (!$image_source) {
        $style = ImageStyle::load('image');
        $image_source = $style->buildUrl($uri);
      }

      $card->imageSource = $image_source;
      $card->imageAltText = $paragraph->field_media->entity->field_media_image->alt;
    }
    if ($paragraph->field_heading->value) {
      $card->title = $paragraph->field_heading->value;
    }
    if ($paragraph->field_body->value) {
      $card->content = $paragraph->field_body->value;
    }
    if ($paragraph->field_cta && $paragraph->field_cta->entity) {
      $cta = new \stdClass();
      $cta->label = $paragraph->field_cta->entity->field_cta_link->title;
      $link = Url::fromUri($paragraph->field_cta->entity->field_cta_link->uri);
      $cta->href = $link->toString();
      $options = $paragraph->field_cta->entity->field_cta_link->options;
      $color = $this->getButtonColor($options,'maroon' );
      if (isset($options['attributes']['target'])) {
        $cta->target = $options['attributes']['target'];
      }
      $cta->color = $color;
      $cta->size = 'default';
      $card->buttons[] = $cta;
    }
    if ($paragraph->field_cta_secondary && $paragraph->field_cta_secondary->entity) {
      $cta = new \stdClass();
      $cta->label = $paragraph->field_cta_secondary->entity->field_cta_link->title;
      $link = Url::fromUri($paragraph->field_cta_secondary->entity->field_cta_link->uri);
      $cta->href = $link->toString();
      $options = $paragraph->field_cta_secondary->entity->field_cta_link->options;
      $color = $this->getButtonColor($options,'gold' );
      if (isset($options['attributes']['target'])) {
        $cta->target = $options['attributes']['target'];
      }
      $cta->color = $color;
      $cta->size = 'small';
      $card->buttons[] = $cta;
    }
    if ($paragraph->field_link && $paragraph->field_link->title && $paragraph->field_link->uri) {
      $card->linkLabel = $paragraph->field_link->title;
      $link = Url::fromUri($paragraph->field_link->uri);
      $card->linkUrl = $link->toString();
    }
    //@TODO We are not going to send this information to the react component,
    // since the functionality in webspark for the tags has not yet been defined
    /*if (!empty($paragraph->field_tags)) {
      foreach ($paragraph->field_tags as $term) {
        $tag = new \stdClass();
        $tag->label = $term->entity->name->value;
        $link = Url::fromRoute('entity.taxonomy_term.canonical', ['taxonomy_term' => $term->entity->tid->value]);
        $tag->href = $link->toString();
        $card->tags[] = $tag;
      }
    }*/

    if (isset($paragraph->field_icon)) {
      $icon_name = $paragraph->field_icon->icon_name;
      $icon_style = $paragraph->field_icon->style;
      $icon_settings = unserialize($paragraph->field_icon->settings);
      $card->icon = [$icon_style, $icon_name, $icon_settings];
    }

    $card->clickable = false;
    if ($paragraph->field_clickable->value && isset($paragraph->field_card_link->uri)){
      $card->clickable = true;
      $link = Url::fromUri($paragraph->field_card_link->uri);
      $card->clickHref = $link->toString();
    }

    $card->showBorders = false;
    if ($paragraph->field_show_borders && $paragraph->field_show_borders->value) {
      $card->showBorders = true;
    }

    $settings = [];
    $settings['components']['card'][$id] = $card;

    return $settings;
  }

  function getButtonColor($options, $default) {
    $color = $default;
    if (isset($options['attributes']['class'])) {
      //class structure from custom widget 'btn-size btn-color btn'
      $class = explode( ' ', $options['attributes']['class']);
      $color = substr($class[1], 4);
    }
    return $color;
  }

}
