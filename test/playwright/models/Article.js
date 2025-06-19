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
    this.hero = page.locator('.uds-story-hero');
    this.image = page.getByRole('img', { name: 'sample image' });
    this.date = page.getByRole('time');
    this.lead = page.getByText('Replace or delete this "lead');
  }

  async addArticle () {
    const title = `Playwright ${this.name}`
    const body = faker.lorem.sentence()

    await this.page.goto('/node/add/article')
    await this.inputTitle.fill(title)
    await this.inputBody.fill(body)
    await this.inputSave.click()

    await expect(this.status).toHaveClass(/alert-success/)
    await expect(this.page.getByRole('heading', { name: title })).toBeVisible();
    await expect(this.page.getByText(body)).toBeVisible();

    await this.#setNodeUrl()
    await this.#setNodeAlias()
    await this.#setNodePath()
    await this.#setNodeId()
  }

  async addContent () {
    const author = faker.person.fullName()

    await drupal.addMediaField(this.page);
    await this.inputHeroSize.selectOption({ label: 'Large' })
    await this.inputAuthor.fill(author)
    await this.inputSave.click()

    await expect(this.hero).toHaveClass(/uds-story-hero-lg/);
    await expect(this.image).toBeVisible();
    await expect(this.lead).toBeVisible();
    await expect(this.page.getByText(author, { exact: true })).toBeVisible();
    await expect(this.date).toBeVisible();
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

    await expect(this.status).toHaveClass(/alert-success/)
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
}

export { Article }
