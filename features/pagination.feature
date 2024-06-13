Feature: Pagination
  In order to have confidence in my site's pagination
  As an anonymous user
  I want to verify that the pager works and matches brand standards

  @api @javascript
  Scenario: Verify the pagination
    Given I am an anonymous user
    When I am at '/pagination'
    Then I should see that the ".pagination.pager__items" element exists
    # Current/active page should be page 1.
    Then I should see that the "li.page-item.pager__item.is-active.active" element exists
    And I should see that the "li.page-item.active > a[title='Current page'][data-ga-text='page 1']" element exists
    # Next button exists with chevron (it says "last page," but that's a mistake).
    And I should see that the "li.page-item > a[title='Go to last page']" element exists
#    And I should see the link "Next"
    And I should see the chevron icon exists on the "li.page-item > a[title='Go to next page']" pager item
    # Click page 2.
    When I click the element "li.page-item > a[title='Go to page 2']"
    # Page 1 is no longer the 'active' item.
    Then I should see that the "li.page-item.active > a[title='Current page'][data-ga-text='page 1']" element does not exist
    # Page 2 is now the 'active' item.
    And I should see that the "li.page-item.active > a[title='Current page'][data-ga-text='page 2']" element exists
    # "Prev" button now displays with chevron.
    And I should see that the "li.page-item > a[title='Go to previous page']" element exists
    And I should see the chevron icon exists on the "li.page-item > a[title='Go to previous page']" pager item
    # A total of 13 items should display ("<" plus 10 pages, the ellipses, and ">")
    Then I should see that 13 of "ul.pagination.pager__items li.page-item" elements exist
    # Click "Next".
    When I click the element "li.page-item > a[title='Go to next page']"
    # Page 3 should be active/current.
    Then I should see that the "li.page-item.active > a[title='Current page'][data-ga-text='page 3']" element exists
    # Click "Prev".
    When I click the element "li.page-item > a[title='Go to previous page']"
    # Page 2 should be active/current again.
    Then I should see that the "li.page-item.active > a[title='Current page'][data-ga-text='page 2']" element exists




