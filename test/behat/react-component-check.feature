Feature: React Component Check
  In order to have confidence in my site's React components
  As an anonymous user
  I want to verify that each component type successfully initializes.

  Background:
    Given I am an anonymous user

  @api @javascript
  Scenario: Verify Degree Listing Page (app-degree-pages)
    When I am at '/degree-listing-page'
    Then I should see the heading "Browse degrees"
    And I should see the button "Search now"
    And I should see the button "Apply filters"
    Then I wait for 5 seconds
    Then I should see that the "[data-testid='list-view']" element exists

  @api @javascript
  Scenario: Verify Degree Listing Page (app-degree-pages)
    When I am at '/bachelors-degrees/majorinfo/ASACOCBS/undergrad/false/37'
    Then I should see the heading "Applied Computing (Cybersecurity)"
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify Degree Listing Page RFI component (app-rfi)
    When I am at '/bachelors-degrees/majorinfo/ASACOCBS/undergrad/false/37'
    Then I should see that the "#rfi-container" element exists


  @api @javascript
  Scenario: Verify Web Directory component (app-webdir-ui)
    When I am at '/web-directory'
    Then I wait for 4 seconds
    Then I should see that multiple ".webdir-container" elements exist
    Then I should see that the "[data-search-type='faculty_rank']" element exists
    Then I should see that the "[data-search-type='people']" element exists
    Then I should see that the "[data-search-type='people_departments']" element exists
    Then I should see that the "[data-search-type='departments']" element exists
