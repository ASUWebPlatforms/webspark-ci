import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('article tests', { tag: ['@webspark', '@desktop', '@pages'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createArticle(page, 'Article');
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('verify', async () => {
    const el = page.locator('.uds-story-hero');
    const image = page.getByRole('img', { name: 'sample image' });
    const title = page.getByRole('heading', { name: 'Article' });
    const lead = page.getByText('Replace or delete this "lead');
    const author = page.getByText('Author', { exact: true });
    const date = page.getByRole('time');
    const content = page.getByText('Article content');

    await expect(el).toHaveClass(/uds-story-hero-lg/);
    await expect(image).toBeVisible();
    await expect(title).toBeVisible();
    await expect(lead).toBeVisible();
    await expect(author).toBeVisible();
    await expect(date).toBeVisible();
    await expect(content).toBeVisible();
  });
});
