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
    await page.getByRole('textbox', { name: 'Heading' }).nth(0).fill('Block heading');
    await page.getByRole('textbox', { name: 'Required Formatted Text' }).nth(0).fill('Block content');
    await drupal.addMediaField(page, 0);
    await page.getByRole('textbox', { name: 'Citation author' }).nth(0).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).nth(0).fill('Block title');
    await page.getByRole('button', { name: 'Add Testimonial' }).click();

    await page.getByRole('textbox', { name: 'Heading' }).nth(1).fill('Block heading');
    await page.getByRole('textbox', { name: 'Required Formatted Text' }).nth(1).fill('Block content');
    await drupal.addMediaField(page, 1);
    await page.getByRole('textbox', { name: 'Citation author' }).nth(1).fill('Block author');
    await page.getByRole('textbox', { name: 'Citation Title' }).nth(1).fill('Block title');
    await page.getByRole('button', { name: 'Add Testimonial' }).click();

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
    const slide = page.locator('.glide__slide');
    const image = page.getByRole('img', { name: 'sample image' });
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const author = page.getByText('Block author', { exact: true });
    const title = page.getByText('Block title', { exact: true });
    const pager = page.getByRole('button', { name: 'Slide view 3' });
    const prev = page.getByRole('button', { name: 'Previous slide' });
    const next = page.getByRole('button', { name: 'Next slide' });

    await expect(block.nth(0)).toHaveClass(/text-white/);
    await expect(block.nth(0)).toHaveClass(/accent-maroon/);

    await expect(slide.nth(0)).toBeVisible();
    await expect(image.nth(0)).toBeVisible();
    await expect(heading.nth(0)).toBeVisible();
    await expect(heading.nth(0)).toHaveClass('highlight-gold');
    await expect(content.nth(0)).toBeVisible();
    await expect(author.nth(0)).toBeVisible();
    await expect(title.nth(0)).toBeVisible();

    // TODO: Turn this into a Drupal helper, allow the user to pass the number of slides
    await expect(slide).toHaveCount(3);
    await expect(slide.nth(0)).toHaveClass(/glide__slide--active/);
    await expect(slide.nth(1)).not.toHaveClass(/glide__slide--active/);
    await expect(slide.nth(2)).not.toHaveClass(/glide__slide--active/);

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
