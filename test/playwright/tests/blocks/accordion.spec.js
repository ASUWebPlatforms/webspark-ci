import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Accordion';

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
    await page.getByRole('combobox', { name: 'Required Color Options' }).selectOption({ label: 'Maroon' });
    await page.locator('.fip-icon-down-dir').first().click();
    await page.getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    await page.getByRole('textbox', { name: 'Heading' }).fill('Block heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    await page.getByRole('checkbox', { name: 'Initially Expanded' }).setChecked(true);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const heading = page.getByRole('button', { name: 'Block heading' });
    const content = page.getByText('Block content', { exact: true });

    await expect(page.locator('.accordion-item.accordion-item-maroon')).toBeVisible();
    await expect(page.locator('.accordion-header.accordion-header-icon')).toBeVisible();
    await expect(heading).toBeVisible();
    await expect(content).toBeVisible();
    await heading.click();
    await expect(content).toBeHidden();
  });
});
