import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { Node } from './Node'
import drupal from '../helpers/drupal'

class Article extends Node {
  /**
   * Article model for Playwright tests.
   * @param {import('playwright').Page} page
   * @param {string} name
   */
  constructor (page, name) {
    super(page, name)
    this.inputHeroSize = page.getByLabel('Hero Size')
    this.inputAuthor = page.getByRole('textbox', { name: 'Article author' })
    this.inputByline = page.getByLabel('Rich Text Editor').getByRole('textbox').nth(0)
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1)
    this.hero = page.locator('.uds-story-hero')
    this.image = page.getByRole('img', { name: 'sample image' })
    this.date = page.getByRole('time')
    this.lead = page.getByText('Replace or delete this "lead')
  }

  /**
   * Add a new article node.
   * @returns {Promise<void>}
   */
  async add () {
    const title = `Playwright ${this.name}`
    const body = faker.lorem.sentence()
    const byline = faker.lorem.sentence()

    await this.page.goto('/node/add/article')
    await this.inputTitle.fill(title)
    await this.inputByline.fill(byline)
    await this.inputBody.fill(body)
    await this.inputSave.click()

    await expect(this.status).toHaveClass(/alert-success/)
    await expect(this.page.getByRole('heading', { name: title })).toBeVisible()
    await expect(this.page.getByText(body)).toBeVisible()

    await this.setNodeProperties()
  }

  /**
   * Add content to the article node.
   * @returns {Promise<void>}
   */
  async addContent () {
    const author = faker.person.fullName()

    await drupal.addMediaField(this.page)
    await this.inputHeroSize.selectOption({ label: 'Large' })
    await this.inputAuthor.fill(author)
    await this.inputSave.click()

    await expect(this.hero).toHaveClass(/uds-story-hero-lg/)
    await expect(this.image).toBeVisible()
    await expect(this.lead).toBeVisible()
    await expect(this.page.getByText(author, { exact: true })).toBeVisible()
    await expect(this.date).toBeVisible()
  }
}

export { Article }
