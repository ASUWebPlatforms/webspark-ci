import { test, expect } from '@playwright/test';
import { BasicPage } from '../models/BasicPage.js';

let node;
const USERNAME = process.env.DRUPAL_USER;

test.beforeEach(async ({ page }) => {
  await page.goto('/admin');
});

test('add page', async ({ page }) => {
  node = new BasicPage(page);
  await node.addPage('Sample Page');
});

// test('log out', async ({ page }) => {
//   await page.getByRole('button', { name: USERNAME }).click();
//   await page.getByRole('link', { name: 'Log out' }).click();
//   await expect(page.getByTestId('title').getByRole('link', { name: 'Webspark CI' })).toBeVisible();
// });
