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
  await node.addPage('test')
})
