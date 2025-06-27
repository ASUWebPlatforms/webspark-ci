import { test, expect } from '@playwright/test'
import { BasicPage } from '../../models/BasicPage.js'
import { Divider } from '../../models/WebsparkBlocks.js'

/** @type {import('@playwright/test').Page} */
let page
let node, block
const title = 'Divider'

test.describe(title, { tag: ['@webspark', '@block'] }, () => {
  test.describe.configure({ mode: 'serial' })

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    node = new BasicPage(page, title)
    block = new Divider(page, title)
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('create', async () => {
    await node.add()
    await node.goToLayout()
    await block.add()
    await block.save()
  })

  test('create variant', async () => {
    await node.goToLayout()
    await block.add()
    await block.addContent()
    await block.save()
  })

  // Not enough of a difference to justify variant method
  test('verify', async () => {
    await block.verify()
  })
})
