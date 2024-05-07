Feature: React Component Check
  In order to have confidence in my site's React components
  As an anonymous user
  I want to verify that each component type successfully initializes.

  Background:
    Given I am an anonymous user

  @api @javascript
  Scenario: Verify Card Arrangements (components-core)
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
    When I am at '/card-carousel'
    Then I should see the heading "Card Carousel - One Column"
    Then I should see the heading "2 Columns"
    Then I should see the heading "Three Columns"
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify Header (component-header)
    When I am on the homepage
    Then I should see the link "Webspark CI home page"

  @api @javascript
  Scenario: Verify Degree Listing Page (app-degree-pages)
    When I am at '/degree-listing-page'
    Then I should see the heading "Browse degrees"
    And I should see the button "Search now"
    And I should see the button "Apply filters"
    Then I wait for 5 seconds
    Then I should see that the "[data-testid='list-view']" element exists

  @api @javascript
  Scenario: Verify Degree Listing Page (app-degree-pages)
    When I am at '/bachelors-degrees/majorinfo/ASACOCBS/undergrad/false/37'
    Then I should see the heading "Applied Computing (Cybersecurity)"
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify Degree Listing Page RFI component (app-rfi)
    When I am at '/bachelors-degrees/majorinfo/ASACOCBS/undergrad/false/37'
    Then I should see that the "#rfi-container" element exists

  @api @javascript
  Scenario: Verify Events component (component-events)
    When I am at '/events'
    Then I wait for 5 seconds
    Then I should see that multiple "[data-testid='card-container']" elements exist

  @api @javascript
  Scenario: Verify News component (component-news)
    When I am at '/news'
    Then I wait for 5 seconds
    Then I should see that the "[data-testid='feed-body']" element exists

  @api @javascript
  Scenario: Verify Web Directory component (app-webdir-ui)
    When I am at '/web-directory'
    Then I wait for 4 seconds
    Then I should see that multiple ".webdir-container" elements exist
    Then I should see that the "[data-search-type='people']" element exists
    Then I should see that the "[data-search-type='people_departments']" element exists
    Then I should see that the "[data-search-type='departments']" element exists
    Then I should see that the "[data-search-type='faculty_rank']" element exists

  @api @javascript @accordions-test
  Scenario: Verify Accordions (component-accordion)
    When I am at '/accordion'
    Then I should see the heading "Accordion"
    Then I should see the heading "Accordion with Icons"
    And I should see that the ".accordion-icon" element exists
    Then I should see the heading "Accordion Colors"
    And I should see that "border-left" with ".5rem solid #ffc627" is in ".accordion-item" class
    And I should see that "border-left-color" with "#8c1d40" is in ".accordion-item-maroon" class
    And I should see that "border-left-color" with "#bfbfbf" is in ".accordion-item-gray" class
    And I should see that "border-left-color" with "#191919" is in ".accordion-item-dark" class
    Then I click "accordion-header-2"
    Then I wait for 1 seconds
    And I should see that the "#accordion-content-2.accordion-body.collapse.show" element exists
    Then I click "accordion-header-2"
    Then I wait for 1 seconds
    And I should see that the "#accordion-content-2.accordion-body.collapse" element exists

  @api @javascript @image_gallery-test
  Scenario: Verify Image Gallery (components-core)
    When I am at '/image-gallery'
    Then I should see the heading "Image Gallery"
    Then I wait for 2 seconds
    Then I should see that the "li.glide__slide.slider.glide__slide--active > div.uds-img > img.uds-img.figure-img.img-fluid" element exists
    Then I wait for 1 seconds
    Then I should see that multiple "img.glide__bullet.bullet-image" elements exist
    Then I should see that 2 of "button.glide__arrow" elements exist
    And I click the element "button.glide__arrow.glide__arrow--next"
    Then I wait for 1 seconds
    And I click the element "button.glide__arrow.glide__arrow--next"
    Then I wait for 1 seconds
    And I click the element "button.glide__arrow.glide__arrow--prev"
    Then I wait for 1 seconds
    And I click the element "button.glide__arrow.glide__arrow--prev"
    Then I wait for 1 seconds
    Then I should see that the "#caption > .uds-caption-text > div > p" element exists

  @api @javascript @anchor_menu__test
  Scenario: Verify Anchor menu component (components-core)
    When I am at '/anchor-menu'
    Then I wait for 2 seconds
    Then I should see that the ".uds-anchor-menu-wrapper" element exists
    And I should see the heading "On This Page:"
    Then I click "Block B"
    And I wait for 1 seconds
    And I scroll "#webspark-anchor-link--152" into view
    And I wait for 1 seconds
    And I should see that the "a.nav-link.active[data-ga-text='block b']" element exists
    Then I should see that the ".uds-anchor-menu-attached" element exists

  @api @javascript @notification_banner-test
  Scenario: Verify Notification banner component
    When I am at '/notification-banner'
    Then I should see that the "div.banner[role='banner']" element exists
    Then I wait for 2 seconds
    Then I should see that the "div.banner-close" element exists
    And I click the element "button[data-ga-action='close']"
    Then I wait for 1 seconds
    Then I should see that the ".div.banner[role='banner']" element does not exist
