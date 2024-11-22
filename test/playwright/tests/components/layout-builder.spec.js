import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

test.describe('layout builder tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await drupal.visitLayoutBuilder(page);
  });
  test('custom blocks appear', async ({ page }) => {});
  test('appearance settings appear', async ({ page }) => {});
});
