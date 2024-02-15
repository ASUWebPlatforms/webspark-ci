Feature: Layout Builder Custom Blocks Check
  In order to have confidence in my site's Layout Builder custom blocks
  As an administrative user
  I want to verify that each custom block is included.

  @api @javascript
  Scenario: Verify Layout Builder Custom Blocks
    Given I am logged in as user "admin"
    When I am at '/node/2/layout'
    Then I scroll ".layout__region--first" into view
    Then I click "Add block"
    Then I click "Create content block"
    Then I should see that 30 of "#drupal-off-canvas-wrapper ul li" elements exist
    Then I should see the link "Accordion"
    Then I should see the link "Blockquote"
    Then I should see the link "Card and Image"
    Then I should see the link "Card Arrangement"
    Then I should see the link "Card Carousel"
    Then I should see the link "Card image and content"
    Then I should see the link "Content image overlap"
    Then I should see the link "Divider"
    Then I should see the link "Donut Chart"
    Then I should see the link "Events"
    Then I should see the link "Grid Links"
    Then I should see the link "Hero"
    Then I should see the link "Image"
    Then I should see the link "Image And Text Block"
    Then I should see the link "Image Background With Call To Action"
    Then I should see the link "Image Carousel"
    Then I should see the link "Image Gallery"
    Then I should see the link "Inset Box"
    Then I should see the link "News"
    Then I should see the link "Notification Banner"
    Then I should see the link "Sidebar Menu"
    Then I should see the link "Tabbed Content"
    Then I should see the link "Testimonial"
    Then I should see the link "Testimonial Carousel"
    Then I should see the link "Testimonial On Image Background"
    Then I should see the link "Text Content"
    Then I should see the link "Video"
    Then I should see the link "Video hero"
    # The Web Directory link was giving problems, so I'm accessing it this way
    Then I should see that the "#drupal-off-canvas > div > ul > li:nth-child(29) > a" element exists
    Then I should see the link "Webform"

  @api @javascript @apparence_settings_test
  Scenario: Verify that each of our Layout Builder Custom Block options has an Appearance Settings section on the form, with the correct fields and options.
    Given I am logged in as user "admin"
    When I am at '/node/2/layout'
    Then I scroll ".layout__region--first" into view
    Then I perform actions and checks for menu item "Accordion"
    Then I perform actions and checks for menu item "Blockquote"
    Then I perform actions and checks for menu item "Card and Image"
    Then I perform actions and checks for menu item "Card Arrangement"
    Then I perform actions and checks for menu item "Card Carousel"
    Then I perform actions and checks for menu item "Card image and content"
    Then I perform actions and checks for menu item "Content image overlap"
    Then I perform actions and checks for menu item "Events"
    Then I perform actions and checks for menu item "Grid Links"
    Then I perform actions and checks for menu item "Hero"
    Then I perform actions and checks for menu item "Image"
    Then I perform actions and checks for menu item "Image And Text Block"
    Then I perform actions and checks for menu item "Image Background With Call To Action"
    Then I perform actions and checks for menu item "Image Carousel"
    Then I perform actions and checks for menu item "Image Gallery"
    Then I perform actions and checks for menu item "Inset Box"
    Then I perform actions and checks for menu item "News"
    Then I perform actions and checks for menu item "Notification Banner"
    Then I perform actions and checks for menu item "Sidebar Menu"
    Then I perform actions and checks for menu item "Tabbed Content"
    Then I perform actions and checks for menu item "Testimonial"
    Then I perform actions and checks for menu item "Testimonial Carousel"
    Then I perform actions and checks for menu item "Testimonial On Image Background"
    Then I perform actions and checks for menu item "Text Content"
    Then I perform actions and checks for menu item "Video"
    Then I perform actions and checks for menu item "Video hero"
    Then I perform actions and checks for menu item "Web Directory"
    Then I perform actions and checks for menu item "Webform"
