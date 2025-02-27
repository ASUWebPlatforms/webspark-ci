import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Video hero';

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
    await page.getByRole('textbox', { name: 'Heading', exact: true }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Required Hero Heading Background Color' }).selectOption({ label: 'Gold background' });
    await page.getByRole('textbox', { name: 'Hero Text' }).fill('Block hero text');
    await page.getByRole('textbox', { name: 'Sub Heading' }).fill('Block sub heading');
    await page.getByRole('combobox', { name: 'Required Sub Heading Background Color' }).selectOption({ label: 'Gray 7 background' });
    await drupal.addMediaField(page);
    await drupal.addMediaField(page, 1);
    await drupal.addCTAField(page);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const subHeading = page.getByText('Block sub heading');
    const heading = page.getByText('Block heading');
    const content = page.getByText('Block hero text');
    const cta = page.getByRole('link', { name: 'Block CTA' });
    const video = page.locator('#media-video');
    const play = page.getByRole('button', { name: 'Play hero video' });
    const pause = page.getByRole('button', { name: 'Pause' });

    await expect(video).toBeVisible();
    await expect(subHeading).toBeVisible();
    await expect(subHeading).toHaveClass(/highlight-black/);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass(/highlight-gold/);
    await expect(content).toBeVisible();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveClass(/btn-maroon/);
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
    await expect(cta).toHaveAttribute('target', '_blank');

    // Ensure the video is playing
    await page.waitForTimeout(2000);
    const currentTime = await video.evaluate((video) => video.currentTime);
    expect(currentTime).toBeGreaterThan(0);

    // Pause the video
    await pause.click();
    const isPaused = await video.evaluate((video) => video.paused);
    expect(isPaused).toBeTruthy();

    // Unpause the video
    await play.click();
    const isPlaying = await video.evaluate((video) => !video.paused);
    expect(isPlaying).toBeTruthy();
  });
});
