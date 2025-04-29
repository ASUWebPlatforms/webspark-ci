import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Carousel';

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
    await page.getByLabel('Layout', { exact: true }).selectOption({ label: '1 Column' });
    await page.getByRole('radio', { name: 'Landscape' }).check();

    // Add cards
    await page.getByRole('button', { name: 'Add Card Group Default' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Heading' }).nth(0).fill('Card 1');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(0).fill('Card 1');
    await page.getByRole('button', { name: 'Add Card' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Heading' }).nth(1).fill('Card 2');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Card 2');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    // We only want to test the carousel functionality
    const slides = page.locator('.glide__slide');
    const bullets = page.locator('.glide__bullet');
    const arrows = page.locator('.glide__arrow');
    const cards = page.locator('.card-horizontal');

    await expect(slides).toHaveCount(2);
    await expect(slides.nth(0)).toHaveClass(/glide__slide--active/);
    await expect(cards).toHaveCount(2);
    await expect(bullets).toHaveCount(2);
    await expect(bullets.nth(0)).toHaveClass(/glide__bullet--active/);
    await expect(arrows).toHaveCount(2);
    await expect(arrows.nth(0)).toHaveClass(/glide__arrow--disabled/);

    // Interactions
    await bullets.nth(1).click();
    await expect(bullets.nth(1)).toHaveClass(/glide__bullet--active/);
    await expect(bullets.nth(0)).not.toHaveClass(/glide__bullet--active/);
    await expect(slides.nth(0)).not.toHaveClass(/glide__slide--active/);
    await expect(slides.nth(1)).toHaveClass(/glide__slide--active/);
    await expect(arrows.nth(0)).not.toHaveClass(/glide__arrow--disabled/);
    await expect(arrows.nth(1)).toHaveClass(/glide__arrow--disabled/);
    await arrows.nth(0).click();
    await expect(slides.nth(0)).toHaveClass(/glide__slide--active/);
  });
});
