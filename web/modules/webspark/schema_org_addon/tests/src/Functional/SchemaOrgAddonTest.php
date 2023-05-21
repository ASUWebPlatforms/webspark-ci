<?php

namespace Drupal\Tests\schema_org_addon\Functional;

use Drupal\Tests\schema_metatag\Functional\SchemaMetatagTagsTestBase;

/**
 * Tests that each of the Schema Metatag Articles tags work correctly.
 *
 * @group schema_metatag
 * @group schema_organization
 */
class SchemaOrgAddonTest extends SchemaMetatagTagsTestBase {

  /**
   * {@inheritdoc}
   */
  protected static $modules = ['schema_org_addon'];

  /**
   * {@inheritdoc}
   */
  public $moduleName = 'schema_org_addon';

  /**
   * {@inheritdoc}
   */
  public $groupName = 'schema_org_addon';

}
