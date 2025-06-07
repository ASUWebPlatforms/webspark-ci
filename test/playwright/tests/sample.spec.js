import { test, expect } from '@playwright/test'
import { BasicPageTemplate } from '../models/BasicPageTemplate.js'
import drupal from '../helpers/drupal.js'

let context, page, node

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext()
  page = await context.newPage()
  node = new BasicPageTemplate(page)
})

test.afterAll(async () => {
  await context.close()
})

test('Verify labels', async () => {
  await drupal.loginAsAdmin(page)
  await node.addPage('Sample test')
})
