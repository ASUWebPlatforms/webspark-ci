import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Divider';
const MACHINE_NAME = 'divider';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.visitLayoutBuilder(page);
    await drupal.removeElement(page, '.cookie-consent-component');
  });

  test.afterAll('cleanup', async () => {
    await page.getByRole('link', { name: 'Layout' }).first().click();
    await drupal.removeBlock(page);
    await page.close();
  });

  test('create', async () => {
    await drupal.addBlock(page, BLOCK);
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.getByRole('separator')).toBeVisible();
    await expect(page.getByRole('separator')).toHaveClass('margin-width-divider');
  });

  test('edit', async () => {
    await drupal.visitLayoutBuilderForNode(page);
    await page.getByLabel('Required Divider type').selectOption('copy');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.getByRole('separator')).toBeVisible();
    await expect(page.getByRole('separator')).toHaveClass('copy-divider');
  });
});
