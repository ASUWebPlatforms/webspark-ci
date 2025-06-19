import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en';
import drupal from '../helpers/drupal'

class Article {
  // @param {import('playwright').Page} page
  constructor (page, name) {
    this.page = page
    this.name = name
    this.url = null
    this.alias = null
    this.path = null
    this.nid = null
    this.inputTitle = page.getByRole('textbox', { name: 'Title *' })
    this.inputAuthor = page.getByRole('textbox', { name: 'Article author' })
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1)
    this.inputHeroSize = page.getByLabel('Hero Size')
    this.inputSave = page.getByRole('button', { name: 'Save' })
    this.inputDelete = page.getByRole('button', { name: 'Delete' })
    this.status = page.getByRole('status', { name: 'Status message' })
    this.title = page.getByRole('heading', { name: /Playwright/i })
  }

  async addArticle () {
    await this.page.goto('/node/add/article')
    await this.addContent()
    await expect(this.status).toHaveClass(/alert-success/)
    await this.#setNodeUrl()
    await this.#setNodeAlias()
    await this.#setNodePath()
    await this.#setNodeId()
  }

  async addContent () {
    const title = `Playwright ${this.name}`

    await drupal.addMediaField(this.page);
    await this.inputHeroSize.selectOption({ label: 'Large' })
    await this.inputTitle.fill(title)
    await this.inputAuthor.fill('Author')
    await this.inputBody.fill('Lorem ipsum dolor')
    await this.inputSave.click()
  }

  async viewArticle () {
    await this.page.goto(this.alias)
  }

  async editArticle () {
    const path = `${this.path}/edit`
    await this.page.goto(path)
  }

  async deleteArticle () {
    const path = `${this.path}/delete`
    await this.page.goto(path)
    await this.inputDelete.click()
    await expect(this.status).toHaveClass(/alert-success/, { timeout: 5000 })
  }

  async editArticleLayout () {
    const path = `${this.path}/layout`
    await this.page.goto(path)
  }

  async editArticleRevisions () {
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

  async verifyTitle(text) {
    const title = `Playwright ${text}`;
    expect(await this.page.getByText(title, { exact: true })).toBeVisible();
  }
}

export { Article }
