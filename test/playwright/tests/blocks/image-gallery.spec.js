import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Image Gallery';

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
    await page.getByRole('textbox', { name: 'Title' }).nth(0).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(0).fill('Block content');
    await drupal.addMediaField(page);
    await page.getByRole('button', { name: 'Add Gallery Image' }).click();

    await page.getByRole('textbox', { name: 'Title' }).nth(1).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Block content');
    await drupal.addMediaField(page, 1);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const slide = page.locator('.glide__slide');
    const image = page.getByRole('img', { name: 'sample image' });
    const content = page.getByText('Block content');
    const prev = page.getByRole('button', { name: 'Previous slide' });
    const next = page.getByRole('button', { name: 'Next slide' });
    const pager = page.getByRole('option', { name: 'Slide view 1' });

    await expect(slide.nth(0)).toBeVisible();
    await expect(image.nth(0)).toBeVisible();
    await expect(content.nth(0)).toBeVisible();

    await expect(slide).toHaveCount(2);
    await expect(slide.nth(0)).toHaveClass(/glide__slide--active/);
    await expect(slide.nth(1)).not.toHaveClass(/glide__slide--active/);

    await expect(prev).toBeDisabled();
    await next.click();
    await page.waitForTimeout(300);

    await expect(next).toBeDisabled();
    await expect(slide.nth(0)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(1)).toHaveClass(/glide__slide--active/);

    await pager.click();
    await page.waitForTimeout(300);

    await expect(pager).toHaveClass(/glide__bullet--active/);
    await expect(slide.nth(1)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(0)).toHaveClass(/glide__slide--active/);
  });
});
