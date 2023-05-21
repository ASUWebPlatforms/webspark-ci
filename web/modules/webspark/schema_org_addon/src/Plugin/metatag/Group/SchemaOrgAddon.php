<?php

namespace Drupal\schema_org_addon\Plugin\metatag\Group;

use Drupal\schema_metatag\Plugin\metatag\Group\SchemaGroupBase;

//
// CURRENTLY UNUSED. Use the group ID: schema_organization instead!
//
/**
 * Provides a plugin for the 'Schema Org Addon' meta tag group.
 *
 * @MetatagGroup(
 *   id = "schema_org_addon",
 *   label = @Translation("Schema.org: Organization (more)"),
 *   description = @Translation("Additional fields for the <a href="":url"">Organization</a> schema type.", arguments = {
 *     ":url" = "https://schema.org/Organization",
 *   }),
 *   weight = 100,
 * )
 */
class SchemaOrgAddon extends SchemaGroupBase {
  // Nothing here yet. Just a placeholder class for a plugin.
}
