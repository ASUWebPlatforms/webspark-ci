import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Testimonial On Image Background';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
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
    await page.getByRole('combobox', { name: 'Accent Color' }).selectOption({ label: 'Maroon' });
    await page.getByRole('combobox', { name: 'Heading Highlight' }).selectOption({ label: 'Gold' });
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Heading' }).fill('Block heading');
    await page.getByRole('textbox', { name: 'Required Formatted Text' }).fill('Block content');
    await drupal.addMediaField(page, 1);
    await page.getByRole('textbox', { name: 'Citation author' }).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).fill('Block title');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const div = page.locator('.uds-quote-image-background');
    const block = page.locator('.uds-testimonial');
    const image = page.getByRole('img', { name: 'sample image' });
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const author = page.getByText('Block author', { exact: true });
    const title = page.getByText('Block title', { exact: true });

    await expect(div).toHaveCSS('background-image', /.*sample.*/);
    await expect(block).toHaveClass(/text-white/);
    await expect(block).toHaveClass(/accent-maroon/);
    await expect(image).toBeVisible();
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass('highlight-gold');
    await expect(content).toBeVisible();
    await expect(author).toBeVisible();
    await expect(title).toBeVisible();
  });
});
