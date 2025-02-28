Feature: Webform
    In order to ensure the reliability of my site's webform functionality
    As an anonymous user
    I want to verify that the webform can be successfully submitted and the submission is recorded

  @api @javascript @anonymous_webform
  Scenario: Verify users can view and interact with Webform
    Given I am logged in as a user with the "administrator" role
    When I am at '/admin/structure/webform/manage/contact/results/submissions'
    Then I wait for 2 seconds
    And I capture the number of submissions as "initial_count"

    Given I am an anonymous user
    When I am at '/webform'
    Then I wait for 2 seconds
    Then click "#fsrFocusFirst" if exists
    Then I wait for 2 seconds
    Given for "name" I enter "Name"
    Given for "email" I enter "mlsamuel@asu.edu"
    Given for "subject" I enter "Subject"
    Given for "message" I enter "Test message"
    Given I click the element "#edit-preferred-method label[for='edit-preferred-method-phone']"
    Then I wait for 2 seconds
    When I scroll "input[name=op]" into view
    Then I wait for 1 seconds
    Then click "input[name=op]" if exists
    Then I should see that the ".alert.alert-danger" element does not exist
    Then I wait for 3 seconds

    Given I am logged in as a user with the "administrator" role
    Then click "#fsrFocusFirst" if exists
    When I am at '/admin/structure/webform/manage/contact/results/submissions'
    Then I wait for 1 seconds
    And I capture the number of submissions as "final_count"
    Then I wait for 1 seconds

    Then the number of submissions should be increased by 1
