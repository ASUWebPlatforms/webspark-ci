import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { Node } from './Node'

class BasicPage extends Node {
  constructor (page, name) {
    super(page, name)
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox')
  }

  async add () {
    const title = `Playwright ${this.name}`

    await this.page.goto('/node/add/page')
    await this.inputTitle.fill(title)
    await this.inputSave.click()

    await expect(this.status).toHaveClass(/alert-success/)
    await expect(this.page.getByRole('heading', { name: title })).toBeVisible()

    await this.setNodeProperties()
  }

  async addContent () {
    const body = faker.lorem.sentence()

    await this.inputBody.fill(body)
    await this.inputSave.click()

    await expect(this.page.getByText(body)).toBeVisible()
  }
}

export { BasicPage }
