import { findSourceMap } from 'module';

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

  /**
   * Close the cookie consent banner if it is visible.
   *
   * @param page
   * @returns {Promise<*>}
   */
  async removeElement(page, selector) {
    const el = page.locator(selector);
    const counts = await el.count();
    if (counts > 0) {
      await el.evaluate(el => el.remove());
    } else {
      console.log(`Element "${selector}" not found in the DOM.`);
    }
  }

  /**
   * Remove a block from the layout.
   *
   * @param page
   */
  async removeBlock(page) {
    await page.getByLabel('First region in Top').getByRole('button', { name: 'Open configuration options' }).click({ force: true });
    await page.getByRole('link', { name: 'Remove block' }).click();
    await page.getByRole('button', { name: 'Remove' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });
  }
}

export default new DrupalHelpers();
