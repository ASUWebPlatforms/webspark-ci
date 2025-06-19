import { test, expect } from '@playwright/test';
import { BasicPage } from '../../models/BasicPage.js'

/** @type {import('@playwright/test').Page} */
let page, node;
const title = 'Basic Page';

test.describe(title, { tag: ['@webspark', '@pages'] }, () => {
  test.describe.configure({ mode: 'serial' });

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    node = new BasicPage(page, title);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('create', async () => {
    await node.addPage();
  });

  test('edit', async () => {
    await node.editPage();
    await node.addContent();
  });
});
