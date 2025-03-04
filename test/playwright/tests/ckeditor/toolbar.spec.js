import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Toolbar';

const buttons = [
  'Bold',
  'Italic',
  'Link',
  'Bulleted List',
  'Numbered List',
  'List Properties',
  'Insert Fontawesome Icon',
  'Upload image from computer',
  'Insert Media',
  'Paragraph, Heading',
  'Source',
  'CKEditor Responsive',
  'Button',
  'Horizontal line',
  'Divider',
  'Lead',
  'Highlighted Heading',
  'Blockquote',
  'Blockquote Animated',
  'Webspark table',
];

test.describe(`CKEditor ${PLUGIN} tests`, { tag: ['@webspark', '@desktop', '@ckeditor'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, PLUGIN);
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('verify', async () => {
    await page.getByRole('link', { name: 'Edit' }).click();

    for (const i of buttons) {
      await expect(page.getByLabel(i, { exact: true })).toBeVisible();
    }
    await expect(page.getByLabel('Highlight', { exact: true }).nth(1)).toBeVisible();
  });
});
