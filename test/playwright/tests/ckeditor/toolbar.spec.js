import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

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

test.describe('ckeditor toolbar tests', { tag: ['@webspark', '@desktop'] }, () => {
  test('verify', async ({ page }) => {
    await drupal.loginAsAdmin(page);
    await page.goto('/node/add/page');
    for (const i of buttons) {
      await expect(page.getByLabel(i, { exact: true })).toBeVisible();
    }
    await expect(page.getByLabel('Highlight', { exact: true }).nth(1)).toBeVisible();
  });
});
