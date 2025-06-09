import { test, expect } from '@playwright/test'
import drupal from '../helpers/drupal'

class BasicPage {
  // @param {import('playwright').Page} page
  constructor (page) {
    this.page = page
    this.url = null
    this.nid = null
    this.inputTitle = page.getByRole('textbox', { name: 'Title *' })
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputSave = page.getByRole('button', { name: 'Save' })
    this.success = page.getByRole('status', { name: 'Status message' }).filter({ hasText: 'has been created' })
  }

  async addPage (name) {
    const title = `Playwright ${name}`

    await this.page.goto('/node/add/page')
    await this.inputTitle.fill(title)
    await this.inputSave.click()
    await expect(this.success).toBeVisible({ timeout: 5000 })
    await this.setNodeUrl(this.page.url())
    await this.setNodeId(this.page.url())
  }

  async viewPage () {
    // go to the page url directly or click the view button?
  }

  async editPage () {
    const path = `/node/${this.nid}/edit`
    await this.page.goto(path)
  }

  async deletePage () {}

  async editPageLayout () {}

  async editPageRevisions () {}

  async setNodeUrl (url) {
    this.url = url
  }

  async getNodeUrl () {
    return this.url
  }

  async setNodeId (url) {
    try {
      const obj = new URL(url)
      const alias = obj.pathname

      this.nid = await drupal.getNodeIdByAlias(alias)
    } catch (error) {
      console.error(`Error processing URL "${url}" to set Node ID:`, error)
      this.nid = null
    }
  }

  async getNodeId () {
    return this.nid
  }

  async addLorem () {}
}

export { BasicPage }
