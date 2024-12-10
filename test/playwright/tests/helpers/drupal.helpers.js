import { expect } from '@playwright/test';

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
   * Return to the Layout Builder page.
   *
   * @param page
   * @returns {Promise<void>}
   */
  async visitLayoutBuilderForNode(page) {
    await page.getByRole('link', { name: 'Layout' }).first().click();
    await page.getByLabel('First region in Top').getByRole('button', { name: 'Open configuration options' }).click({ force: true });
    await page.getByRole('link', { name: 'Configure', exact: true }).click();
  }

  /**
   * Close the cookie consent banner if it is visible.
   *
   * @param page
   * @param selector
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
   * Add a new block to a page.
   *
   * @param page
   * @param name
   * @returns {Promise<void>}
   */
  async addBlock(page, name) {
    await page.getByRole('link', { name: 'Add block in Top, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: name, exact: true }).click();
    await page.getByLabel('Required Block admin title').click();
    await page.getByLabel('Required Block admin title').fill(name);
  }

  /**
   * Remove a block from the layout.
   *
   * @param page
   * @returns {Promise<void>}
   */
  async removeBlock(page) {
    await page.getByLabel('First region in Top').getByRole('button', { name: 'Open configuration options' }).click({ force: true });
    await page.getByRole('link', { name: 'Remove block' }).click({ force: true });
    await page.getByRole('button', { name: 'Remove' }).click({ force: true });
    // todo: this click doesn't seem to actually save the changes
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });
  }

  /**
   * Test the Appearance settings.
   * Note that this method will update and save the layout.
   *
   * @param page
   * @param title
   * @returns {Promise<void>}
   */
  async checkAppearanceSettings(page, title) {
    await page.getByRole('button', { name: 'Appearance Settings' }).click();
    await page.getByLabel('Anchor menu title').click();
    await page.getByLabel('Anchor menu title').fill(title);
    await page.getByLabel('Spacing top').selectOption('spacing-top-8');
    await page.getByLabel('Spacing bottom').selectOption('spacing-bottom-8');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.locator(`.spacing-top-8.spacing-bottom-8.block-inline-block${title}`)).toHaveCount(1);
    await expect(page.locator('.webspark-anchor-link-data')).toHaveAttribute('data-title', title);
  }
}

export default new DrupalHelpers();
