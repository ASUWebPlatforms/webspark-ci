<?php

namespace Drupal\schema_org_addon\Plugin\metatag\Tag;

use Drupal\schema_metatag\Plugin\metatag\Tag\SchemaNameBase;

/**
 * Provides a plugin for the 'schema_organization_parent_organization' schema.org output as a tag.
 *
 * - 'id' should be a globally unique id.
 * - 'name' should match the Schema.org element name.
 * - 'group' should match the id of the group that defines the Schema.org type.
 *
 * @MetatagTag(
 *   id = "schema_organization_parent_organization",
 *   label = @Translation("parentOrganization"),
 *   description = @Translation("Any existing parent organization (probably ASU)."),
 *   name = "parentOrganization",
 *   group = "schema_organization",
 *   weight = 1,
 *   type = "string",
 *   secure = FALSE,
 *   multiple = FALSE,
 *   property_type = "organization",
 *   tree_parent = {
 *     "Organization",
 *   },
 *   tree_depth = 1,
 * )
 */
class SchemaOrgAddonParentOrganization extends SchemaNameBase {

}
