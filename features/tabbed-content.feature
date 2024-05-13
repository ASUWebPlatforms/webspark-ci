Feature: Tabbed Content
  In order to have confidence in my site's tabbed content
  As an anonymous user
  I want to verify that the tabbed content functions properly

  Background:
    Given I am at "/tabbed-content"
    Then the ".uds-tabbed-panels" element should exist

  # @api @javascript @anonymous
  # Scenario: Verify users can view tabbed content
  #   Given the "#nav-tab" element exists
  #   Then I should see that the "#nav-tab ~ .scroll-control-prev" element exists
  #   And the "#nav-tab ~ .scroll-control-next" element exists
  #   And the "#nav-tabContent" element exists

  # @api @javascript @anonymous
  # Scenario: Verify the first item is highlighted
  #   Given the "#nav-tab-1-tab" element exists
  #   Then only one element should have the selector "#nav-tab-1-tab"
  #   And the "#nav-tab-1-tab" element should have the class ".active"
  #   # NOTE: This definition easily provides false positives
  #   And I should see that "border-bottom" with "8px solid #8c1d40" is in ".uds-tabbed-panels .nav-tabs .nav-link.active" class

  # @api @javascript @anonymous
  # Scenario: Verify the items content is properly visible
  #   Given the "#nav-tab-1-tab" element exists
  #   And the "#nav-tab-1" element exists
  #   Then the "#nav-tab-1" element should have the classes ".active.show"

  # @api @javascript @anonymous
  # Scenario: Verify selecting a new item highlights the item and displays the content
  #   Given the "#nav-tab-2-tab" element exists
  #   Then the "#nav-tab-1-tab" element should exist
  #   Then I wait for 1 seconds
  #   And the "#nav-tab-1-tab" element should have the class ".active"
  #   And the "#nav-tab-2-tab" element should not have the class ".active"
  #   When I click the element "#nav-tab-2-tab"
  #   Then I wait for 3 seconds
  #   Then the "#nav-tab-2-tab" element should have the class ".active"
  #   And the "#nav-tab-1-tab" element should not have the class ".active"
  #   And the "#nav-tab-2" element should have the classes ".active.show"
  #   And the "#nav-tab-1" element should not have the classes ".active.show"

  @api @javascript @anonymous
  Scenario: Verify the scroll next is visible for long content
    Given the ".layout__region--first > div:nth-of-type(2) .uds-tabbed-panels" element exists
    Then Check the Tabbed Content scroll next button appears as needed for ".layout__region--first > div:nth-of-type(2) .uds-tabbed-panels"
    And The element ".layout__region--first > div:nth-of-type(2) .uds-tabbed-panels > .scroll-control-next" should be visible

  @api @javascript @anonymous
  Scenario: Verify the scroll next is not visible for short content
    Given the ".layout__region--first > div:nth-of-type(3) .uds-tabbed-panels" element exists
    Then Check the Tabbed Content scroll next button appears as needed for ".layout__region--first > div:nth-of-type(3) .uds-tabbed-panels"
    And The element ".layout__region--first > div:nth-of-type(3) .uds-tabbed-panels > .scroll-control-next" should not be visible

  # @api @javascript @anonymous
  # Scenario: Verify the chevrons scroll the tabbed content when clicked
