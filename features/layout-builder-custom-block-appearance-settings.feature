Feature: Layout Builder Custom Blocks Appearance Settings
  In order to have confidence in my site's Layout Builder custom blocks
  As an administrative user
  I want to verify that each custom block has an appearance settings option.

  @api @javascript @test
  Scenario: Verify appearance settings in Accordion
    Given I am logged in as user "admin"
    When I am at '/node/2/layout'
    Then I scroll ".layout__region--first" into view
    Then I click "Add block"
    Then I click "Create content block"
    Then I should see that there are 30 "#drupal-off-canvas-wrapper ul li" elements that exist
    Then I should see the link "Accordion"
    Then I click "Accordion"
    Then I should see that the "details[data-drupal-selector^='edit-group-appearance-settings-']" element exists
    Then I click the element "details[data-drupal-selector^='edit-group-appearance-settings-']"
    Then I should see that the "summary[aria-controls^='edit-group-appearance-settings-'][aria-expanded='true']" element exists



