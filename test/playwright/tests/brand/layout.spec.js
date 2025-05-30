import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('layout tests', { tag: ['@webspark', '@desktop', '@brand'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, 'Layout');
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
    const section = page.getByRole('link', { name: 'Add section at start of layout' });
    const addSection = page.getByRole('button', { name: 'Add section' });
    const block = page.getByLabel('Choose a block').getByRole('link', { name: 'Title' });
    const addBlock = page.getByRole('button', { name: 'Add block' });
    await page.waitForTimeout(2000);

    await section.click();
    await page.getByRole('link', { name: 'One Column full-width section' }).click();
    await page.getByLabel('Style').selectOption({ label: 'Gray 1 Background' });
    await page.getByLabel('Required Background position').selectOption({ label: 'Bottom' });
    await page.getByLabel('Required Background fill').selectOption({ label: '75%' });
    await addSection.click();

    await section.click();
    await page.getByRole('link', { name: 'One Column fixed-width' }).click();
    await addSection.click();

    await section.click();
    await page.getByRole('link', { name: 'Two column bootstrap Two' }).click();
    await page.getByLabel('Required Flex direction').selectOption({ label: 'Reverse' });
    await addSection.click();

    await section.click();
    await page.getByRole('link', { name: 'Three Column fixed-width' }).click();
    await addSection.click();

    await section.click();
    await page.getByRole('link', { name: 'Four Column fixed-width' }).click();
    await addSection.click();

    // Add content
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 5, First region' }).click();
    await block.click();
    await addBlock.click();

    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 4, First region' }).click();
    await block.click();
    await addBlock.click();

    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 3, First region' }).click();
    await block.click();
    await addBlock.click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 3, Second region' }).click();
    await block.click();
    await addBlock.click();

    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 2, First region' }).click();
    await block.click();
    await addBlock.click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 2, Second region' }).click();
    await block.click();
    await addBlock.click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 2, Third region' }).click();
    await block.click();
    await addBlock.click();

    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 1, First region' }).click();
    await block.click();
    await addBlock.click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 1, Second region' }).click();
    await block.click();
    await addBlock.click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 1, Third region' }).click();
    await block.click();
    await addBlock.click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add block in Section 1, Fourth region' }).click();
    await block.click();
    await addBlock.click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    // This highlights just how odd our layout markup is, really not good or consistent at all
    const layout5 = page.locator('.uds-full-width > .bg');
    const layout4 = page.locator('.layout__fixed-width > .bg-top');
    const layout3 = page.locator('.uds-flex-order-reversed .col-md-6');
    const layout2 = page.locator('.bg-top.bg-percent-100.max-size-container.center-container.clearfix.bg-white .col-md-4');
    const layout1 = page.locator('.bg-top.bg-percent-100.max-size-container.center-container.clearfix.bg-white .col-md-3');

    await expect(layout5).toHaveClass('bg gray-1-bg bg-bottom bg-percent-75 layout__full-width');
    await expect(layout4).toHaveClass('bg-top bg-percent-100 max-size-container center-container bg-white');
    await expect(layout3).toHaveCount(2);
    await expect(layout2).toHaveCount(3);
    await expect(layout1).toHaveCount(4);
  });
});
