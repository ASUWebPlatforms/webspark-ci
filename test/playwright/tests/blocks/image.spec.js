import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Image';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleCookieConsent();
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
    await page.getByRole('combobox', { name: 'Required Image Size' }).selectOption({ label: '50%' });
    await page.getByRole('checkbox', { name: 'Center image' }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Add Drop Shadow' }).setChecked(true);
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Image Caption' }).fill('Block caption');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-img');
    const blockParent = page.locator('.block > .center-container').filter({ has: block });
    const image = page.getByRole('img', { name: 'sample image' });
    const caption = page.getByText('Block caption', { exact: true });

    await expect(blockParent).toHaveCSS('max-width', '50%');
    await expect(block).toHaveClass(/uds-img-drop-shadow/);
    await expect(image).toBeVisible();
    await expect(caption).toBeVisible();
  });
});
