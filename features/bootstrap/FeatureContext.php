<?php

use Behat\Mink\Element\NodeElement;
use Drupal\DrupalExtension\Context\RawDrupalContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends RawDrupalContext {

  /**
   * Initializes context.
   *
   * Every scenario gets its own context instance.
   * You can also pass arbitrary arguments to the
   * context constructor through behat.yml.
   */
  public function __construct() {}

  /**
   * Behat test for logging in.
   *
   * @Given I am logged in as user :name
   */
  public function iAmLoggedInAsUser($name) {
    $domain = $this->getMinkParameter('base_url');

    // Pass base url to drush command.
    $uli = $this->getDriver('drush')->drush('uli', [
      "--name '" . $name . "'",
      "--browser=0",
      "--uri=$domain",
    ]);

    // Trim EOL characters.
    $uli = trim($uli);

    // Log in.
    $this->getSession()->visit($uli);
  }

  /**
   * Waits a while, for debugging.
   *
   * @param int $seconds
   *   How long to wait.
   *
   * @When I wait :seconds second(s)
   * @Then I wait for :seconds second(s)
   */
  public function wait($seconds) {
    sleep($seconds);
  }

  /**
   * Scroll selector into view.
   *
   * Borrowed from https://gist.github.com/MKorostoff/c94824a467ffa53f4fa9?permalink_comment_id=2095785#gistcomment-2095785
   *
   * @param string $selector
   *   Allowed selectors: #id, .className, //xpath.
   *
   * @When I scroll :selector into view
   *
   * @throws \Exception
   */
  public function scrollIntoView($selector) {
    $locator = $selector;

    switch ($locator) {
      // XPath selector.
      case $locator[0] === '/':
        $function = <<<JS
(function(){
  var elem = document.evaluate($selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  elem.scrollIntoView({ behavior: "instant", block: "center", inline: "start" });
})()
JS;
        break;
      // Id selector.
      case $locator[0] === '#':
        $selector = substr($selector, 1);
        $function = <<<JS
(function(){
  var elem = document.getElementById("$selector");
  elem.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
})()
JS;
        break;
      // Class name selector.
      case $locator[0] === '.':
        $selector = substr($selector, 1);
        $function = <<<JS
(function(){
  var elem = document.getElementsByClassName("$selector");
  elem[0].scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
})()
JS;
        break;

      // 'data-drupal-selector' attribute selectors.
      case (bool)$locator:
        $function = <<<JS
(function(){
  let elems = document.querySelectorAll(`[data-drupal-selector="${selector}"]`);
  elems[0].scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
})()
JS;

      default:
        throw new \Exception(__METHOD__ . ' Couldn\'t find selector: ' . $selector . ' - Allowed selectors: #id, .className, //xpath');
    }

    try {
      $this->getSession()->executeScript($function);
    }
    catch (Exception $e) {
      throw new \Exception(__METHOD__ . ' failed');
    }
  }

  /**
   * Check if a single element exists on the page.
   *
   * @Then I should see that the :selector element exists
   *
   * @throws \Exception
   */
  public function singleElementExists($selector) {
    $function = <<<JS
(function(){
  var elem = document.querySelector("$selector");
  return elem !== null && elem !== undefined;
})()
JS;
    if ($this->getSession()->evaluateScript($function)) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if multiple elements exist on the page.
   *
   * @Then I should see that multiple :selector elements exist
   * @throws \Exception
   */
  public function multipleElementsExist($selector) {
    $function = <<<JS
(function(){
  var elem = document.querySelectorAll("$selector");
  return elem.length > 1;
})()
JS;
    if ($this->getSession()->evaluateScript($function)) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if X number of elements exist on the page.
   *
   * @Then I should see that there are :number :selector elements exist
   * @throws \Exception
   */
  public function xNumberElementsExist($number, $selector) {
    $function = <<<JS
(function(){
  var elem = document.querySelectorAll("$selector");
  return elem.length === $number;
})()
JS;
    if ($this->getSession()->evaluateScript($function)) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed');
  }

  /**
   * Check the label for a checkbox.
   *
   * @Then I click the checkbox label for :checkbox
   */
  public function iClickTheCheckboxLabelFor($checkbox) {
    $function = <<<JS
(function(){
  document.querySelectorAll('[for=${checkbox}]')[0].click();
})()
JS;
    try {
      return $this->getSession()->executeScript($function);
    }
    catch (Exception $e) {
      throw new \Exception(__METHOD__ . ' failed');
    }
  }

}
