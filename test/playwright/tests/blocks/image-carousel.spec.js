import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Image Carousel';

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
    // TODO: This one block appears different, need to fix that
    await page.getByRole('textbox', { name: 'Title' }).nth(0).fill(BLOCK);

    //--- Begin custom test steps
    // TODO: See if I can simplify all the [data-drupal-selector^="foo"] selectors with just the nth(n) equivalents for all tests
    await page.getByRole('textbox', { name: 'Title' }).nth(1).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(0).fill('Block content');
    await drupal.addMediaField(page);
    await page.getByRole('button', { name: 'Add Gallery Image' }).click();

    await page.getByRole('textbox', { name: 'Title' }).nth(2).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Block content');
    await drupal.addMediaField(page, 1);
    await page.getByRole('button', { name: 'Add Gallery Image' }).click();

    await page.getByRole('textbox', { name: 'Title' }).nth(3).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(2).fill('Block content');
    await drupal.addMediaField(page, 2);
    await page.getByRole('button', { name: 'Add Gallery Image' }).click();

    await page.getByRole('textbox', { name: 'Title' }).nth(4).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(3).fill('Block content');
    await drupal.addMediaField(page, 3);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const slide = page.locator('.glide__slide');
    const image = page.getByRole('img', { name: 'sample image' });
    const title = page.getByText('Block title', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const pager = page.getByRole('button', { name: 'Slide view 3' });
    const prev = page.getByRole('button', { name: 'Previous slide' });
    const next = page.getByRole('button', { name: 'Next slide' })

    await expect(slide.nth(0)).toBeVisible();
    await expect(image.nth(0)).toBeVisible();
    await expect(title.nth(0)).toBeVisible();
    await expect(content.nth(0)).toBeVisible();

    await expect(slide).toHaveCount(4);
    await expect(slide.nth(0)).toHaveClass(/glide__slide--active/);
    await expect(slide.nth(1)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(2)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(3)).not.toHaveClass(/glide__slide--active/);

    await expect(prev).toBeDisabled();
    await next.click();
    await page.waitForTimeout(300);

    await expect(slide.nth(0)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(1)).toHaveClass(/glide__slide--active/);

    await pager.click();
    await page.waitForTimeout(300);

    await expect(slide.nth(1)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(2)).toHaveClass(/glide__slide--active/);

    await expect(next).toBeDisabled();
    await prev.click();
    await page.waitForTimeout(300);

    await expect(slide.nth(2)).not.toHaveClass(/glide__slide--active/);
  });
});
