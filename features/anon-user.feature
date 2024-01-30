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
