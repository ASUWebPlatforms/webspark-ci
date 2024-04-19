Feature: Tabbed Content
  In order to have confidence in my site's tabbed content
  As an anonymous user
  I want to verify that the tabbed content functions properly

  Background:
    Given I am an anonymous user
    When I am at "/tabbed-content"
    Then the ".uds-tabbed-panels" element should exist

  @api @javascript
  Scenario: Verify users can view tabbed content
    Given the "#nav-tab" element exists
    Then I should see that the "#nav-tab ~ .scroll-control-prev" element exists
    And the "#nav-tab ~ .scroll-control-next" element exists
    And the "#nav-tabContent" element exists

  @api @javascript
  Scenario: Verify the first item is highlighted
    Given the "#nav-tab-1-tab" element exists
    Then only one element should have the selector "#nav-tab-1-tab"
    And the "#nav-tab-1-tab" element should have the class ".active"
    # NOTE: This definition easily provides false positives
    And I should see that "border-bottom" with "8px solid #8c1d40" is in ".uds-tabbed-panels .nav-tabs .nav-link.active" class

  @api @javascript
  Scenario: Verify the items content is properly visible
    Given the "#nav-tab-1-tab" element exists
    And the "#nav-tab-1" element exists
    Then the "#nav-tab-1" element should have the classes ".active.show"

  @api @javascript
  Scenario: Verify selecting a new item highlights the item and displays the content
    Given the "#nav-tab-2-tab" element exists
    Then the "#nav-tab-1-tab" element should exist
    And the "#nav-tab-1-tab" element should have the class ".active"
    And the "#nav-tab-2-tab" element should not have the class ".active"
    When I click the element "#nav-tab-2-tab"
    Then the "#nav-tab-2-tab" element should have the class ".active"
    And the "#nav-tab-1-tab" element should not have the class ".active"
    And the "#nav-tab-2" element should have the classes ".active.show"
    And the "#nav-tab-1" element should not have the classes ".active.show"

  # @api @javascript
  # Scenario: Verify the chevrons are visible as needed

  # @api @javascript
  # Scenario: Verify the chevrons scroll the tabbed content when clicked
