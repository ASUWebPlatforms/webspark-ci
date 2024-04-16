Feature: Layout Builder Section Options Check
  In order to have confidence in my site's Layout Builder sections
  As an administrative user
  I want to verify that each layout option is included.

  @api @javascript
  Scenario: Verify Layout Builder Section Options
    Given I am logged in as user "admin"
    When I am at '/node/2/layout'
    Then I scroll ".layout__region--first" into view
    Then I click the element "[data-layout-builder-highlight-id='section-0'] > a"
    # Check for core layouts that should NOT be included
    Then I should see that the ".layout-icon--layout-onecol" element does not exist
    Then I should see that the ".layout-icon--layout-twocol-section" element does not exist
    Then I should see that the ".layout-icon--layout-threecol-section" element does not exist
    Then I should see that the ".layout-icon--layout-fourcol-section" element does not exist
    # One Column Full Width
      # Layout exists
      Then I should see that the ".layout-icon--onecol-full-width-section" element exists
      # Click item
      Then I click the element "[href='/layout_builder/configure/section/overrides/node.2/0/onecol_full_width_section']"
      # Administrative Label
      Then I should see that the "[data-drupal-selector='edit-layout-settings-label']" element exists
      # Style
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-style']" element exists
      # Background position
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-direction']" element exists
      # Background fill percent
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-length']" element exists
      # Close item
      Then I click the element ".ui-dialog-titlebar-close"
      # Open section dialog again
      Then I click the element "[data-layout-builder-highlight-id='section-0'] > a"
    # One Column Fixed Width
      # Layout exists
      Then I should see that the ".layout-icon--onecol-fixed-width-section" element exists
      # Click item
      Then I click the element "[href='/layout_builder/configure/section/overrides/node.2/0/onecol_fixed_width_section']"
      # Administrative Label
      Then I should see that the "[data-drupal-selector='edit-layout-settings-label']" element exists
      # Style
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-style']" element exists
      # Background position
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-direction']" element exists
      # Background fill percent
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-length']" element exists
      # Close item
      Then I click the element ".ui-dialog-titlebar-close"
      # Open section dialog again
      Then I click the element "[data-layout-builder-highlight-id='section-0'] > a"
    # Two Column Bootstrap
      # Layout exists
      Then I should see that the ".layout-icon--layout-twocol-bootstrap-section" element exists
      # Click item
      Then I click the element "[href='/layout_builder/configure/section/overrides/node.2/0/layout_twocol_bootstrap_section']"
      # Administrative Label
      Then I should see that the "[data-drupal-selector='edit-layout-settings-label']" element exists
      # Column width
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-widths']" element exists
      # Style
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-style']" element exists
      # Background position
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-direction']" element exists
      # Background fill percent
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-length']" element exists
      # Flex direction
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-flex']" element exists
      # Close item
      Then I click the element ".ui-dialog-titlebar-close"
      # Open section dialog again
      Then I click the element "[data-layout-builder-highlight-id='section-0'] > a"
    # Three Column Fixed Width
      # Layout exists
      Then I should see that the ".layout-icon--threecol-fixed-width-section" element exists
      # Click item
      Then I click the element "[href='/layout_builder/configure/section/overrides/node.2/0/threecol_fixed_width_section']"
      # Administrative Label
      Then I should see that the "[data-drupal-selector='edit-layout-settings-label']" element exists
      # Column width
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-widths']" element exists
      # Style
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-style']" element exists
      # Background position
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-direction']" element exists
      # Background fill percent
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-length']" element exists
      # Close item
      Then I click the element ".ui-dialog-titlebar-close"
      # Open section dialog again
      Then I click the element "[data-layout-builder-highlight-id='section-0'] > a"
    # Four Column Fixed Width
      # Layout exists
      Then I should see that the ".layout-icon--fourcol-fixed-width-section" element exists
      # Click item
      Then I click the element "[href='/layout_builder/configure/section/overrides/node.2/0/fourcol_fixed_width_section']"
      # Administrative Label
      Then I should see that the "[data-drupal-selector='edit-layout-settings-label']" element exists
      # Style
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-style']" element exists
      # Background position
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-direction']" element exists
      # Background fill percent
      Then I should see that the "[data-drupal-selector='edit-layout-settings-classes-length']" element exists
      # Close item
      Then I click the element ".ui-dialog-titlebar-close"
