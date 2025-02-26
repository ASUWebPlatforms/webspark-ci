import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Blockquote';
const MACHINE_NAME = 'blockquote';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.setConfigs();
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
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: BLOCK, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);

    //--- Begin custom test steps
    await page.getByRole('combobox', { name: 'Required Accent Color' }).selectOption({ label: 'Gold' });
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    await page.getByRole('combobox', { name: 'Citation Style' }).selectOption({ label: 'Alternative' });
    await page.getByRole('textbox', { name: 'Citation author' }).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).fill('Block title');
    await page.getByRole('button', { name: 'Add block' }).click();

    // Image variant
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: BLOCK, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);
    await page.getByRole('textbox', { name: 'Heading' }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Heading Highlight' }).selectOption({ label: 'Gold' });
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    await page.getByRole('radio', { name: 'Right' }).setChecked(true);
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Citation author' }).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).fill('Block title');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-blockquote');
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const author = page.getByText('Block author', { exact: true });
    const title = page.getByText('Block title', { exact: true });

    await expect(block.first()).toHaveClass(/accent-gold/);
    await expect(block.first()).toHaveClass(/alt-citation/);
    await expect(heading.first()).toBeVisible();
    await expect(content.first()).toBeVisible();
    await expect(author.first()).toBeVisible();
    await expect(title.first()).toBeVisible();

    // Image variant
    await expect(block.last()).toHaveClass(/with-image/);
    await expect(block.last()).toHaveClass(/text-white/);
    await expect(block.last()).toHaveClass(/reversed/);
    await expect(heading.last()).toHaveClass('highlight-gold');
    await expect(page.getByRole('img', { name: 'test' })).toBeVisible();
  });
});
