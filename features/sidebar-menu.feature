Feature: Sidebar Menu
  In order to have confidence in my site's sidebar menu
  As an anonymous or administrative user
  I want to verify that it functions properly

  @api @javascript
  Scenario: Verify sidebar menu appearance
    Given I am an anonymous user
    When I am at '/sidebar-menu'
    Then I should see that the "nav#sidebar-left" element exists
    # Check for active element
    And I should see that the "nav#sidebar-left .nav-link-container > #sidebar.nav-link.is-active" element exists
    And I should see the gold underline exists on "nav#sidebar-left a#sidebar" menu item
    # Check for collapsible
    Then I should see that the "nav#sidebar-left .card-foldable > .card-header > a#pages.collapsed" element exists
    # Open collapsible
    Given I click the element "nav#sidebar-left a#pages.collapsed"
    Then I wait for 1 second
    Then I should see that the "nav#sidebar-left .card-foldable #cardBodypages.card-body.collapse.show" element exists
    # Check for active element within collapsible
    And I should see that the "nav#sidebar-left #cardBodypages [data-ga-text='Sidebar'].nav-link.is-active" element exists
    And I should see the gold underline exists on "nav#sidebar-left #cardBodypages [data-ga-text='Sidebar'].nav-link.is-active" menu item
