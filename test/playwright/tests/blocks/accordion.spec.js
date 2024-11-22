import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

test.describe('', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    // login as admin
    // visit layout builder
  });

  test('create', async ({ page }) => {
    // add a new block to the page
    // add all required fields
    // add optional fields
    // save
    // ensure block is visible with all fields
  });

  test('edit', async ({ page }) => {
    // select the block you just created
    // edit the block
    // save
    // ensure block is visible
    // drag and drop it to a new location on the page
  });

  test('delete', async ({ page }) => {
    // select the block you just created
    // delete the block
    // ensure block is not visible
  });

  test('anchor menu', async ({ page }) => {
    // add the anchor menu options
    // save
    // ensure the adequate markup is present
    // note, it is not the responsibility of the test to validate the anchor menu functionality here
    // only that the block itself provides the data to the anchor menu
  });
});
