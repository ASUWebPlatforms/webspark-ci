import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Step List';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
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
    await drupal.addBlock(page, BLOCK);

    //--- Begin custom test steps
    await page.getByRole('combobox', { name: 'Required Accent Color' }).selectOption({ label: 'Maroon' });
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-list-item-0-subform-field-heading-0-value"]').fill('Block heading');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-list-item-0-subform-field-body-0-value"]').fill('Block content');
    await page.getByRole('button', { name: 'Add Step List Item' }).click();
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-list-item-1-subform-field-heading-0-value"]').fill('Block heading');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-list-item-1-subform-field-body-0-value"]').fill('Block content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-steplist');
    // Kind of odd selector for this list item
    const item = page.getByText('Block heading Block content');
    const content = await page.evaluate(() => {
      const style = window.getComputedStyle(document.querySelector('.uds-steplist > li:first-child'), '::before');
      return style.getPropertyValue('content');
    });

    await expect(block).toHaveClass(/uds-steplist-maroon/);
    await expect(item.first()).toBeVisible();
    // As long as it is a list counter we trust CSS to increment it
    expect(content).toBe('counter(listcounter)');
    await expect(item.last()).toBeVisible();
  });
});
