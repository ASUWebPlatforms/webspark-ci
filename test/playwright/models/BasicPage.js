import { expect } from '@playwright/test'
import drupal from '../helpers/drupal'

class BasicPage {
  // @param {import('playwright').Page} page
  constructor (page) {
    this.page = page
    this.url = null
    this.alias = null
    this.path = null
    this.nid = null
    this.inputTitle = page.getByRole('textbox', { name: 'Title *' })
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputSave = page.getByRole('button', { name: 'Save' })
    this.inputDelete = page.getByRole('button', { name: 'Delete' })
    this.status = page.getByRole('status', { name: 'Status message' })
  }

  async addPage (name) {
    const title = `Playwright ${name}`

    await this.page.goto('/node/add/page')
    await this.inputTitle.fill(title)
    await this.inputSave.click()
    await expect(this.status).toHaveClass(/alert-success/)
    await this.#setNodeUrl()
    await this.#setNodeAlias()
    await this.#setNodePath()
    await this.#setNodeId()
  }

  async viewPage () {
    await this.page.goto(this.alias)
  }

  async editPage () {
    const path = `${this.path}/edit`
    await this.page.goto(path)
  }

  async deletePage () {
    const path = `${this.path}/delete`
    await this.page.goto(path)
    await this.inputDelete.click()
    await expect(this.status).toHaveClass(/alert-success/, { timeout: 5000 })
  }

  async editPageLayout () {
    const path = `${this.path}/layout`
    await this.page.goto(path)
  }

  async editPageRevisions () {
    const path = `${this.path}/revisions`
    await this.page.goto(path)
  }

  async #setNodeUrl () {
    this.url = this.page.url()
  }

  async getNodeUrl () {
    return this.url
  }

  async #setNodeAlias () {
    if (!this.url) {
      console.error('Cannot set node alias because this.url is not set.')
      this.alias = null
      return
    }
    try {
      const urlObject = new URL(this.url)
      this.alias = urlObject.pathname
    } catch (error) {
      console.error(`Error parsing URL "${this.url}" to set Node alias:`, error)
      this.alias = null
    }
  }

  async getNodeAlias () {
    return this.alias
  }

  async #setNodePath () {
    try {
      if (!this.alias) {
        console.error('Cannot set node path because this.alias is not set.')
        this.path = null
        return
      }
      this.path = await drupal.getNodePath(this.alias)
    } catch (error) {
      console.error('Error processing Node path:', error)
      this.path = null
    }
  }

  async getNodePath () {
    return this.path
  }

  async #setNodeId () {
    try {
      this.nid = await drupal.getNodeIdByAlias(this.alias)
    } catch (error) {
      console.error(`Error processing alias to set Node ID:`, error)
      this.nid = null
    }
  }

  async getNodeId () {
    return this.nid
  }

  async addLorem () {
    await this.inputBody.fill('Lorem ipsum dolor')
  }
}

export { BasicPage }
