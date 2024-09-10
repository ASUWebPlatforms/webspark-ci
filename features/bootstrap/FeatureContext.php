<?php

use Drupal\DrupalExtension\Context\RawDrupalContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends RawDrupalContext {
  private int $pagedNumbers = 0;
  private array $elPosition = [];

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
   *
   * @param string $name
   */
  public function iAmLoggedInAsUser(string $name): void {
    $domain = $this->getMinkParameter('base_url');
    $uli = $this->getDriver('drush')->drush('uli', [
      "--name '" . $name . "'",
      '--browser=0',
      "--uri=$domain",
    ]);
    $uli = trim($uli);

    $this->getSession()->visit($uli);
  }

  /**
   * Waits a while, for debugging.
   *
   * @Then I wait for :seconds second(s)
   * @When I wait :seconds second(s)
   *
   * @param int $seconds How long to wait.
   */
  public function wait(int $seconds): void {
    sleep($seconds);
  }

  /**
   * Scroll selector into view.
   *
   * See https://gist.github.com/MKorostoff/c94824a467ffa53f4fa9?permalink_comment_id=2095785#gistcomment-2095785
   *
   * @When /^I scroll "((\\\")?.*)" into view$/
   *
   * @param string $selector Allowed selectors: #id, .className, //xpath.
   *
   * @throws Exception
   */
  public function scrollIntoView(string $selector): void {
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
            elem.scrollIntoView({ behavior: "instant", block: "center", inline: "start" });
          })()
        JS;
        break;
      // Class name selector.
      case $locator[0] === '.':
        $selector = substr($selector, 1);
        $function = <<<JS
          (function(){
            var elem = document.getElementsByClassName("$selector");
            elem[0].scrollIntoView({ behavior: "instant", block: "center", inline: "start" });
          })()
        JS;
        break;
      case (bool) $locator:
        $function = <<<JS
          (function(){
            let elems = document.querySelectorAll("$locator");
            elems[0].scrollIntoView({ behavior: "instant", block: "start", inline: "start" });
          })()
        JS;
        break;
      default:
        throw new Exception(__METHOD__ . ' Couldn\'t find selector: ' . $selector . ' - Allowed selectors: #id, .className, //xpath');
    }

    try {
      $this->getSession()->executeScript($function);
    }
    catch (Exception $e) {
      throw new Exception(__METHOD__ . ' failed');
    }
  }

  /**
   * Scroll the window vertically by N pixels.
   *
   * @Then /^I scroll vertically by (-?\d+) pixels$/
   *
   * @param int $number
   *   Allowed selectors: positive and negative numbers
   *
   * @throws Exception
   */
  public function scrollByN(int $number): void {
    $function = <<<JS
      (function(){
        window.scrollBy(0, $number);
      })()
    JS;

    $this->getSession()->evaluateScript($function);
  }

  /**
   * Hover over an element.
   *
   * See https://stackoverflow.com/questions/18499851/how-do-i-tell-behat-mink-to-hover-over-an-element-on-a-webpage
   *
   * @When /^I hover over the element "((\\\")?.*)"$/
   *
   * @param string $locator
   */
  public function iHoverOverTheElement(string $locator): void {
    $session = $this->getSession();
    $element = $session->getPage()
      ->find('css', $locator);

    if (NULL === $element) {
      throw new InvalidArgumentException(sprintf('Could not evaluate CSS selector: "%s"', $locator));
    }

    $element->mouseOver();
  }

  /**
   * Click a specific CSS selector's element.
   *
   * @When /^I click the element "((\\\")?.*)"$/
   *
   * @param string $locator
   */
  public function iClickTheElement(string $locator): void {
    $session = $this->getSession();
    $element = $session->getPage()
      ->find('css', $locator);

    if (NULL === $element) {
      throw new InvalidArgumentException(sprintf('Could not evaluate CSS selector: "%s"', $locator));
    }

    $element->click();
  }

  /**
   * Click a specific CSS selector's element with JS.
   *
   * @When /^I click the element "((\\\")?.*)" with JS$/
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function iClickTheElementJS(string $selector): void {
    $function = <<<JS
      (function(){
        let elem = document.querySelector("$selector");
        if (!elem) {
          return false;
        }
        elem.click();
        return elem !== false && elem !== undefined;
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Remove CSS class from selector.
   *
   * @Then I remove the :class CSS class from :selector
   *
   * @param string $class
   * @param string $selector
   *
   * @throws Exception
   */
  public function removeClassFromSelector(string $class, string $selector): void {
    $function = <<<JS
      (function(){
        var elem = document.querySelector("$selector");
        elem.classList.remove("$class");
        // Intentionally not simplifying to "true"
        return elem !== null && elem !== undefined;
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if a single element exists on the page.
   *
   * @Then /^(?:I should see that )?the "(?P<selector>[^"]*)" element (?:exists|should exist)$/
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function singleElementExists(string $selector): void {
    $function = <<<JS
      (function(){
        var elem = document.querySelector("$selector");
        return elem !== null && elem !== undefined;
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if a single element does not exist on the page.
   *
   * @Then I should see that the :selector element does not exist
   *
   * @throws Exception
   */
  public function singleElementDoesNotExist($selector): void {
    $function = <<<JS
      (function(){
        var elem = document.querySelector("$selector");
        return elem !== null && elem !== undefined;
      })()
    JS;

    if (!$this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Submit a form.
   *
   * @Then I submit the :selector form
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function submitForm(string $selector): void {
    $function = <<<JS
      (function(){
        var elem = document.querySelector("$selector");
        elem.submit();
        // Intentionally not simplifying to "true"
        return elem !== null && elem !== undefined;
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if multiple elements exist on the page.
   *
   * @Then I should see that multiple :selector elements exist
   *
   * @throws Exception
   */
  public function multipleElementsExist($selector): void {
    $function = <<<JS
      (function(){
        var elem = document.querySelectorAll("$selector");
        return elem.length > 1;
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if X number of elements exist on the page.
   *
   * @Then I should see that :number of :selector elements exist
   *
   * @param int $number
   * @param string $selector
   *
   * @throws Exception
   */
  public function xNumberElementsExist(int $number, string $selector): void {
    $function = <<<JS
      (function(){
        var elem = document.querySelectorAll("$selector");
        return elem.length === $number;
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if active menu has gold underline.
   *
   * @Then I should see the gold underline exists on :selector menu item
   *
   * @throws Exception
   */
  public function goldUnderlineExists($selector): void {
    $function = <<<JS
      (function(){
        var elem = window.getComputedStyle(document.querySelector("$selector"), "::after").getPropertyValue('background');
        if (elem === "rgba(0, 0, 0, 0) linear-gradient(to right, rgba(0, 0, 0, 0) 0.5%, rgb(255, 198, 39) 0.5%) repeat scroll 0% 0% / auto padding-box border-box" ||
        elem === "rgb(255, 198, 39) none repeat scroll 0% 0% / auto padding-box border-box") {
          return elem;
        }
        else {
          return false;
        }
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check if pager has chevron.
   *
   * @Then I should see the chevron icon exists on the :selector pager item
   *
   * @throws Exception
   */
  public function chevronExists($selector): void {
    $function = <<<JS
      (function(){
        var elem = window.getComputedStyle(document.querySelector("$selector"), "::after").getPropertyValue('content');
        if (elem === 'none') {
          var elem = window.getComputedStyle(document.querySelector("$selector"), "::before").getPropertyValue('content');
        }

        if (elem && elem !== 'none') {
          switch (true) {
            case elem === `url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' data-fa-i2svg=''><path fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'></path></svg>")`:
              return true;
            default:
              return false;
          }
        }
        return false;
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Drag selector item vertically by X pixels.
   *
   * @Then I drag :selector vertically by :number pixels
   *
   * @param $selector
   * @param $number
   *
   * @return void
   * @throws Exception
   */
  public function dragVerticallyByXpx($selector, $number): void {
    $function = <<<JS
      (function(){
        // We create 3 mouse events using MouseEvent interface,
        // one for mousedown to initiate the process,
        // one for mousemove to handle to movement
        // and one for mouseup to terminate the process
        let element = document.querySelector("$selector");

        const mouseDownEvent = new MouseEvent('mousedown', {
          clientX: element.getBoundingClientRect().left,
          clientY: element.getBoundingClientRect().top,
          bubbles: true,
          cancelable: true
        });

        const mouseMoveEvent = new MouseEvent('mousemove', {
          clientX: element.getBoundingClientRect().left,
          clientY: element.getBoundingClientRect().top $number,
          bubbles: true,
          cancelable: true
        });

        const mouseUpEvent = new MouseEvent('mouseup', {
          bubbles: true,
          cancelable: true
        });

        // Dispatch the mousedown event to the element that has the listener
        // For mousemove, the listener may be the parent or even the document
        // Dispatch mouseup to terminate the process
        if (element.dispatchEvent(mouseDownEvent) === false && element.dispatchEvent(mouseMoveEvent) === false && element.dispatchEvent(mouseUpEvent) === true) {
          return true;
        } else {
          return false;
        }
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check the label for a checkbox.
   *
   * @Then I click the checkbox label for :checkbox
   * @throws Exception
   */
  public function iClickTheCheckboxLabelFor($checkbox) {
    $function = <<<JS
      (function(){
        document.querySelectorAll('[for={$checkbox}]')[0].click();
      })()
    JS;

    try {
      return $this->getSession()->executeScript($function);
    }
    catch (Exception $e) {
      throw new Exception(__METHOD__ . ' failed');
    }
  }

  /**
   * @Given I perform actions and checks for menu item :menuItem
   *
   * @throws Behat\Mink\Exception\ElementNotFoundException
   * @throws Exception
   */
  public function iPerformActionsAndChecksForMenuItem($menuItem): void {
    $session = $this->getSession();
    print("Start item\n");

    try {
      $this->iClickTheElement('.accept-btn');
    }
    catch (Exception $e) {
    }

    $session->getPage()->clickLink('Add block');
    print("Click Add block \n");

    $start = microtime(TRUE);
    $end = $start + 5;
    $continue = TRUE;
    while ($continue && (microtime(TRUE) < $end)) {
      if ($this->getSession()->getPage()->hasLink('Create content block')) {
        $this->getSession()->getPage()->clickLink('Create content block');
        $continue = FALSE;
        print("Click Create content block\n");
      }
      usleep(500000);
    }

    $start = microtime(TRUE);
    $end = $start + 5;
    $continue = TRUE;
    if (str_contains($menuItem, 'Web Directory')) {
      # The Web Directory link was giving problems, so I'm accessing it this way
      $this->iClickTheElement('#drupal-off-canvas > div > ul > li:nth-child(29) > a');
    }
    else {
      while ($continue && (microtime(TRUE) < $end)) {
        try {
          if ($this->getSession()
            ->getPage()
            ->hasLink(str_replace('\\"', '"', $menuItem))) {
            $session->getPage()->clickLink(str_replace('\\"', '"', $menuItem));
            $continue = FALSE;
            print('Click ' . $menuItem . "\n");
          }
        }
        catch (Exception $e) {
        }
        usleep(500000);
      }
    }

    $start = microtime(TRUE);
    $end = $start + 5;
    $continue = TRUE;

    $functionCheckAppearanceDetail = <<<JS
      (function(){
        var elem = document.querySelector("summary[aria-controls*=group-appearance-settings]");
        return elem !== null && elem !== undefined;
      })()
    JS;

    while ($continue && (microtime(TRUE) < $end)) {
      if ($this->getSession()->evaluateScript($functionCheckAppearanceDetail)) {
        $this->iClickTheElement('summary[aria-controls*=group-appearance-settings]');
        $this->scrollIntoView('summary[aria-controls*=group-appearance-settings]');
        $continue = FALSE;
        print("Click Appearance settings details\n");
      }
      usleep(500000);
    }

    // $this->singleElementExists('table[id*=field-anchor-menu-settings-values]');
    $this->xNumberElementsExist(2, 'select[data-drupal-selector*=edit-settings-block-form-field-spacing]');
    $this->wait(2);
    print('End item');
  }

  /**
   * Check if X class have X style with X value.
   *
   * @Then I should see that :style with :value is in :selector class
   *
   * @param string $selector
   * @param string $style
   * @param string $value
   *
   * @return null
   * @throws Exception
   */
  public function cssStyleExists(string $selector, string $style, string $value) {
    $function = <<<JS
      (function(){
        var item = document.querySelector('$selector');
        var styles = window.getComputedStyle(item);
        var styleValue = styles.getPropertyValue('$style');

        if (styleValue.trim() === '$value') {
          return true;
        } else {
          return false;
        }
      })()
    JS;

    try {
      return $this->getSession()->executeScript($function);
    }
    catch (Exception $e) {
      throw new Exception(__METHOD__ . ' failed');
    }
  }

  /**
   * Verify only one element on the page has a certain selector.
   *
   * @Then only one element should have the selector :selector
   *
   * @param string $selector
   *
   * @return void
   * @throws Exception
   */
  public function onlyOneElementShouldHaveTheSelector(string $selector): void {
    $elements = $this->getSession()->getPage()->findAll('css', $selector);
    if (count($elements) !== 1) {
      throw new Exception(sprintf('Expected exactly one element to match the selector "%s", but found %d.', $selector, count($elements)));
    }
  }

  /**
   * Verify a certain element contains a certain class.
   *
   * @Given the :selector element should have the class/classes :classes
   *
   * @param string $selector
   * @param string $classes
   *
   * @return void
   * @throws Exception
   */
  public function theElementShouldHaveTheClasses(string $selector, string $classes): void {
    $element = $this->getSession()->getPage()->find('css', $selector);
    if (NULL === $element) {
      throw new Exception(sprintf('The element "%s" was not found on the page.', $selector));
    }

    $classList = array_filter(explode('.', $classes), function($class) {
      return !empty($class);
    });

    foreach ($classList as $class) {
      if (!$element->hasClass($class)) {
        throw new Exception(sprintf('The element "%s" does not have the class "%s".', $selector, $class));
      }
    }
  }

  /**
   * Verify a certain element does not contain a certain class.
   *
   * @Given the :selector element should not have the class/classes :classes
   *
   * @param string $selector
   * @param string $classes
   *
   * @return void
   * @throws Exception
   */
  public function theElementShouldNotHaveTheClasses(string $selector, string $classes): void {
    $element = $this->getSession()->getPage()->find('css', $selector);
    if (NULL === $element) {
      throw new Exception(sprintf('The element "%s" was not found on the page.', $selector));
    }

    $classList = array_filter(explode('.', $classes), function($class) {
      return !empty($class);
    });

    foreach ($classList as $class) {
      if ($element->hasClass($class)) {
        throw new Exception(sprintf('The element "%s" has the class "%s".', $selector, $class));
      }
    }
  }

  /**
   * Grab the value of how many pages there are in pagination.
   *
   * @Given I store the last pagination page number
   *
   * @return void
   * @throws Exception
   */
  public function getPaginatedPages(): void {
    $lastPageElement = $this->getSession()
      ->getPage()
      ->find('css', '.page-item:nth-last-child(2) > .page-link');

    if (NULL === $lastPageElement) {
      throw new Exception('Last pagination element not found.');
    }

    $this->pagedNumbers = (int) filter_var($lastPageElement->getText(), FILTER_SANITIZE_NUMBER_INT);
    echo $this->pagedNumbers;
  }

  /**
   * Compare the number of paginated pages after applying a filter.
   *
   * @Then Check the current pagination is :comparison than the previous pagination
   *
   * @param string $comparison less|greater
   *
   * @throws Exception
   */
  public function checkPaginationAfterFilter(string $comparison): void {
    $lastPageElement = $this->getSession()
      ->getPage()
      ->find('css', '.page-item:nth-last-child(2) > .page-link');

    if (NULL === $lastPageElement) {
      throw new Exception('Last pagination element not found.');
    }

    $currentPageNumber = (int) filter_var($lastPageElement->getText(), FILTER_SANITIZE_NUMBER_INT);

    if ($comparison === 'less' && $currentPageNumber >= $this->pagedNumbers) {
      throw new Exception("Expected less than the stored value {$this->pagedNumbers}, but found $currentPageNumber");
    }
    elseif ($comparison === 'greater' && $currentPageNumber <= $this->pagedNumbers) {
      throw new Exception("Expected greater than the stored value {$this->pagedNumbers}, but found $currentPageNumber");
    }

    echo $currentPageNumber;
  }

  /**
   * Check bullet list styles.
   *
   * @Then I should see the bullet list styles are correct on :selector
   *
   * @throws Exception
   */
  public function verifyBulletList($selector): void {
    $function = <<<JS
      (function(){
        var ulListStyle = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-type');
        var ulFontStyle = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-family');
        var ulMaxWidth = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('max-width');
        var ulPaddingBottom = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-bottom');
        var ulPaddingInlineStart = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-inline-start');
        var ulFontSize = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-size');
        var ulListStylePosition = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-position');
        var liListStyle = window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('list-style-type');
        var liBeforeContent = window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('content');
        var liPaddingLeft = window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-left');
        var liMarginBottom = window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('margin-bottom');
        var liDisplay = window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('display');
        return ulListStyle === "none"
            && ulFontStyle.includes("Arial")
            && ulMaxWidth === "700px"
            && ulPaddingBottom === "48px"
            && ulPaddingInlineStart === "32px"
            && ulFontSize === "16px"
            && ulListStylePosition === "outside"
            && liListStyle === "none"
            && liBeforeContent === '"•"'
            && liPaddingLeft === "32px"
            && liMarginBottom === "16px"
            && liDisplay === "list-item";
      })()
    JS;
    $result = $this->getSession()->evaluateScript($function);
    if ($result === true) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed at ' . $result);
  }

  /**
   * Check multilevel bullet list styles.
   *
   * @Then I should see the multilevel bullet list styles are correct on :selector
   *
   * @throws Exception
   */
  public function verifyMultilevelBulletList($selector): void {
    $function = <<<JS
      (function(){
        var liUlLiBeforeContent = window.getComputedStyle(document.querySelector("$selector > li > ul > li"), ":before").getPropertyValue('content');
        return liUlLiBeforeContent === '"◦"';
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check icon list styles.
   *
   * @Then I should see the icon list styles are correct on :selector
   *
   * @throws Exception
   */
  public function verifyIconList($selector): void {
    $function = <<<JS
      (function(){
        const styles = {
          ulListStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-type'),
          ulFontStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-family'),
          ulMaxWidth: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('max-width'),
          ulPaddingBottom: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-bottom'),
          ulPaddingInlineStart: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-inline-start'),
          ulFontSize: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-size'),
          ulListStylePosition: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-position'),
          liListStyle: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('list-style-type'),
          liPaddingLeft: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-left'),
          liMarginBottom: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('margin-bottom'),
          liDisplay: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('display')
        };
        const testValues = [];
        testValues['ulListStyle'] = "none";
        testValues['ulFontStyle'] = 'Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif';
        testValues['ulMaxWidth'] = "700px";
        testValues['ulPaddingBottom'] = "48px";
        testValues['ulPaddingInlineStart'] = "32px";
        testValues['ulFontSize'] = "16px";
        testValues['ulListStylePosition'] = "outside";
        testValues['liListStyle'] = "none";
        testValues['liPaddingLeft'] = "32px";
        testValues['liMarginBottom'] = "16px";
        testValues['liDisplay'] = "list-item";

        for (const [key, value] of Object.entries(styles)) {
          if (value === testValues[key]) {
            continue;
          }
          else {
            return key;
          }
        }
        return true;
      })()
    JS;
    $result = $this->getSession()->evaluateScript($function);
    if ($result === true) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed at ' . $result);
  }

  /**
   * Check numbered list styles.
   *
   * @Then I should see the numbered list styles are correct on :selector
   *
   * @throws Exception
   */
  public function verifyNumberedList($selector): void {
    $function = <<<JS
      (function(){
        const styles = {
          olListStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-type'),
          olFontStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-family'),
          olMaxWidth: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('max-width'),
          olPaddingBottom: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-bottom'),
          olPaddingInlineStart: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-inline-start'),
          olFontSize: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-size'),
          olListStylePosition: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-position'),
          liListStyle: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('list-style-type'),
          liBeforeContent: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('content'),
          liPaddingLeft: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-left'),
          liMarginBottom: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('margin-bottom'),
          liDisplay: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('display')
        }
        const testValues = [];
        testValues['olListStyle'] = "none";
        testValues['olFontStyle'] = 'Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif';
        testValues['olMaxWidth'] = "700px";
        testValues['olPaddingBottom'] = "48px";
        testValues['olPaddingInlineStart'] = "48px";
        testValues['olFontSize'] = "16px";
        testValues['olListStylePosition'] = "outside";
        testValues['liListStyle'] = "none";
        testValues['liBeforeContent'] = 'counter(listcounter) ". "';
        testValues['liPaddingLeft'] = "48px";
        testValues['liMarginBottom'] = "16px";
        testValues['liDisplay'] = "list-item";

        for (const [key, value] of Object.entries(styles)) {
          if (value === testValues[key]) {
            continue;
          }
          else {
            return key;
          }
        }
        return true;
      })()
    JS;
    $result = $this->getSession()->evaluateScript($function);
    if ($result === true) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed at ' . $result);
  }

  /**
   * Check multilevel numbered list styles.
   *
   * @Then I should see the multilevel numbered list styles are correct on :selector
   *
   * @throws Exception
   */
  public function verifyMultilevelNumberedList($selector): void {
    $function = <<<JS
      (function(){
        var liOlLiBeforeContent = window.getComputedStyle(document.querySelector("$selector > li > ol > li"), ":before").getPropertyValue('content');
        var liOlLiOlLiBeforeContent = window.getComputedStyle(document.querySelector("$selector > li > ol > li > ol > li"), ":before").getPropertyValue('content');
        var liOlLiOlLiOlLiBeforeContent = window.getComputedStyle(document.querySelector("$selector > li > ol > li > ol > li > ol > li"), ":before").getPropertyValue('content');
        return liOlLiBeforeContent === 'counter(listcounter, lower-alpha) ". "'
          && liOlLiOlLiBeforeContent === 'counter(listcounter, lower-roman) ". "'
          && liOlLiOlLiOlLiBeforeContent === 'counter(listcounter) ". "';
      })()
    JS;

    if ($this->getSession()->evaluateScript($function)) {
      return;
    }

    throw new Exception(__METHOD__ . ' failed');
  }

  /**
   * Check numbered list styles.
   *
   * @Then I should see the step list styles are correct on :selector
   *
   * @throws Exception
   */
  public function verifyStepList($selector): void {
    $function = <<<JS
      (function(){
        const styles = {
          olListStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-type'),
          olFontStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-family'),
          olMaxWidth: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('max-width'),
          olPaddingBottom: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-bottom'),
          olPaddingInlineStart: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-inline-start'),
          olFontSize: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-size'),
          olListStylePosition: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-position'),
          liListStyle: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('list-style-type'),
          liBeforeContent: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('content'),
          liBeforeBackgroundColor: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('background-color'),
          liBeforeBorderRadius: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('border-radius'),
          liBeforePaddingTop: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-top'),
          liBeforePaddingRight: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-right'),
          liBeforePaddingBottom: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-bottom'),
          liBeforePaddingLeft: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-left'),
          liBeforeColor: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('color'),
          liPaddingLeft: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('padding-left'),
          liMarginBottom: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('margin-bottom'),
          liDisplay: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('display'),
          liFontWeight: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('font-weight'),
          liFontWeightSpan: window.getComputedStyle(document.querySelector("$selector > li > span")).getPropertyValue('font-weight'),
          liBorderBottomColor: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('border-bottom-color'),
          liBorderBottomStyle: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('border-bottom-style'),
          liBorderBottomWidth: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('border-bottom-width')
        };

        const testValues = [];
        testValues['olListStyle'] = "none";
        testValues['olFontStyle'] = 'Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif';
        testValues['olMaxWidth'] = "667.383px";
        testValues['olPaddingBottom'] = "48px";
        testValues['olPaddingInlineStart'] = "24px";
        testValues['olFontSize'] = "16px";
        testValues['olListStylePosition'] = "outside";
        testValues['liListStyle'] = "none";
        testValues['liBeforeContent'] = 'counter(listcounter)';
        testValues['liBeforeBackgroundColor'] = "rgb(25, 25, 25)";
        testValues['liBeforeBorderRadius'] = "800px";
        testValues['liBeforePaddingTop'] = "8px";
        testValues['liBeforePaddingRight'] = "12.8px";
        testValues['liBeforePaddingBottom'] = "8px";
        testValues['liBeforePaddingLeft'] = "12.8px";
        testValues['liBeforeColor'] = "rgb(250, 250, 250)";
        testValues['liPaddingLeft'] = "48px";
        testValues['liMarginBottom'] = "48px";
        testValues['liDisplay'] = "list-item";
        testValues['liFontWeight'] = "700";
        testValues['liFontWeightSpan'] = "400";
        testValues['liBorderBottomColor'] = "rgb(191, 191, 191)";
        testValues['liBorderBottomStyle'] = "solid";
        testValues['liBorderBottomWidth'] = "1px";

        for (const [key, value] of Object.entries(styles)) {
          if (value === testValues[key]) {
            continue;
          }
          else {
            return key;
          }
        }
        return true;
      })()
    JS;
    $result = $this->getSession()->evaluateScript($function);
    if ($result === true) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed at ' . $result);
  }

  /**
   * Check CKEditor numbered list styles.
   *
   * @Then I should see the step list styles in CKEditor are correct on :selector
   *
   * @throws Exception
   */
  public function verifyCKStepList($selector): void {
    $function = <<<JS
      (function(){
        const styles = {
          olListStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-type'),
          olFontStyle: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-family'),
          olMaxWidth: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('max-width'),
          olPaddingBottom: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-bottom'),
          olPaddingInlineStart: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('padding-inline-start'),
          olFontSize: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('font-size'),
          olListStylePosition: window.getComputedStyle(document.querySelector("$selector")).getPropertyValue('list-style-position'),
          liListStyle: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('list-style-type'),
          liBeforeContent: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('content'),
          liBeforeBackgroundColor: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('background-color'),
          liBeforeBorderRadius: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('border-radius'),
          liBeforePaddingTop: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-top'),
          liBeforePaddingRight: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-right'),
          liBeforePaddingBottom: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-bottom'),
          liBeforePaddingLeft: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('padding-left'),
          liBeforeColor: window.getComputedStyle(document.querySelector("$selector > li"), ":before").getPropertyValue('color'),
          liPaddingLeft: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('padding-left'),
          liMarginBottom: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('margin-bottom'),
          liDisplay: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('display'),
          liFontWeightBogusParagraph: window.getComputedStyle(document.querySelector("$selector > li > span.ck-list-bogus-paragraph")).getPropertyValue('font-weight'),
          liFontWeightBogusParagraphSpan: window.getComputedStyle(document.querySelector("$selector > li > span.ck-list-bogus-paragraph > span")).getPropertyValue('font-weight'),
          liBorderBottomColor: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('border-bottom-color'),
          liBorderBottomStyle: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('border-bottom-style'),
          liBorderBottomWidth: window.getComputedStyle(document.querySelector("$selector > li")).getPropertyValue('border-bottom-width')
        };
        const testValues = [];
        testValues['olListStyle'] = "none";
        testValues['olFontStyle'] = 'Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif';
        testValues['olMaxWidth'] = "667.383px";
        testValues['olPaddingBottom'] = "48px";
        testValues['olPaddingInlineStart'] = "24px";
        testValues['olFontSize'] = "16px";
        testValues['olListStylePosition'] = "outside";
        testValues['liListStyle'] = "none";
        testValues['liBeforeContent'] = 'counter(listcounter)';
        testValues['liBeforeBackgroundColor'] = "rgb(25, 25, 25)";
        testValues['liBeforeBorderRadius'] = "800px";
        testValues['liBeforePaddingTop'] = "8px";
        testValues['liBeforePaddingRight'] = "12.8px";
        testValues['liBeforePaddingBottom'] = "8px";
        testValues['liBeforePaddingLeft'] = "12.8px";
        testValues['liBeforeColor'] = "rgb(250, 250, 250)";
        testValues['liPaddingLeft'] = "48px";
        testValues['liMarginBottom'] = "48px";
        testValues['liDisplay'] = "list-item";
        testValues['liFontWeightBogusParagraph'] = "700";
        testValues['liFontWeightBogusParagraphSpan'] = "400";
        testValues['liBorderBottomColor'] = "rgb(191, 191, 191)";
        testValues['liBorderBottomStyle'] = "solid";
        testValues['liBorderBottomWidth'] = "1px";

        for (const [key, value] of Object.entries(styles)) {
          if (value === testValues[key]) {
            continue;
          }
          else {
            return key;
          }
        }
        return true;
      })()
    JS;
    $result = $this->getSession()->evaluateScript($function);
    if ($result === true) {
      return;
    }
    throw new \Exception(__METHOD__ . ' failed at ' . $result);
  }

  /**
   * Check if the Tabbed Content scroll next button should appear.
   *
   * @Then check the Tabbed Content scroll next button appears as needed for :selector
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function checkTabbedContentScrollNext(string $selector): void {
    $element = $this->getSession()->getPage()->find('css', $selector);
    if (null === $element) {
      throw new Exception("The element '$selector' is not found on the page.");
    }

    $function = <<<JS
      (function(){
        const tabbedContent = document.querySelector("$selector");
        const tabbedContentNav = tabbedContent.querySelector(".nav-tabs");
        return {
          tabbedContentWidth: tabbedContent.clientWidth,
          tabbedContentNavWidth: tabbedContentNav.scrollWidth,
          isScrollNextNeeded: tabbedContentNav.scrollWidth > tabbedContent.clientWidth
        };
      })()
JS;

    $result = $this->getSession()->evaluateScript($function);
    echo 'Tabbed Content width: ' . $result['tabbedContentWidth'] . "\n";
    echo 'Tabbed Content Navigation width: ' . $result['tabbedContentNavWidth'] . "\n";
    echo 'Scroll next needed: ' . ($result['isScrollNextNeeded'] ? 'True' : 'False');
  }

  /**
   * Check if an element is visible.
   *
   * @Then The element :selector should be visible
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function theElementShouldBeVisible(string $selector): void {
    $element = $this->getSession()->getPage()->find('css', $selector);
    if (NULL === $element) {
      throw new Exception("The element '$selector' is not found on the page.");
    }

    if (!$element->isVisible()) {
      throw new Exception("The element '$selector' is not visible on the page.");
    }
  }

  /**
   * Check if an element is not visible.
   *
   * @Then The element :selector should not be visible
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function theElementShouldNotBeVisible(string $selector): void {
    $element = $this->getSession()->getPage()->find('css', $selector);
    if (NULL === $element) {
      throw new Exception("The element '$selector' is not found on the page.");
    }

    if ($element->isVisible()) {
      throw new Exception("The element '$selector' is visible on the page.");
    }
  }

  /**
   * @Then store the position of :selector
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function storeThePositionOfSelector(string $selector): void {
    $element = $this->getSession()->getPage()->find('css', $selector);
    if (null === $element) {
      throw new Exception("The element '$selector' is not found on the page.");
    }

    $function = <<<JS
      (function() {
        const rect = document.querySelector("$selector").getBoundingClientRect();
        return {
          bottom: rect.bottom,
          height: rect.height,
          left: rect.left,
          right: rect.right,
          top: rect.top,
          width: rect.width,
          x: rect.x,
          y: rect.y,
        };
      })()
    JS;

    $result = $this->getSession()->evaluateScript($function);

    $this->elPosition = [
      'bottom' => $result['bottom'],
      'height' => $result['height'],
      'left' => $result['left'],
      'right' => $result['right'],
      'top' => $result['top'],
      'width' => $result['width'],
      'x' => $result['x'],
      'y' => $result['y'],
    ];
    echo 'Stored position: ' . json_encode($this->elPosition);
  }

  /**
   * @Then the position of :selector should be different from its stored position
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function compareThePositionOfSelector(string $selector): void {
    $element = $this->getSession()->getPage()->find('css', $selector);
    if (null === $element) {
      throw new Exception("The element '$selector' is not found on the page.");
    }

    $function = <<<JS
      (function() {
        const rect = document.querySelector("$selector").getBoundingClientRect();
        return {
          bottom: rect.bottom,
          height: rect.height,
          left: rect.left,
          right: rect.right,
          top: rect.top,
          width: rect.width,
          x: rect.x,
          y: rect.y,
        };
      })()
    JS;

    $result = $this->getSession()->evaluateScript($function);
    $newPosition = [
      'bottom' => $result['bottom'],
      'height' => $result['height'],
      'left' => $result['left'],
      'right' => $result['right'],
      'top' => $result['top'],
      'width' => $result['width'],
      'x' => $result['x'],
      'y' => $result['y'],
    ];
    echo 'New position: ' . json_encode($newPosition);

    if ($this->elPosition['left'] == $newPosition['left'] && $this->elPosition['x'] == $newPosition['x']) {
      throw new Exception("The position of '$selector' has not changed.");
    }
  }

  /**
   * @Then click :selector if exists
   *
   * @param string $selector
   *
   * @throws Exception
   */
  public function clickIfExists(string $selector): void {
    try {
      $this->iClickTheElement($selector);
    }
    catch (Exception $e) {
      echo 'Element not found: ' . $e->getMessage();
    }
  }

  private $submissionCounts = [];

  /**
   * @Then I capture the number of submissions as :key
   */
  public function iCaptureTheNumberOfSubmissionsAs($key)
  {
      $elementText = $this->getSession()->getPage()->find('css', '#edit-state > option[selected="selected"]')->getText();
      if (preg_match('/All \[(\d+)\]/', $elementText, $matches)) {
        $this->submissionCounts[$key] = (int)$matches[1];
      } else {
          throw new Exception("Could not find the submission count in the text: '$elementText'");
      }
      echo "Submission count: " . $this->submissionCounts[$key];
  }

  /**
   * @Then the number of submissions should be increased by :count
   */
  public function theNumberOfSubmissionsShouldBeIncreasedBy($count)
  {
      $initialCount = $this->submissionCounts['initial_count'];
      $finalCount = $this->submissionCounts['final_count'];
      if (($finalCount - $initialCount) != $count) {
          throw new Exception("The number of submissions did not increase by $count. Initial: $initialCount, Final: $finalCount");
      }
  }
}

