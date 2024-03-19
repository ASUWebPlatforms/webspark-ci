Feature: Anonymous user
  In order to have confidence in my site's access controls
  As an anonymous user
  I want to verify access in various scenarios

  # Debug tip:
  # Use the step `And print last response`

  @api @javascript
  Scenario: Verify Anonymous users are redirected to the CAS login from /caslogin links
    Given I am an anonymous user
    When I am at '/caslogin?returnto=/'
    # Because Behat users won't have CAS sessions...
    Then I should see the heading "Application Not Authorized to Use CAS"
    And print current URL

  @api @javascript @search_page
  Scenario: Verify Anonymous users can see and use search page
    Given I am an anonymous user
    When I go to the homepage
    When I click the element ".search-button"
    Given for "q" I enter "test"
    Then I submit the "[name='gs']" form
    Then the url should match "^\/\#gsc\.tab\=0\&gsc\.q=test.*?$"
    And I should see the heading "Search"
    Then I wait for 5 seconds

  @api @javascript @404_page
  Scenario: Verify Anonymous users can check 404 page
    Given I am an anonymous user
    When I am at '/searc'
    Then I should see that the ".container-page-404" element exists
    Then I wait for 5 seconds

  @api @javascript @404_page_search-test
  Scenario: Verify Anonymous users can search in 404 page
    Given I am an anonymous user
    When I am at '/searc'
    Given for "search" I enter "test"
    Then I submit the "#webspark-blocks-asu-search-form" form
    Then I should see the heading "Search"
    Then I wait for 5 seconds
