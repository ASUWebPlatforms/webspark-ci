Feature: FontAwesome icons
  In order to have confidence in my site's FontAwesome implementation
  As an anonymous or admin user
  I want to verify successful rendering and widget functionality

  @api @javascript
  Scenario: Verify FontAwesome icons render as SVGs
    Given I am an anonymous user
    Given I am on the homepage
    Then I should see that the "#social-media a > svg.fa-square-facebook" element exists

  @api @javascript
  Scenario: Verify FontAwesome and ASU icons appear in picker widget
    Given I am logged in as a user with the "administrator" role
    When I go to "/node/12/layout"
    Then I scroll "[data-layout-block-uuid='00ed7dbd-e5f7-44f6-b135-f860cfcdcebe']" into view
    Then I wait for 1 second
    Then I scroll vertically by -130 pixels
    Then I wait for 1 second
    Then I hover over the element "[data-layout-content-preview-placeholder-label='\"3 Columns\" block']"
    Then I press "Open 3 Columns configuration options"
    Then I click the element "[data-layout-content-preview-placeholder-label='\"3 Columns\" block'] ul > li > a"
    Then I wait for 1 second
    Then I should see that the ".field--type-fontawesome-icon.field--name-field-icon.field--widget-fontawesome-iconpicker-widget .icons-selector svg.fa-500px" element exists
    Then I click the element ".field--type-fontawesome-icon.field--name-field-icon.field--widget-fontawesome-iconpicker-widget .icons-selector .fip-icon-down-dir"
    Then I should see that the ".field--type-fontawesome-icon.field--name-field-icon.field--widget-fontawesome-iconpicker-widget .icons-selector .selector-popup" element exists
    Then I enter "pitchfork" for "Search Icons"
    Then I wait for 1 second
    Then I should see that the ".fip-icons-container > span:nth-of-type(2)[data-fip-value='fa-solid fa-E_hand_pitchfork_solid']" element exists

  @api @javascript
  Scenario: Verify FontAwesome icons in WYSIWYG
    Given I am logged in as a user with the "administrator" role
    When I go to "/text-content-lists"
    Then I should see that the "svg.fa-rocket path" element exists
    Then I should see that the "svg.fa-bus path" element exists
    Then I should see that the "svg.fa-car path" element exists
    Then I should see that the "svg.fa-bicycle path" element exists
    Given I go to "/node/60/edit"
    Then I should see that the "svg.fa-rocket path" element exists
    Then I should see that the "svg.fa-bus path" element exists
    Then I should see that the "svg.fa-car path" element exists
    Then I should see that the "svg.fa-bicycle path" element exists
    Then I should see that the "[data-cke-tooltip-text='Insert Fontawesome Icon']" element exists
    Given I click the element "button[data-cke-tooltip-text='Insert Fontawesome Icon']"
    Then I should see that the "#drupal-modal .fontawesome-icon-dialog" element exists
    Given I enter "square-x-twitter" for "icon_name"
    And I click the element "#drupal-modal + .ui-dialog-buttonpane button.form-submit"
    Then I should see that the "ul.uds-list li svg.fa-square-x-twitter path" element exists
