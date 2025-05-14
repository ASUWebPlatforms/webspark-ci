import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('degree page tests', { tag: ['@webspark', '@desktop', '@pages'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    await drupal.enableModule('asu_degree_rfi');
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    await page.goto('/node/add/degree_detail_page');
    await page.getByRole('textbox', { name: 'Title *' }).fill('Playwright Degree Page');
    // ... add all the content
    await page.getByRole('button', { name: 'Save' }).click();
    pageUrl = page.url();
  });

  // TODO: After meeting with David and Scott,
  // I can also just do this for the Header and Footer
  // or any other React based component
  test('verify', async () => {
    await page.goto(pageUrl);
    await page.waitForLoadState();
    const props = await page.evaluate(() => {
      return window.drupalSettings.asu_degree_rfi.degree_listing_page;
    });
    console.log(props);

    expect(props).toBeDefined();
    expect(typeof props).toBe('object');
    expect(props).toHaveProperty('hero');
    // ... continue for all the expected props

    // If I need to check the expected value for the props
    expect(props.degreesPerPage).toBe(5);
  });
});
