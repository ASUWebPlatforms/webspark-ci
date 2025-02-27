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
   * Toggle the cookie consent banner.
   *
   * @param enabled int 0|1
   * @returns {Promise<*>}
   */
  async toggleCookieConsent(enabled = 0) {
    this.drush(`config:set asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled ${enabled}`);
    this.drush(`config:set asu_brand.settings asu_brand.asu_brand_gtm_enabled ${enabled}`);
  }

  /**
   * Toggle maintenance mode.
   * @param int 0|1
   * @returns {Promise<*>}
   */
  async toggleMaintenanceMode(enabled = 1) {
    this.drush(`state:set system.maintenance_mode ${enabled} --input-format=integer`);
    this.drush('cache:rebuild');
  }

  /**
   * Accept the cookie consent banner if it is visible.
   *
   * @param page
   * @returns {Promise<*>}
   */
  async consent(page) {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ok, I agree' }).click();
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
   * Add a new page.
   *
   * @param page
   * @param name
   * @returns {Promise<void>}
   */
  async createPage(page, name) {
    await page.goto('/node/add/page');
    await page.getByRole('textbox', { name: 'Title *' }).fill(`Playwright ${name}`);
    await page.getByRole('button', { name: 'Save' }).click();
    return page.url();
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
   * Deprecate. Dont use this any longer.
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
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: name, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(name);
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
  async addAppearanceSettings(page, title) {
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

  /**
   * Add media to a block.
   *
   * @param page
   * @param n int The nth child CSS selector, starting with a 0 index
   * @param media string The name of the file to use
   * @returns {Promise<void>}
   */
  async addMediaField(page, n = 0, media = 'sample') {
    await page.getByRole('button', { name: 'Add media' }).nth(n).click();
    await page.getByRole('checkbox', { name: `Select ${media}`, exact: true }).check();
    await page.getByRole('button', { name: 'Insert selected' }).click();
    // Drupal AJAX is sometimes slow here, so manually giving it some time
    await page.waitForTimeout(1500);
  }

  /**
   * Add a CTA to a block.
   *
   * @param page
   * @param n int The nth child CSS selector, starting with a 0 index
   * @returns {Promise<void>}
   */
  async addCTAField(page, n = 0) {
    await page.getByRole('textbox', { name: 'URL' }).nth(n).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).nth(n).fill('Block CTA');
    await page.getByRole('combobox', { name: 'Select a target' }).nth(n).selectOption({ label: 'New window (_blank)' });
    await page.getByRole('combobox', { name: 'Required Style' }).nth(n).selectOption({ label: 'Maroon' });
  }

  /**
   * Add an icon to a block.
   *
   * @param page
   * @param icon
   * @returns {Promise<void>}
   */
  async addIconField(page, icon) {
  }
}

export default new DrupalHelpers();
