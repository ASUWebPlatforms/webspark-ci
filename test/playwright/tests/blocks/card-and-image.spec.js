import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Card and Image';
const MACHINE_NAME = 'card-and-image';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.visitLayoutBuilder(page);
    await drupal.removeElement(page, '.cookie-consent-component');
  });

  test.afterAll('cleanup', async () => {
    await page.getByRole('link', { name: 'Layout' }).first().click();
    await drupal.removeBlock(page);
    await page.close();
  });

  test('create', async () => {
    await drupal.addBlock(page, BLOCK);
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Heading' }).click();
    await page.getByRole('textbox', { name: 'Heading' }).fill('Card and Image heading');
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').click();
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').fill('Card and Image content');
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.getByText('Card and Image heading')).toBeVisible();
    await expect(page.getByText('Card and Image content')).toBeVisible();
    await expect(page.locator('.uds-card-and-image')).toHaveCSS('background-image', /Hero-DreamscapeLearn-2022.jpeg/);
  });

  test('edit', async () => {
    await drupal.visitLayoutBuilderForNode(page);
    await page.getByLabel('Parallax').check();
    await page.getByRole('button', { name: 'Add CTA' }).click();
    await page.getByLabel('URL').click();
    await page.getByLabel('URL').fill('https://asu.edu');
    await page.getByLabel('Link text').click();
    await page.getByLabel('Link text').fill('CTA');
    await page.locator('.fip-icon-down-dir').first().click();
    await page.locator('.field--widget-fontawesome-iconpicker-widget').getByTitle('Arizona,ASUAwesome,D_arizona').first().click();
    await page.getByLabel('Required Content Position').selectOption('right');
    await drupal.addAppearanceSettings(page, MACHINE_NAME);

    // after the redirect to /basic-page
    await expect(page.locator('.uds-card-and-image')).toHaveClass(/parallax-container-content/);
    await expect(page.locator('.uds-card-and-image')).toHaveClass(/uds-card-and-image-right/);
    await expect(page.locator('.parallax-container > img')).toBeVisible();
    await expect(page.getByTestId('card-button').getByRole('link', { name: 'CTA' })).toBeVisible();
    await expect(page.getByTestId('card-button').getByRole('link', { name: 'CTA' })).toHaveAttribute('href', 'https://asu.edu');
    // be more specific, check for the icon I chose
    await expect(page.getByTestId('card-icon')).toBeVisible();

    // Get the image inside container
    const parallaxImage = page.locator('.parallax-container > img');
    const initialPosition = await parallaxImage.evaluate((img) => {
      return img.style.top;
    });

    // Scroll the page and verify position changes
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight / 2);
    });

    // Wait for animation frame
    await page.waitForTimeout(100);

    // Get new position
    const scrolledPosition = await parallaxImage.evaluate((img) => {
      return img.style.top;
    });

    // Verify position changed
    expect(initialPosition).not.toEqual(scrolledPosition);
  });
});
