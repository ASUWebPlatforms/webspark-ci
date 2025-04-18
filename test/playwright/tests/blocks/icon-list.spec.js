import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Icon List';

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
    await page.locator('[data-fip-origin^="edit-settings-block-form-field-list-item-0-subform-field-icon-0-icon-name"] .fip-icon-down-dir').click();
    await page.locator('[data-fip-origin^="edit-settings-block-form-field-list-item-0-subform-field-icon-0-icon-name"]').getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    // Kind of odd selector for this list item
    const item = page.getByText('Block content');
    const icon = page.getByRole('listitem').filter({ hasText: 'Block content' }).locator('svg');

    await expect(item).toBeVisible();
    await expect(icon).toBeVisible();
  });
});
