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

      case (bool) $locator:
        $function = <<<JS
(function(){
  let elems = document.querySelectorAll("$locator");
  elems[0].scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
})()
JS;
        break;

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
   * Scroll the window vertically by N pixels
   *
   * @param int $number
   *   Allowed selectors: positive and negative numbers
   *
   * @Then I scroll vertically by :number pixels
   *
   * @throws \Exception
   */
  public function scrollByN(int $number) {
    $function = <<<JS
(function(){
  window.scrollBy(0, $number);
})()
JS;
    $this->getSession()->evaluateScript($function);
  }

  /**
   * @When /^I hover over the element "([^"]*)"$/
   *
   * Borrowed from https://stackoverflow.com/questions/18499851/how-do-i-tell-behat-mink-to-hover-over-an-element-on-a-webpage
   */
  public function iHoverOverTheElement($locator)
  {
    $session = $this->getSession(); // get the mink session
    $element = $session->getPage()->find('css', $locator); // runs the actual query and returns the element

    // errors must not pass silently
    if (null === $element) {
      throw new \InvalidArgumentException(sprintf('Could not evaluate CSS selector: "%s"', $locator));
    }

    // ok, let's hover it
    $element->mouseOver();
  }

  /**
   * @When /^I click the element "([^"]*)"$/
   */
  public function iClickTheElement($locator)
  {
    $session = $this->getSession(); // get the mink session
    $element = $session->getPage()->find('css', $locator); // runs the actual query and returns the element

    // errors must not pass silently
    if (null === $element) {
      throw new \InvalidArgumentException(sprintf('Could not evaluate CSS selector: "%s"', $locator));
    }

    // ok, let's click it
    $element->click();
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
   * Check if a single element does not exist on the page.
   *
   * @Then I should see that the :selector element does not exist
   *
   * @throws \Exception
   */
  public function singleElementDoesNotExist($selector) {
    $function = <<<JS
(function(){
  var elem = document.querySelector("$selector");
  return elem !== null && elem !== undefined;
})()
JS;
    if (!$this->getSession()->evaluateScript($function)) {
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
   * @Then I should see that there are :number :selector elements that exist
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
   * Check if active menu has gold underline.
   *
   * @Then I should see the gold underline exists on :selector menu item
   *
   * @throws \Exception
   */
  public function goldUnderlineExists($selector) {
    $function = <<<JS
(function(){
  var elem = window.getComputedStyle(document.querySelector("$selector"), "::after").getPropertyValue('background');
  if (elem === "rgba(0, 0, 0, 0) linear-gradient(to right, rgba(0, 0, 0, 0) 0.5%, rgb(255, 198, 39) 0.5%) repeat scroll 0% 0% / auto padding-box border-box") {
    return elem;
  }
  else {
    return FALSE;
  }
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
