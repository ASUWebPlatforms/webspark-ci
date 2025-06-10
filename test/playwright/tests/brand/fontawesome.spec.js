import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('fontawesome tests', { tag: ['@webspark', '@desktop', '@brand'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, 'Font Awesome');
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    await page.getByRole('link', { name: 'Layout' }).click();
    await drupal.addBlock(page, 'Accordion');

    //--- Begin custom test steps
    await page.locator('.fip-icon-down-dir').first().click();
    await page.getByTitle('A Mountain,Mountain,ASUAwesome').first().click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const icon = page.locator('.accordion-header.accordion-header-icon');

    await expect(icon).toBeVisible();
  });
});
