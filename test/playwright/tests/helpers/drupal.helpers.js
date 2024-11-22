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
