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
   * Toggle the cookie consent banner and universal GTM.
   *
   * @param enabled int 0|1
   * @returns {Promise<*>}
   */
  async toggleUniversalGTM(enabled = 0) {
    // Make sure the cookie consent stays off
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled 0');
    this.drush(`config:set asu_brand.settings asu_brand.asu_brand_gtm_enabled ${enabled}`);
    this.drush('cr');
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
    const btn = page.getByRole('button', { name: 'Ok, I agree' });

    if (await btn.isVisible()) {
      await btn.click();
    }
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
    await page.waitForTimeout(2000);
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

  /**
   * General test for carousel functionality.
   *
   * @param page
   * @param {Object} options - Optional parameters for carousel testing
   * @param {int} options.count - The number of slides in the carousel (default: 3)
   * @param {int} options.pages - The number of paginated pages in the carousel (default: 3)
   * @param {string} options.role - The ARIA role for the pagination buttons (default: 'button')
   * @returns {Promise<void>}
   */
  async testCarousel(page, options = {}) {
    const count = options.count ?? 3;
    const pages = options.pages ?? 3;
    const role = options.role ?? 'button';

    const slide = page.locator('.glide__slide');
    const pager = page.getByRole(role, { name: `Slide view ${pages}` });
    const prev = page.getByRole('button', { name: 'Previous slide' });
    const next = page.getByRole('button', { name: 'Next slide' });

    await expect(slide).toHaveCount(count);
    await expect(slide.nth(0)).toBeVisible();

    await expect(slide.nth(0)).toHaveClass(/glide__slide--active/);
    await expect(slide.nth(1)).not.toHaveClass(/glide__slide--active/);

    await expect(prev).toBeDisabled();
    await next.click();
    await page.waitForTimeout(300);

    await expect(slide.nth(0)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(1)).toHaveClass(/glide__slide--active/);

    await pager.click();
    await page.waitForTimeout(300);

    await expect(pager).toHaveClass(/glide__bullet--active/);
    await expect(slide.nth(1)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(2)).toHaveClass(/glide__slide--active/);

    await expect(next).toBeDisabled();
    await prev.click();
    await page.waitForTimeout(300);

    await expect(slide.nth(2)).not.toHaveClass(/glide__slide--active/);
  }

  /**
   * General test for search pages.
   *
   * @param {*} page
   */
  async testSearch(page) {
    const search = page.getByPlaceholder('Search asu.edu');

    await search.fill('test');
    await search.press('Enter');
    await expect(page.getByRole('heading', { name: 'Search' }).locator('span')).toBeVisible();
    await expect(search).toHaveValue('test');
  }
}

export default new DrupalHelpers();
