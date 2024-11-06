Feature: CKEditor button verification
  In order to have confidence in the WYSIWYG configuration
  As an anonymous user
  I want to verify that each button exists.

  @api @javascript
  Scenario: Verify CKEditor buttons
    Given I am logged in as user "admin"
    When I am at '/node/add/page'
    Then I wait for 2 seconds
    # Bold button
    Then I should see that the "[data-cke-tooltip-text^='Bold']" element exists
    # Italics button
    Then I should see that the "[data-cke-tooltip-text^='Italic']" element exists
    # Link button
    Then I should see that the "[data-cke-tooltip-text^='Link']" element exists
    # Fontawesome button
    Then I should see that the "[data-cke-tooltip-text='Insert Fontawesome Icon']" element exists
    # Upload image button
    Then I should see that the "[data-cke-tooltip-text='Upload image from computer']" element exists
    # Insert media button
    Then I should see that the "[data-cke-tooltip-text='Insert Media']" element exists
    # Heading button
    Then I should see that the "[data-cke-tooltip-text='Heading']" element exists
    # Source button
    Then I should see that the "[data-cke-tooltip-text='Source']" element exists
    # Responsive columns button
    Then I should see that the "[data-cke-tooltip-text='CKEditor Responsive']" element exists
    # Unordered list button
    Then I should see that the "[data-cke-tooltip-text='Bulleted List']" element exists
    # Ordered list button
    Then I should see that the "[data-cke-tooltip-text='Numbered List']" element exists
    # Disabled list styles button
    Then I should see that the "[data-cke-tooltip-text='List Properties']" element exists
    # Button button
    Then I should see that the "[data-cke-tooltip-text='Button']" element exists
    # Horizontal line button
    Then I should see that the "[data-cke-tooltip-text='Horizontal line']" element exists
    # Gold divider button
    Then I should see that the "[data-cke-tooltip-text='Divider']" element exists
    # Lead paragraph button
    Then I should see that the "[data-cke-tooltip-text='Lead']" element exists
    # Highlighted Heading button
    Then I should see that the "[data-cke-tooltip-text='Highlighted Heading']" element exists
    # Blockquote button
    Then I should see that the "[data-cke-tooltip-text='Blockquote']" element exists
    # Webspark table button
    Then I should see that the "[data-cke-tooltip-text='Webspark table']" element exists
