import { test, expect } from '@playwright/test'
import { BasicPage } from '../../models/BasicPage.js'
import { Accordion } from '../../models/WebsparkBlocks.js'

/** @type {import('@playwright/test').Page} */
let page
let node, block
const title = 'Accordion'

test.describe(title, { tag: ['@webspark', '@blocks'] }, () => {
  test.describe.configure({ mode: 'serial' })

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    node = new BasicPage(page, title)
    block = new Accordion(page, title)
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('create', async () => {
    await node.add()
    await node.goToLayout()
    await block.add()
    await block.addContent()
    await block.save()
  })

  test('verify', async () => {
    await expect(block.el).toBeVisible()
    await expect(block.icon).toBeVisible()
    await expect(block.heading).toBeVisible()
    await expect(block.content).toBeVisible()
    await block.heading.click()
    await expect(block.content).toBeHidden()
  })
})
