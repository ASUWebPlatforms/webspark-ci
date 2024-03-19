Feature: Donut Chart
  In order to have confidence in my site's donut charts
  As an anonymous user
  I want to verify that the chart renders

  @api @javascript
  Scenario: Verify the donut charts render
    Given I am an anonymous user
    When I am at '/donut-chart'
    Then I should see that the ".uds-charts-and-graphs-container[data-number='100']" element exists
    # This step determines if the JavaScript ran, because it adds these inline styles
    And I should see that the "canvas#uds-donut[width='350'][height='350'][style='display: block; box-sizing: border-box; height: 350px; width: 350px;']" element exists
    And I should see that the "#percentage-display" element exists
    And I should see the text "100%"
    And I should see the text "Aenean pretium nulla enim, at accumsan est lacinia vehicula."

