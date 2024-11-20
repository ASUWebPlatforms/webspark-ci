import { test, expect } from '@playwright/test';

test.describe('Video hero tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await page.goto('/video-hero');
  });

  test('video hero loads', async ({ page }) => {
    await expect(page.locator('.uds-video-hero')).toBeVisible();
    await expect(page.locator('#media-video')).toBeVisible();
    await expect(page.getByLabel('Pause')).toBeVisible();
    await expect(page.getByText('Nulla a orci eu leo rutrum')).toBeVisible();
  });

  test('video hero plays', async ({ page }) => {
    await page.waitForTimeout(2000);
    const currentTime = await page.locator('#media-video').evaluate((video) => video.currentTime);
    expect(currentTime).toBeGreaterThan(0);
  });

  test('video hero can be paused', async ({ page }) => {
    const video = page.locator('#media-video');

    // Pause video
    await page.getByLabel('Pause').click();
    const isPaused = await video.evaluate((video) => video.paused);
    expect(isPaused).toBeTruthy();

    // Play video
    await expect(page.getByRole('button', { name: 'Play hero video' })).toBeVisible();
    await page.getByRole('button', { name: 'Play hero video' }).click();
    const isPlaying = await video.evaluate((video) => !video.paused);
    expect(isPlaying).toBeTruthy();
  });
});
