<?php

namespace Drupal\schema_org_addon\Plugin\metatag\Tag;

use Drupal\schema_metatag\Plugin\metatag\Tag\SchemaNameBase;

/**
 * Provides a plugin for the 'schema_web_page_main_entity_of_page' schema.org output as a tag.
 *
 * - 'id' should be a globally unique id.
 * - 'name' should match the Schema.org element name.
 * - 'group' should match the id of the group that defines the Schema.org type.
 *
 * @MetatagTag(
 *   id = "schema_web_page_main_entity_of_page",
 *   label = @Translation("mainEntityOfPage"),
 *   description = @Translation("The URL of the main entity this page originates from (usually the home page of the site)."),
 *   name = "mainEntityOfPage",
 *   group = "schema_web_page",
 *   weight = 20,
 *   type = "string",
 *   secure = FALSE,
 *   multiple = FALSE,
 *   property_type = "url",
 *   tree_parent = {},
 *   tree_depth = -1,
 * )
 */
class SchemaOrgAddonMainEntityOfPage extends SchemaNameBase {

}
