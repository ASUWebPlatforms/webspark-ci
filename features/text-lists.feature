Feature: Text list verification
  In order to have confidence in the text lists
  As an anonymous/administrative user
  I want to verify that each list style is correct.

  @api @javascript @list-display
  Scenario: Verify list display
    Given I am an anonymous user
    When I am at '/node/60'
    Then I should see the heading "Text Content (Lists)"
    # Bullet list
    Given I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list" element exists
    Then I should see the bullet list styles are correct on ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list"
    # Numbered list
    Given I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list + ol.uds-list" element exists
    Then I should see the numbered list styles are correct on ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list + ol.uds-list"
    # Icon list
    Given I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list.fa-ul" element exists
    Then I should see the icon list styles are correct on ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list.fa-ul"
      ## Check for rocket icon
      Then I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list.fa-ul li > .fontawesome-icon-inline > svg.fa-rocket > path" element exists
      ## Check for bus icon
      Then I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list.fa-ul li > .fontawesome-icon-inline > svg.fa-bus > path" element exists
      ## Check for car icon
      Then I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list.fa-ul li > .fontawesome-icon-inline > svg.fa-car > path" element exists
      ## Check for bicycle icon
      Then I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list.fa-ul li > .fontawesome-icon-inline > svg.fa-bicycle > path" element exists
    # Step list
    Given I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) ol.uds-list.uds-steplist" element exists
    Then I should see the step list styles are correct on ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) ol.uds-list.uds-steplist"
    # Multilevel bullet list
    Given I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list:nth-of-type(3)" element exists
    Then I should see the multilevel bullet list styles are correct on ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list:nth-of-type(3)"
    # Multilevel numbered list
    Given I should see that the ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list + ol.uds-list:nth-of-type(3)" element exists
    Then I should see the multilevel numbered list styles are correct on ".row.g-0 + .layout__fixed-width .layout__region--first div:nth-of-type(2) > ul.uds-list + ol.uds-list:nth-of-type(3)"

  @api @javascript @list-lb-ck
  Scenario: Verify lists within layout builder's CKEditor
    Given I am logged in as user "admin"
    When I am at '/node/60/layout'
    # Open up layout builder and CKEditor at the correct block
    Then I scroll "[aria-label='textblock']" into view
    Then I wait for 1 second
    Then I scroll vertically by -300 pixels
    Then I wait for 1 second
    Then I hover over the element "[aria-label='First region in textblock']"
    Then I click the element "[data-layout-content-preview-placeholder-label='\"Block version\" block'] button.trigger.focusable"
    Then I wait for 1 second
    Then I click the element "[data-layout-content-preview-placeholder-label='\"Block version\" block'] ul.contextual-links > li:nth-child(1) > a"
    Then I wait for 1 second
    # Verify styles within CKEditor
    # Bullet list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list" element exists
    Then I should see the bullet list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list"
    # Numbered list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list" element exists
    Then I should see the numbered list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list"
    # Icon list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list.fa-ul" element exists
    Then I should see the icon list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list.fa-ul"
      ## Check for rocket icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-rocket > path" element exists
      ## Check for bus icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-bus > path" element exists
      ## Check for car icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-car > path" element exists
      ## Check for bicycle icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-bicycle > path" element exists
    # Step list
    Given I should see that the ".ck.ck-content.ck-editor__editable ol.uds-list.uds-steplist" element exists
    Then I should see the step list styles in CKEditor are correct on ".ck.ck-content.ck-editor__editable ol.uds-list.uds-steplist"
    # Multilevel bullet list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list:nth-of-type(3)" element exists
    Then I should see the multilevel bullet list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list:nth-of-type(3)"
    # Multilevel numbered list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list:nth-of-type(3)" element exists
    Then I should see the multilevel numbered list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list:nth-of-type(3)"

  @api @javascript @list-edit-ck
  Scenario: Verify lists within the Edit tab's CKEditor
    Given I am logged in as user "admin"
    When I am at '/node/60/edit'
    # Verify styles within CKEditor
    # Bullet list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list" element exists
    Then I should see the bullet list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list"
    # Numbered list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list" element exists
    Then I should see the numbered list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list"
    # Icon list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list.fa-ul" element exists
    Then I should see the icon list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list.fa-ul"
      ## Check for rocket icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-rocket > path" element exists
      ## Check for bus icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-bus > path" element exists
      ## Check for car icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-car > path" element exists
      ## Check for bicycle icon
    Then I should see that the ".ck.ck-content.ck-editor__editable ul.uds-list.fa-ul li .fontawesome-icon-inline > svg.fa-bicycle > path" element exists
    # Step list
    Given I should see that the ".ck.ck-content.ck-editor__editable ol.uds-list.uds-steplist" element exists
    Then I should see the step list styles in CKEditor are correct on ".ck.ck-content.ck-editor__editable ol.uds-list.uds-steplist"
    # Multilevel bullet list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list:nth-of-type(3)" element exists
    Then I should see the multilevel bullet list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list:nth-of-type(3)"
    # Multilevel numbered list
    Given I should see that the ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list:nth-of-type(3)" element exists
    Then I should see the multilevel numbered list styles are correct on ".ck.ck-content.ck-editor__editable > ul.uds-list + ol.uds-list:nth-of-type(3)"
