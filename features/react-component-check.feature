Feature: React Component Check
  In order to have confidence in my site's React components
  As an anonymous user
  I want to verify that each component type successfully initializes.

  @api @javascript
  Scenario: Verify Card Arrangements (components-core)
    Given I am an anonymous user
    When I am at '/card-arrangement'
    Then I should see the heading "Card Arrangement"
    Then I should see the heading "Two Columns"
    Then I should see the heading "Three Columns"
    Then I should see the heading "Four columns"
    Then I should see the heading "Vertical Arrangement"
    Then I should see the heading "Ranking Cards"
    Then I should see the heading "Image based cards"
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify Card Carousel (component-carousel)
    Given I am an anonymous user
    When I am at '/card-carousel'
    Then I should see the heading "Card Carousel - One Column"
    Then I should see the heading "2 Columns"
    Then I should see the heading "Three Columns"
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify Header (component-header)
    Given I am an anonymous user
    When I am on the homepage
    Then I should see the link "Webspark CI home page"

#  @api @javascript
#  Scenario: Verify Cookie Consent (component-cookie-consent)
#    Given I am an anonymous user
#    When I am on the homepage
#    Then I should see the button "Ok, I agree"

  @api @javascript
  Scenario: Verify Degree Listing Page (app-degree-pages)
    Given I am an anonymous user
    When I am at '/degree-listing-page'
    Then I should see the heading "Browse degrees"
    And I should see the button "Search now"
    And I should see the button "Apply filters"
    Then I wait for 5 seconds
    Then I should see that the "[data-testid='list-view']" element exists

  @api @javascript
  Scenario: Verify Degree Listing Page (app-degree-pages)
    Given I am an anonymous user
    When I am at '/bachelors-degrees/majorinfo/ASACOCBS/undergrad/false/37'
    Then I should see the heading "Applied Computing (Cybersecurity)"
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify Degree Listing Page RFI component (app-rfi)
    Given I am an anonymous user
    When I am at '/bachelors-degrees/majorinfo/ASACOCBS/undergrad/false/37'
    Then I should see that the "#rfi-container" element exists

  @api @javascript
  Scenario: Verify Events component (component-events)
    Given I am an anonymous user
    When I am at '/events'
    Then I wait for 5 seconds
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify News component (component-news)
    Given I am an anonymous user
    When I am at '/news'
    Then I wait for 5 seconds
    Then I should see that the "[data-testid='feed-body']" element exists

  @api @javascript
  Scenario: Verify Web Directory component (app-webdir-ui)
    Given I am an anonymous user
    When I am at '/web-directory'
    Then I wait for 4 seconds
    Then I should see that multiple ".webdir-container" elements exist
    Then I should see that the "[data-search-type='faculty_rank']" element exists
    Then I should see that the "[data-search-type='people']" element exists
    Then I should see that the "[data-search-type='people_departments']" element exists
    Then I should see that the "[data-search-type='departments']" element exists

  @api @javascript @image_gallery-test
  Scenario: Verify Image Gallery (components-core)
    Given I am an anonymous user
    When I am at '/image-gallery'
    Then I should see the heading "Image Gallery"
    Then I wait for 2 seconds
    #Main image appear
    Then I should see that the "li.glide__slide.slider.glide__slide--active > div.uds-img > img.uds-img.figure-img.img-fluid" element exists
    Then I wait for 1 seconds
    #Thumbnails appers
    Then I should see that multiple "img.glide__bullet.bullet-image" elements exist
    #Chevron buttons appear and work
    Then I should see that 2 of "button.glide__arrow" elements exist
    And I click the element "button.glide__arrow.glide__arrow--next"
    Then I wait for 1 seconds
    And I click the element "button.glide__arrow.glide__arrow--next"
    Then I wait for 1 seconds
    And I click the element "button.glide__arrow.glide__arrow--prev"
    Then I wait for 1 seconds
    And I click the element "button.glide__arrow.glide__arrow--prev"
    Then I wait for 1 seconds
    #Text for image apper
    Then I should see that the "#caption > .uds-caption-text > div > p" element exists
    Then I wait for 1 seconds
    

  @api @javascript @anchor_menu__test
  Scenario: Verify Anchor menu component (components-core)
    Given I am an anonymous user
    When I am at '/anchor-menu'
    Then I wait for 2 seconds
    #Check "On this page" appear
    Then I should see that the ".uds-anchor-menu-wrapper" element exists
    And I should see the heading "On This Page:"
    #Check “current” item highlighted
    Then I click "Block B"
    And I wait for 1 seconds
    And I scroll "#webspark-anchor-link--152" into view
    And I wait for 1 seconds
    And I should see that the "a.nav-link.active[data-ga-text='block b']" element exists
    #Check sticky Anchor menu
    Then I should see that the ".uds-anchor-menu-attached" element exists
