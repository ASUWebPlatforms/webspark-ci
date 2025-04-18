import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Testimonial Carousel';

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
    const add = page.getByRole('button', { name: 'Add Testimonial' });

    await page.getByRole('textbox', { name: 'Heading' }).nth(0).fill('Block heading');
    await page.getByRole('textbox', { name: 'Required Formatted Text' }).nth(0).fill('Block content');
    await drupal.addMediaField(page, 0);
    await page.getByRole('textbox', { name: 'Citation author' }).nth(0).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).nth(0).fill('Block title');
    await add.click();

    await page.getByRole('textbox', { name: 'Heading' }).nth(1).fill('Block heading');
    await page.getByRole('textbox', { name: 'Required Formatted Text' }).nth(1).fill('Block content');
    await drupal.addMediaField(page, 1);
    await page.getByRole('textbox', { name: 'Citation author' }).nth(1).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).nth(1).fill('Block title');
    await add.click();

    await page.getByRole('textbox', { name: 'Heading' }).nth(2).fill('Block heading');
    await page.getByRole('textbox', { name: 'Required Formatted Text' }).nth(2).fill('Block content');
    await drupal.addMediaField(page, 2);
    await page.getByRole('textbox', { name: 'Citation author' }).nth(2).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).nth(2).fill('Block title');

    await page.getByRole('combobox', { name: 'Accent Color' }).selectOption({ label: 'Maroon' });
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    await page.getByRole('combobox', { name: 'Heading Highlight' }).selectOption({ label: 'Gold' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-testimonial');
    const image = page.getByRole('img', { name: 'sample image' });
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const author = page.getByText('Block author', { exact: true });
    const title = page.getByText('Block title', { exact: true });

    await expect(image.nth(0)).toBeVisible();
    await expect(heading.nth(0)).toBeVisible();
    await expect(content.nth(0)).toBeVisible();
    await expect(author.nth(0)).toBeVisible();
    await expect(title.nth(0)).toBeVisible();

    await expect(block.nth(0)).toHaveClass(/text-white/);
    await expect(block.nth(0)).toHaveClass(/accent-maroon/);
    await expect(heading.nth(0)).toHaveClass('highlight-gold');

    await drupal.testCarousel(page);
  });
});
