import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

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
  'Heading',
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

test('default ckeditor buttons load', { tag: ['@webspark', '@desktop'] }, async ({ page }) => {
  await drupal.loginAsAdmin(page);
  await page.goto('/node/add/page');
  await expect(page.getByLabel('Highlight').nth(1)).toBeVisible();
  for (const i of buttons) {
    await expect(page.getByLabel(i, { exact: true })).toBeVisible();
  }
});
