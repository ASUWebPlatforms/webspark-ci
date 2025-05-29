import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('degree detail page tests', { tag: ['@webspark', '@desktop', '@pages'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  // Not creating a page, but need to verify the auto generated page
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

  // Only need to add the fields not auto populated on page creation
  test('create', async () => {
    await page.goto('/node/add/degree_detail_page');
    await page.getByRole('textbox', { name: 'Title *', exact: true }).fill('Playwright Degree Detail');

    //--- Begin custom test steps
    await page.getByRole('textbox', { name: 'Academic plan code' }).fill('ASACOCBS');
    // add media for hero
    await page.getByRole('combobox', { name: 'Hero size' }).selectOption({ label: 'small' });
    await page.getByRole('textbox', { name: 'Hero title' }).fill('Degree title');
    await page.getByRole('combobox', { name: 'Hero title highlight_color' }).selectOption({ label: 'gold' });
    await page.getByRole('textbox', { name: 'URL' }).first().fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).first().fill('Degree breadcrumb');
    // add media for intro image
    await page.getByLabel('Rich Text Editor').getByRole('textbox').first().fill('Degree content');
    await page.getByRole('textbox', { name: 'URL' }).nth(1).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).nth(1).fill('Degree department link');
    await page.getByRole('textbox', { name: 'URL' }).nth(2).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).nth(2).fill('Degree location link');
    await page.getByRole('textbox', { name: 'First requirement math course' }).fill('Algebra');
    await page.getByRole('textbox', { name: 'Math intensity' }).fill('5');
    await page.getByRole('textbox', { name: 'Time commitment' }).fill('5');
    // add media for outlook
    // add media for global opportunity
    // add card for next steps
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Degree choose ASU');
    // add card why choose top
    // add card why choose bottom
    // add media online
    await page.getByRole('textbox', { name: 'Program department URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Program department email link' }).fill('mailto:sparky@example.com');
    await page.getByRole('checkbox', { name: 'Affording college', exact: true }).setChecked(true);
    await page.getByRole('textbox', { name: 'URL' }).nth(3).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).nth(3).fill('Degree additional anchor');
    await page.getByRole('checkbox', { name: 'Hide required courses' }).setChecked(true);
    //--- End custom test steps

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
      return window.drupalSettings.asu_degree_rfi.degree_detail_page;
    });

    await expect(props).toBeDefined();
    expect(typeof props).toBe('object');
  });
});
