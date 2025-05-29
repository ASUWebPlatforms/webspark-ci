import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('degree listing page tests', { tag: ['@webspark', '@desktop', '@pages'] }, () => {
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
    await page.goto('/node/add/degree_listing_page');
    await page.getByRole('textbox', { name: 'Title *', exact: true }).fill('Playwright Degree Listing');

    //--- Begin custom test steps
    await page.getByRole('combobox', { name: 'College' }).selectOption({ label: 'Ira A. Fulton Schools of Engineering : CES' });
    await page.getByRole('combobox', { name: 'Program *' }).selectOption({ label: 'Undergraduate' });
    await page.getByRole('checkbox', { name: 'Certificates and Minors', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Show filters', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Show search', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide College/School column', exact: true }).setChecked(true);
    await page.getByRole('combobox', { name: 'Degrees per page *' }).selectOption({ label: '10' });
    await drupal.addMediaField(page, 0);
    await drupal.addMediaField(page, 1);
    await page.getByRole('combobox', { name: 'Hero size' }).selectOption({ label: 'small' });
    await page.getByRole('textbox', { name: 'Hero title', exact: true }).fill('Hero title');
    await page.getByRole('combobox', { name: 'Hero title highlight color' }).selectOption({ label: 'black' });
    await page.getByRole('textbox', { name: 'URL', exact: true }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).fill('Link text');
    await page.getByRole('combobox', { name: 'Intro type *' }).selectOption({ label: 'text-media' });
    await page.getByRole('textbox', { name: 'Intro title *', exact: true }).fill('Intro title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Intro content');
    await page.getByRole('textbox', { name: 'Apply now URL', exact: true }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Exclude from display', exact: true }).fill('BAACCBS');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Save' }).click();
    pageUrl = page.url();
  });

  // Testing against a React component so we only need to
  // esnsure the data is passed to the props
  test('verify', async () => {
    await page.goto(pageUrl);
    await page.waitForLoadState();
    const props = await page.evaluate(() => {
      return window.drupalSettings.asu_degree_rfi.degree_listing_page;
    });

    await expect(props).toBeDefined();
    expect(typeof props).toBe('object');

    await expect(props.programList.dataSource.collegeAcadOrg).toBe('CES');
    await expect(props.programList.dataSource.program).toBe('undergrad');
    await expect(props.hasFilters).toBe(true);
    await expect(props.hasSearchBar).toBe(true);
    await expect(props.programList.settings.hideCollegeSchool).toBe(true);
    await expect(props.degreesPerPage).toBe(10);
    await expect(props.programList.settings.cardDefaultImage.altText).toBe('sample image');
    await expect(props.hero.image.altText).toBe('sample image');
    await expect(props.hero.image.size).toBe('small');
    await expect(props.hero.title.highlightColor).toBe('black');
    await expect(props.hero.title.text).toBe('Hero title');
    await expect(props.introContent.breadcrumbs[0].url).toBe('https://asu.edu');
    await expect(props.introContent.breadcrumbs[0].text).toBe('Link text');
    await expect(props.introContent.contents[0].text).toContain('Intro content');
    await expect(props.introContent.title.text).toBe('Intro title');
    await expect(props.introContent.type).toBe('text-media');
    await expect(props.actionUrls.applyNowUrl).toBe('https://asu.edu');
    await expect(props.programList.dataSource.blacklistAcadPlans[0]).toBe('BAACCBS');
    // A bit odd sometimes the value is a bool true vs a string true, but egh
    await expect(props.programList.dataSource.cert).toBe('true');
  });
});
