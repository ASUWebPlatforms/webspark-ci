import { test, expect } from '@playwright/test'
import { BasicPage } from '../models/BasicPage.js'
import drush from '../helpers/drush.js'
import drupal from '../helpers/drupal.js'

let context, page, node

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext()
  page = await context.newPage()
  node = new BasicPage(page)
})

test.afterAll(async () => {
  await context.close()
})

test('node', async () => {
  // When you know that the test might be slow, set the timeout for this test
  // This way you should not need to manually do things like "page.waitForTimeout(500);"
  test.setTimeout(120000);
  await node.addPage('test')
})
