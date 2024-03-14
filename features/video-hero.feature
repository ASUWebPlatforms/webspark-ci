Feature: Video Hero
  In order to have confidence in my site's video hero
  As an anonymous user
  I want to verify that the video hero functions properly

  @api @javascript
  Scenario: Verify Anonymous users can view and interact with video heroes
    Given I am an anonymous user
    When I am at "/sites/default/files/2022-11/sample-1.mp4"
    Then I should not see the text "Hmm, we can't find that page"
    When I am at '/video-hero'
    Then I should see that the ".block-inline-blockvideo-hero video source[src='/sites/default/files/2022-11/sample-1.mp4']" element exists
    And I should see that the ".video-hero-controls button#pauseHeroVid" element exists
    And I should see that the ".video-hero-controls button#playHeroVid" element exists
    Given I click the element ".video-hero-controls button#pauseHeroVid"
    Then I should see that the ".video-hero-controls button#pauseHeroVid[style='display: none;']" element exists
    And I should see that the ".video-hero-controls button#playHeroVid[style='display: inline-block;']" element exists
