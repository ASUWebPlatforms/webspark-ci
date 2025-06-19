import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en';
import drupal from '../helpers/drupal'

class BasicPage {
  // @param {import('playwright').Page} page
  constructor (page, name) {
    this.page = page
    this.name = name
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

  async addPage () {
    const title = `Playwright ${this.name}`

    await this.page.goto('/node/add/page')
    await this.inputTitle.fill(title)
    await this.inputSave.click()

    await expect(this.status).toHaveClass(/alert-success/)
    await expect(this.page.getByRole('heading', { name: title })).toBeVisible();

    await this.#setNodeUrl()
    await this.#setNodeAlias()
    await this.#setNodePath()
    await this.#setNodeId()
  }

  async addContent () {
    const body = faker.lorem.sentence()

    await this.inputBody.fill(body)
    await this.inputSave.click()

    await expect(this.page.getByText(body)).toBeVisible();
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

    await expect(this.status).toHaveClass(/alert-success/)
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
}

export { BasicPage }
