import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = '';

/**
 * The overall test suite.
 * Include the proper tags for ease of filtering.
 *
 * @type {import('@playwright/test').TestCase}
 */
test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@blocks', '@example'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  /**
   * Runs before all tests in the suite.
   * Use this to set up the environment as a whole.
   */
  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    pageUrl = await drupal.createPage(page, BLOCK);
  });

  /**
   * Runs before each individual test in the suite.
   * Use this for repeating setup steps for each test.
   */
  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  /**
   * Runs after all tests in the suite have been completed.
   * Use this to clean up the environment as a whole.
   */
  test.afterAll('cleanup', async () => {
    await page.close();
  });

  /**
   * Create the block to be tested.
   */
  test('create', async () => {
    await page.getByRole('link', { name: 'Layout' }).click();
    await drupal.addBlock(page, BLOCK);

    //--- Begin custom test steps
    // ...
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  /**
   * Verify that the block is displayed correctly.
   */
  test('verify', async () => {
    // ...
  });

  /**
   * Verify that the block meets accessibility standards.
   */
  test('verify (a11y)', async () => {
    // ...
  });

  /**
   * Verify that the block meets Data Layer standards.
   */
  test('verify (data layer)', async () => {
    // ...
  });
});
