Feature: Visibility of the footer
  To be confident that the footer looks good
  As anonymous user
  I want to verify that I can see the footer.

  @api @javascript @footer-test
  Scenario: Verify the homepage
    When I am on the homepage
    Then I scroll "#wrapper-endorsed-footer" into view
    Then I wait for 2 seconds
    #Check logo and Social Icons
    Then I should see that the "[data-ga-footer='asu logo']" element exists
    And I should see that the "[data-ga-footer='facebook icon']" element exists
    And I should see that the "[data-ga-footer='twitter icon']" element exists
    And I should see that the "[data-ga-footer='instagram icon']" element exists
    And I should see that the "[data-ga-footer='youtube icon']" element exists
    And I should see that the "[data-ga-footer='linkedin icon']" element exists
    Then I wait for 2 seconds
    #Check columns
    Then I should see that the "#wrapper-footer-columns" element exists
    And I should see that 6 of "div.col-xl" elements exist
    Then I wait for 2 seconds
    #Check global footer and “Repeatedly ranked #1”
    Then I should see that the "#wrapper-footer-innovation" element exists
    And I should see that the "a[data-ga-footer='#1 in the u.s. for innovation']" element exists
    And I should see that the "img[alt='Repeatedly ranked #1 on 20+ lists in the last 3 years']" element exists
    Then I should see that the "#wrapper-footer-colophon" element exists
    Then I wait for 2 seconds

