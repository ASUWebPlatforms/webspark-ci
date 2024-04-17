Feature: Video
  In order to have confidence in my site's video functionality
  As an anonymous user
  I want to verify that the YouTube embed functions properly

  @api @javascript
  Scenario: Verify Anonymous users can view and interact with YouTube videos
    Given I am an anonymous user
    When I am at '/video'
    Then I should see that the ".block-inline-blockvideo .youtube-video" element exists
    And I should see that the ".block-inline-blockvideo .youtube-video iframe[src*='/media/oembed?url=https%3A//www.youtube.com']" element exists
