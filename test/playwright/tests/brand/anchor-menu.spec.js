import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('anchor menu tests', { tag: ['@webspark', '@desktop', '@brand'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, 'Achor Menu');
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
    await page.getByRole('link', { name: 'Add block in Top, First region' }).click();
    await page.getByRole('link', { name: 'Anchor Menu' }).click();
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.waitForTimeout(1000);

    await drupal.addBlock(page, 'Text Content');
    await page.getByRole('checkbox', { name: 'Display title' }).check();
    await page.getByRole('button', { name: 'Appearance Settings' }).click();
    await page.getByRole('textbox', { name: 'Anchor menu title' }).fill('Anchor menu title');
    await page.locator('.fip-icon-down-dir').first().click();
    await page.getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    await page.getByRole('button', { name: 'Additional Font Awesome' }).click();
    await page.getByLabel('Animation').selectOption({ label: 'Spin' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const heading = page.getByRole('heading', { name: 'On This Page:' });
    const link = page.getByRole('link', { name: 'Anchor menu title' });
    const icon = page.locator('#skip-to-content svg').nth(2);

    await expect(heading).toBeVisible();
    await expect(link).toBeVisible();
    await expect(icon).toHaveClass(/fa-spin/);
  });
});
