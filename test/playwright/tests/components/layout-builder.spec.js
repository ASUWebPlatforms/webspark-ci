// todo: break this entire file into individual block level tests, see accordion.spec.js for an example
// todo: then, test the core layout builder functionality, that any block can be added, edited, and deleted
import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const blocks = [
  'Accordion',
  'Blockquote',
  'Card and Image',
  'Card Arrangement',
  'Card Carousel',
  'Card image and content',
  'Content image overlap',
  'Display List',
  'Divider',
  'Donut Chart',
  'Events',
  'Grid Links',
  'Hero',
  'Hover Cards',
  'Icon List',
  'Image',
  'Image And Text Block',
  'Image Background With Call To Action',
  'Image Carousel',
  'Image Gallery',
  'Inset Box',
  'News',
  'Notification Banner',
  'Sidebar Menu',
  'Step List',
  'Tabbed Content',
  'Testimonial',
  'Testimonial Carousel',
  'Testimonial On Image Background',
  'Text Content',
  'Video',
  'Video hero',
  'Web Directory',
  'Webform',
];

test.describe('layout builder tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await drupal.visitLayoutBuilder(page);
    await page.getByRole('link', { name: 'Add block in Top, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
  });

  test('custom blocks appear', async ({ page }) => {
    for (const i of blocks) {
      await expect(page.getByRole('link', { name: i, exact: true })).toBeVisible();
    }
  });

  // test('appearance settings appear', async ({ page }) => {
  //   const skipAnchorCheck = ['Hero', 'Image', 'Notification Banner', 'Sidebar Menu', 'Video hero'];

  //   for (const i of blocks) {
  //     await page.getByRole('link', { name: i, exact: true }).click();
  //     await expect(page.getByRole('button', { name: 'Appearance Settings' })).toBeVisible();
  //     await page.getByRole('button', { name: 'Appearance Settings' }).click();

  //     if (!skipAnchorCheck.includes(i)) {
  //       await expect(page.getByRole('button', { name: 'Add anchor Menu Settings' })).toBeVisible();
  //     }

  //     await expect(page.getByLabel('Spacing top')).toBeVisible();
  //     await expect(page.getByLabel('Spacing bottom')).toBeVisible();

  //     // reset the page for the next block
  //     await page.locator('div').filter({ hasText: /^Configure block$/ }).getByRole('button').click();
  //     await page.getByRole('link', { name: 'Add block in Top, First region' }).click();
  //     await page.getByRole('link', { name: 'Create content block' }).click();
  //   }
  // });
});
