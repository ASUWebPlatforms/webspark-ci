const { execSync } = require('child_process');

/**
 * Collection of Drupal helpers for Playwright tests.
 */
class DrupalHelpers {
  constructor() {
    /**
     * Run a Drush command.
     *
     * @param cmd
     * @returns {Buffer}
     */
    this.drush = cmd => execSync(`drush ${cmd}`);
  }

  /**
   * Login as administrator.
   *
   * @param page
   * @returns {Promise<*>}
   */
  async loginAsAdmin(page) {
    const url = this.drush('uli');
    return await page.goto(url.toString());
  }

  /**
   * Close the cookie consent banner if it is visible.
   *
   * @param page
   * @returns {Promise<*>}
   */
  // todo: find a good way to get rid of this at all times
  async closeCookieConsent(page) {
    const count = await page.getByLabel('Close cookie consent').count();
    console.log(count);
    if (count > 0) {
      return await page.getByLabel('Close cookie consent').click();
    }
    return;
  }

  /**
   * Visit the Layout Builder for the Basic Page.
   *
   * @param page
   * @returns {Promise<*>}
   */
  async visitLayoutBuilder(page) {
    await this.loginAsAdmin(page);
    return await page.goto('/node/35/layout');
  }
}

export default new DrupalHelpers();
