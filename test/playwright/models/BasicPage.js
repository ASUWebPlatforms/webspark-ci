import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { Node } from './Node'

class BasicPage extends Node {
  /**
   * BasicPage model for Playwright tests.
   * @param {import('playwright').Page} page
   * @param {string} name
   */
  constructor (page, name) {
    super(page, name)
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox')
  }

  /**
   * Add a new basic page node.
   * @returns {Promise<void>}
   */
  async add () {
    const title = `Playwright ${this.name}`

    await this.page.goto('/node/add/page')
    await this.inputTitle.fill(title)
    await this.save()

    await expect(this.status).toHaveClass(/alert-success/)
    await expect(this.page.getByRole('heading', { name: title })).toBeVisible()

    await this.setNodeProperties()
  }

  /**
   * Add content to the basic page node.
   * @returns {Promise<void>}
   */
  async addContent () {
    const body = faker.lorem.sentence()

    await this.inputBody.fill(body)
    await this.save()

    await expect(this.page.getByText(body)).toBeVisible()
  }
}

export { BasicPage }
