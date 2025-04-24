import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Donut Chart';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@blocks'] }, () => {
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
    await page.getByRole('spinbutton', { name: 'Required Number' }).fill('85');
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    await page.getByRole('textbox', { name: 'Text' }).fill('Block content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const ring = page.locator('#uds-donut');
    const number = page.locator('#percentage-display');
    const content = page.locator('#percentage-display + span');
    const container = page.locator('.uds-charts-and-graphs-overlay');

    await expect(container).toHaveClass(/text-white/);
    await expect(ring).toBeVisible();
    await expect(ring).toHaveCSS('height', '350px');
    await expect(number).toContainText('85%');
    await expect(content).toContainText('Block content');
  });
});
