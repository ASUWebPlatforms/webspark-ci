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

  @api @javascript
  Scenario: Verify adding, moving, and removing items
    Given I am logged in as a user with the "administrator" role
    When I am at '/sidebar-menu'
    # Make sure "webform" menu item is not there
    Then I should see that the "nav#sidebar-left a#webform" element does not exist
    Given I am at "/admin/structure/menu/manage/sidebar-menu"
    Then I should see the heading 'Edit menu Sidebar Menu'
    # Add "webform" as a menu item
    And I click the element ".local-actions__item > a[data-drupal-link-system-path='admin/structure/menu/manage/sidebar-menu/add']"
    Then the url should match "/admin/structure/menu/manage/sidebar-menu/add"
    Given I enter "webform" for "edit-title-0-value"
    Given I enter "/webform" for "link[0][uri]"
    Then I should see that the "select#edit-menu-parent > option[value='sidebar-menu:'][selected='selected']" element exists
    Given I click the element "input#edit-submit"
    Then I should see the heading "Status message"
    Then I should see the text "The menu link has been saved."
    And I should see that the "table#menu-overview a[href='/webform']" element exists
    Given I invalidate the following cache tags:
      | config:core.entity_view_display.block_content.menu_sidebar.default |
    When I am at '/sidebar-menu'
    # Ensure that the "webform" menu item displays on the page
    Then I should see that the "#sidebar-left > div:nth-child(5) a#webform" element exists
    When I am at '/admin/structure/menu/manage/sidebar-menu'
    # Drag "webform" menu item up one level and save
    Then I drag "#menu-overview tr:last-of-type td.tabledrag-cell a[title='Drag to re-order']" vertically by -80 pixels
    Then I click the element "input#edit-submit"
    Given I invalidate the following cache tags:
      | block_content_view |
      | block_content:51  |
    When I am at '/sidebar-menu'
    # Verify that the "webform" menu item is in the new position on the page
    Then I should see that the "#sidebar-left #cardBodypages a:nth-last-child(2)[data-ga-text='webform']" element exists
    When I am at '/admin/structure/menu/manage/sidebar-menu'
    # Delete the "webform" menu item
    Then I click the element "#menu-overview > tbody > tr:nth-child(9) > td:nth-child(4) li.dropbutton-toggle button" with JS
    Then I click the element "#menu-overview > tbody > tr:nth-child(9) > td:nth-child(4) li.delete.dropbutton__item.dropbutton-action.secondary-action > a" with JS
    Then I should see the text "Are you sure you want to delete the custom menu link webform?"
    And I click the element "div.ui-dialog.ui-dialog-buttons .ui-dialog-buttonpane .button.form-submit"
    Then I should see the heading "Status message"
    Then I should see the text "The menu link webform has been deleted."
    Then I click the element "input#edit-submit"
    Given I invalidate the following cache tags:
      | node:23 |
      | node_view |
    When I am at '/sidebar-menu'
    # Verify that the "webform" menu item is no longer visible on the page
    Then I should see that the "#sidebar-left #cardBodypages a:nth-last-child(2)[data-ga-text='webform']" element does not exist
