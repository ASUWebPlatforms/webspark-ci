import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('degree listing page tests', { tag: ['@webspark', '@desktop', '@pages'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;
  let degreeURL;

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

  test('create degree detail page', async () => {
    await page.goto(pageUrl);
    await page.getByRole('link', { name: 'Computer Gaming' }).click();
    degreeURL = page.url();
    await page.getByRole('link', { name: 'Edit' }).click();

    //--- Begin custom test steps
    await page.getByRole('group', { name: 'Offered by link' }).getByLabel('URL').fill('https://asu.edu');
    await page.getByRole('group', { name: 'Offered by link' }).getByLabel('Link text').fill('foo');

    await page.locator('#edit-field-degree-detail-locations-0-uri').fill('https://asu.edu');
    await page.locator('#edit-field-degree-detail-locations-0-title').fill('foo');

    await page.getByRole('textbox', { name: 'First requirement math course', exact: true }).fill('foo');
    await page.getByRole('textbox', { name: 'Math intensity', exact: true }).fill('foo');
    await page.getByRole('textbox', { name: 'Time commitment', exact: true }).fill('foo');

    await drupal.addMediaField(page, 2);
    await drupal.addMediaField(page, 3);

    await page.getByRole('button', { name: 'Add Degree details next steps card' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Card icon', exact: true }).fill('star');
    await page.getByRole('textbox', { name: 'Card title', exact: true }).fill('foo');
    await page.getByRole('textbox', { name: 'Card content', exact: true }).fill('foo');
    await page.getByRole('cell', { name: 'Degree details next steps' }).getByLabel('URL').fill('https://asu.edu');
    await page.getByRole('cell', { name: 'Degree details next steps' }).getByLabel('Link text').fill('foo');
    await page.getByRole('combobox', { name: 'Card button link color' }).selectOption({ label: 'maroon' });

    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Why choose content');
    await page.getByRole('button', { name: 'Add Degree Details Why Choose' }).nth(0).click();
    await page.waitForTimeout(2000);
    await drupal.addMediaField(page, 4);
    await page.getByRole('textbox', { name: 'Card title *', exact: true }).fill('foo');
    await page.getByRole('textbox', { name: 'Card content *', exact: true }).fill('foo');
    await page.getByRole('cell', { name: 'Degree Details Why Choose' }).getByLabel('URL').fill('https://asu.edu');
    await page.getByRole('cell', { name: 'Degree Details Why Choose' }).getByLabel('Link text').fill('foo');

    await page.waitForTimeout(2000);
    await drupal.addMediaField(page, 5);

    await page.getByRole('textbox', { name: 'Program department URL', exact: true }).fill('foo');
    await page.getByRole('textbox', { name: 'Program department email link', exact: true }).fill('foo');

    await page.getByRole('checkbox', { name: 'At a glance', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Application requirements', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Change major requirements', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Next steps', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Affording college', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Career outlook', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Why Choose ASU', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Example careers', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Customize your college experience', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Global opportunity', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Attend online', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Program contact info', exact: true }).setChecked(true);

    await page.getByRole('cell', { name: 'URL https://webspark-ci.ddev.' }).getByLabel('URL').fill('<nolink>');
    await page.getByRole('cell', { name: 'URL https://webspark-ci.ddev.' }).getByLabel('Link text').fill('foo');

    await page.getByRole('checkbox', { name: 'Hide market text (includes custom Intro content)', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide program description', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide required courses', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide application requirements', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide change major requirements', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide affording college', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide flexible degree options', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide example careers', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide global opportunity', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide Why Choose ASU', exact: true }).setChecked(true);
    await page.getByRole('checkbox', { name: 'Hide attend online', exact: true }).setChecked(true);
    // //--- End custom test steps

    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('verify degree detail', async () => {
    await page.goto(degreeURL);
    await page.waitForLoadState();
    const props = await page.evaluate(() => {
      return window.drupalSettings.asu_degree_rfi.program_detail_page;
    });

    await expect(props).toBeDefined();
    expect(typeof props).toBe('object');

    await expect(props.foo).toBe('');
  });
});
