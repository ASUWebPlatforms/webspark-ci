import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('breadcrumb tests', { tag: ['@webspark', '@desktop', '@brand'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, 'Breadcrumb');
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    await page.getByRole('link', { name: 'Layout' }).click();

    //--- Begin custom test steps
    await page.getByRole('link', { name: 'Add block in Content, First' }).click();
    await page.getByRole('link', { name: 'ASU Breadcrumb' }).click();
    await page.getByLabel('Select color').selectOption({ label: 'Gray 1' });
    await page.getByLabel('Spacing Top').selectOption({ label: '8px' });
    await page.getByLabel('Spacing Bottom').selectOption({ label: '8px' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const div = page.locator('.bg-gray-1.spacing-top-8.spacing-bottom-8');
    const home = page.getByLabel('breadcrumbs').getByRole('link', { name: 'Home' });
    const link = page.getByLabel('breadcrumbs').getByRole('link', { name: 'Playwright Breadcrumb' });

    await expect(div).toBeVisible();
    await expect(home).toHaveAttribute('href', '/');
    await expect(link).toHaveAttribute('href', '');
  });
});

