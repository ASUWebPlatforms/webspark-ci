import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('degree rfi tests', { tag: ['@webspark', '@desktop', '@pages'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    await drupal.enableModule('asu_degree_rfi');
    pageUrl = await drupal.createPage(page, 'Degree RFI');
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    console.log(page.url());
    await page.getByRole('link', { name: 'Layout' }).click();
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'RFI form component' }).click();

    //--- Begin custom test steps
    await page.waitForTimeout(3000);
    await page.getByLabel('RFI form type variation').selectOption('rfiVariant1');
    await page.getByRole('checkbox', { name: 'Run in test mode' }).check();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Save layout' }).click();

    // Verify
    // Check for the user inputs to be submitted
    await page.waitForLoadState();
    const props = await page.evaluate(() => {
      return window.drupalSettings.asu_degree_rfi.props;
    });

    await expect(props).toBeDefined();
    expect(typeof props).toBe('object');
    await expect(props.test).toBe(1);

    // Complete the form
    await page.getByLabel('Which applies to you?').selectOption('ONLINE');
    await page.getByLabel('Select your student status').selectOption('First Time Freshman');
    await page.getByLabel('Area of interest').selectOption('Business');
    await page.getByLabel('Program of interest').selectOption('UGBA-BAACCBS');
    await page.getByRole('textbox', { name: 'Email Address' }).fill('email@example.com');
    await page.getByRole('textbox', { name: 'First name' }).fill('John');
    await page.getByRole('textbox', { name: 'Last name' }).fill('Doe');
    await page.getByRole('textbox', { name: '1 (702) 123-' }).fill('+1 (555) 555-5555');
    await page.getByText('I consent', { exact: true }).click();

    // Intercept the form and verify data
    const textContent = page.getByText('{ "values": { "Campus":').textContent();
    // TOOD: Turn this into a valid JSON object, need the string to be valid format first
    const data = JSON.parse(textContent);
    console.log(data);
    // expect(typeof data.values).toBe('object');
    // console.log(data.values);
  });
});
