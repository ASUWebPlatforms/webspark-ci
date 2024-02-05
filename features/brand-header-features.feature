Feature: Brand header configs and features
  In order to have confidence in the Brand Header's functionality
  As an anonymous user
  I want to verify that each feature works properly.

  @api @javascript @test
  Scenario: Verify Menu functionality
    Given I am an anonymous user
    When I go to the homepage
    ## Test logos
      # Logo link
      Then I should see that the "a.navbar-brand" element exists
      # Logo vertical image
      Then I should see that the "a.navbar-brand img:nth-of-type(1)" element exists
      # Logo horizontal image
      Then I should see that the "a.navbar-brand img:nth-of-type(2)" element exists
    ## Test unit links
      # Parental Unit link
      Then I should see that the ".navbar .expand-title [data-testid='title'] [title='Parent unit home page']" element exists
      # Home page text link
      Then I should see that the ".navbar .expand-title [data-testid='title'] [title='Webspark CI home page']" element exists
    ## Test Home icon
      # Home page icon navigation link
      Then I should see that the ".nav-list .home.nav-item-selected" element exists
      # Home page icon should be underlined in gold
      Then I should see the gold underline exists on "nav ul.nav-list .home.nav-item-selected" menu item
    ## Test nav menu dropdown
      # The dropdown menu item should open on click
      When I click the element "[aria-owns='dropdown-4']"
      Then I should see that the "[aria-owns='dropdown-4'].open-link" element exists
      And I should see that the ".header-dropdown-4.opened" element exists
      # The dropdown menu item should close on subsequent click
      When I click the element "[aria-owns='dropdown-4'].open-link"
      Then I should see that the "[aria-owns='dropdown-4']" element exists
      And I should see that the "[aria-owns='dropdown-4'].open-link" element does not exist
      And I should see that the ".header-dropdown-4" element exists
      # The dropdown menu item should open on click
      When I click the element "[aria-owns='dropdown-4']"
      Then I should see that the "[aria-owns='dropdown-4'].open-link" element exists
      And I should see that the ".header-dropdown-4.opened" element exists
      # The dropdown menu item should close when I click elsewhere
      When I click the element "body"
      Then I should see that the "[aria-owns='dropdown-4']" element exists
      And I should see that the "[aria-owns='dropdown-4'].open-link" element does not exist
      And I should see that the ".header-dropdown-4" element exists
    ## Ensure navigation links actually work
      # Click the 'Basic Page' link
      When I click "Basic Page"
      # Verify that the 'Basic Page' loads
      Then I should see the heading "Basic Page"
      And the url should match "^.*?\/basic-page$"
      # The 'Basic Page' link in the navigation bar should be underlined in gold
      Then I should see the gold underline exists on "nav ul.nav-list li:nth-child(4) a.nav-item-selected" menu item
    ## Call to action buttons
      # Verify gold call to action button is present
      Then I should see that the "nav .buttons-container .button-gold" element exists
      # Verify maroon call to action button is present
      Then I should see that the "nav .buttons-container .button-maroon" element exists
    ## Mega menu
      # Verify the Mega Menu link exists
      Then I should see that the "[aria-owns='dropdown-5'][title='Mega Menu']" element exists
      # Click the Mega Menu link
      Then I click the element "a[aria-owns='dropdown-5'][title='Mega Menu']"
      Then I should see that the "[aria-owns='dropdown-5'][title='Mega Menu'].open-link" element exists
      And I should see that the ".header-dropdown-5.opened.mega" element exists
      # Check for contents of mega menu
      Then I should see that there are "4" "[id^='dropdown-5-dropdown-item-']" elements that exist
      Then I should see the heading "Column 1"
      Then I should see the heading "Column 2"
      Then I should see the heading "Column 3"
      Then I should see that the "#dropdown-5-dropdown-item-3-1 > li.nav-link > a" element exists
      And I should see the link "Column Break"
      # Check for black button
      Then I should see that the "#dropdown-5-dropdown-item-3-1 > li.nav-button > a.button-dark " element exists
      # Check for maroon tray button
      Then I should see that the ".dropdown-button-container a.button-maroon" element exists
      # Check for gold tray button
      Then I should see that the ".dropdown-button-container a.button-gold" element exists
      # Close the mega menu by clicking outside of it
      When I click the element "#asuHeader"
      Then I should see that the "[aria-owns='dropdown-5'][title='Mega Menu']" element exists
      And I should see that the "a[aria-owns='dropdown-5'][title='Mega Menu'].open-link" element does not exist
    ## Test login/logout links
      # Check if "Sign in" link exists
      Then I should see that the ".nav-link.login-status > a" element exists
      And I should see that the ".nav-link.login-status > a.signout" element does not exist
      # Log in as an administrator
      Given I am logged in as user "admin"
      Then I go to the homepage
      # Check if user name and sign out link exist
      Then I should see that the ".nav-link.login-status [data-testid='user-name']" element exists
      Then I should see that the ".nav-link.login-status > a.signout" element exists
      # Click the "sign out" link
      Then I click the element ".nav-link.login-status > a.signout"
      # Go to the home page again
      Then I go to the homepage
      # Check that the sign out element is no longer there
      Then I should see that the ".nav-link.login-status > a.signout" element does not exist
      # And the sign in link exists again
      And I should see that the ".nav-link.login-status > a" element exists
    ## Search functionality
      #





