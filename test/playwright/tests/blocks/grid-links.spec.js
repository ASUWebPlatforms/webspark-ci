import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Grid Links';
const MACHINE_NAME = 'grid-links';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleCookieConsent();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, BLOCK);
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    await page.getByRole('link', { name: 'Layout' }).click();
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: BLOCK, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);

    //--- Begin custom test steps
    await page.getByRole('combobox', { name: 'Required Display' }).selectOption({ label: 'Three Columns' });
    await page.getByRole('combobox', { name: 'Required Links Text Color' }).selectOption({ label: 'Gold Links' });

    await page.getByRole('textbox', { name: 'URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).fill('Block CTA');
    await page.locator('.fip-icon-down-dir').first().click();
    await page.getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    await page.getByRole('button', { name: 'Add CTA' }).click();

    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-links-1-subform-field-cta-link-0-uri"]').fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-links-1-subform-field-cta-link-0-title"]').fill('Block CTA');
    await page.locator('[data-fip-origin^="edit-settings-block-form-field-links-1-subform-field-icon-0-icon-name"] .fip-icon-down-dir').click();
    await page.locator('[data-fip-origin^="edit-settings-block-form-field-links-1-subform-field-icon-0-icon-name"]').getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    await page.getByRole('button', { name: 'Add CTA' }).click();

    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-links-2-subform-field-cta-link-0-uri"]').fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-links-2-subform-field-cta-link-0-title"]').fill('Block CTA');
    await page.locator('[data-fip-origin^="edit-settings-block-form-field-links-2-subform-field-icon-0-icon-name"] .fip-icon-down-dir').click();
    await page.locator('[data-fip-origin^="edit-settings-block-form-field-links-2-subform-field-icon-0-icon-name"]').getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-grid-links');
    const link = page.getByRole('link', { name: 'Block CTA' });
    const icon = page.locator('.uds-grid-links-icon');

    await expect(block).toHaveClass(/three-columns/);
    await expect(block).toHaveClass(/text-gold/);
    await expect(link.nth(0)).toBeVisible();
    await expect(icon.nth(0)).toBeVisible();
    await expect(link.nth(1)).toBeVisible();
    await expect(icon.nth(1)).toBeVisible();
    await expect(link.nth(2)).toBeVisible();
    await expect(icon.nth(2)).toBeVisible();
  });
});
