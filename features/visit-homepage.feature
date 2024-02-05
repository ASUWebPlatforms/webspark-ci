Feature: Visibility of the homepage
  In order to have confidence that my site is accessible
  As an anonymous user
  I want to verify I can visit the homepage

  Scenario: Verify the homepage
    When I am on the homepage
    Then the response status code should be 200
