Feature: Degree Listing page verification
  In order to have confidence in the Degree Listing page
  As an anonymous user
  I want to verify that various functionality works appropriately

  Background:
    Given I am at "/degree-listing-page"

#  @api @javascript
#  Scenario: Verify search functionality
#    Then I should see that the "#search-field" element exists
#    Then I wait for 7 seconds
#    Then I scroll "#search-field" into view
#    Then I wait for 1 second
#    Given for "search-field" I enter "Applied Science"
#    Then I wait for 1 second
#    Then I press the "Search now" button
#    Then I wait for 1 second
#    Then I scroll "#degree-list-programs" into view
#    Then I wait for 1 second
#    Then I should see that the "a[href='/bachelors-degrees/majorinfo/ASBASBAS/undergrad/false/37']" element exists
#    Then I should see that the "button[aria-label='Page 2 of 2']" element exists

#  @api @javascript
#  Scenario: Verify campus filter functionality
#    Then I should see that the "#locations" element exists
#    Then I wait for 7 seconds
#    Then I scroll "#locations" into view
#    Then I wait for 1 second
#    Then I select "Downtown Phoenix campus" from "locations"
#    Then I wait for 1 second
#    Then I press the "Apply filters" button
#    Then I wait for 1 second
#    Then I should see that the "span[aria-label='Remove filter Downtown Phoenix campus']" element exists
#    Then I scroll "#degree-list-programs" into view
#    Then I wait for 1 second
#    Then I should see that the "a[href='https://publicservice.asu.edu/']" element exists

  @api @javascript
  Scenario: Verify ASU location/Locals functionality
    Then I should see that the "#asuLocals" element exists
    Then I wait for 7 seconds
    Then I store the last pagination page number
    Then I scroll "#asuLocals" into view
    Then I wait for 1 second
    Then I select "ASU at Cochise" from "asuLocals"
    Then I wait for 1 second
    Then I press the "Apply filters" button
    Then I wait for 1 second
    Then I should see that the "span[aria-label='Remove filter ASU at Cochise']" element exists
    Then I scroll "#degree-list-programs" into view
    Then I wait for 1 second
    Then Check the current pagination is less than the previous pagination

# @api @javascript
# Scenario: Verify accelerated/concurrent functionality
#   Then I should see that the "#acceleratedConcurrent" element exists
#   Then I wait for 7 seconds
#   Then I scroll "#acceleratedConcurrent" into view
#   Then I wait for 1 second
#   Then I select "Accelerated" from "acceleratedConcurrent"
#   Then I wait for 1 second
#   Then I press the "Apply filters" button
#   Then I wait for 1 second
#   Then I should see that the "span[aria-label='Remove filter Accelerated']" element exists
#   Then I scroll "#degree-list-programs" into view
#   Then I wait for 1 second
#   Then I should see that the "button[aria-label='Page 51 of 51']" element exists

# @api @javascript
# Scenario: Verify clear filters functionality
#   Then I should see that the "#acceleratedConcurrent" element exists
#   Then I wait for 7 seconds
#   Then I scroll "#acceleratedConcurrent" into view
#   Then I wait for 1 second
#   Then I select "Accelerated" from "acceleratedConcurrent"
#   Then I wait for 1 second
#   Then I press the "Apply filters" button
#   Then I wait for 1 second
#   Then I should see that the "span[aria-label='Remove filter Accelerated']" element exists
#   Then I scroll "#degree-list-programs" into view
#   Then I wait for 1 second
#   Then I should see that the "button[aria-label='Page 51 of 51']" element exists
#   Then I scroll ".filter-action-buttons" into view
#   Then I wait for 1 second
#   Then I press the "Clear filters" button
#   Then I should see that the "span[aria-label='Remove filter Accelerated']" element does not exist
#   Then I should see that the "button[aria-label='Page 83 of 83']" element exists

#  @api @javascript
#  Scenario: Verify collapsible functionality
#    Then I wait for 7 seconds
#    Then I scroll "#degree-list-programs" into view
#    Then I wait for 1 second
#    Then I should see that the "[aria-controls='row-info-0']" element exists
#    Then I click the element "[aria-controls='row-info-0']"
#    Then I should see the text "Program Description:"
#    And I should see the text "Additional Program Fee:"
#    And I should see the text "[...more]"
#    Then I click the element "[data-testid='more-text']"
#    And I should see the text "[...less]"
#    And I should not see the text "[...more]"
#    Then I click the element "[data-testid='less-text']"
#    And I should not see the text "[...less]"
#    And I should see the text "[...more]"
#    Then I click the element "[aria-controls='row-info-0']"
#    And I should not see the text "Program Description:"
#    And I should not see the text "Additional Program Fee:"
