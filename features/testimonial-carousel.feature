Feature: Test the Testimonial Carousel
  In order to have confidence in my site's testimonial carousel component.
  As an anonymous user
  I want to verify that the carousel navigation is working.

  @api @javascript
  Scenario: Test the Testimonial Carousel
    Given I am an anonymous user
    When I am at '/testimonial-carousel'
    # Check if bullets appear
    Then I should see that multiple "button.glide__bullet" elements exist
    # Check if chevrons appear
    Then I should see that 2 of "button.glide__arrow" elements exist
    When I scroll "button.glide__bullet" into view
    Then I wait for 1 seconds
    # Click the bullet
    Then I click the element "button.glide__bullet[data-glide-dir='=1']"
    Then I wait for 1 seconds
    # Display the second testimonial
    Then I should see the heading "Heading 2"
    When I scroll "button.glide__arrow.glide__arrow--next" into view
    Then I wait for 1 seconds
    # Click the chevron
    Then I click the element "button.glide__arrow.glide__arrow--next"
    # Display the third testimonial
    Then I should see the heading "Heading 3"
