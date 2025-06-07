import { test, expect } from '@playwright/test'
import drush from '../helpers/drush'
import drupal from '../helpers/drupal'

class BasicPageTemplate {
  // @param {import('playwright').Page} page
  constructor (page) {
    this.page = page
    this.inputTitle = page.getByRole('textbox', { name: 'Title *' })
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputSave = page.getByRole('button', { name: 'Save' })
    this.path = null
  }

  async addPage (name) {
    const title = `Playwright ${name}`

    await this.page.goto('/node/add/page')
    await this.inputTitle.fill(title)
    await this.inputSave.click()

    this.path = this.page.url()
  }

  async viewPage () {}

  async editPage () {
    const path = `/node/${drupal.getNodeIdByAlias(this.path)}/edit`
    await this.page.goto(path)
  }

  async deletePage () {}

  async editPageLayout () {}

  async editPageRevisions () {}

  async getNodeUrl () {
    return this.path
  }
}

module.exports = { BasicPageTemplate }
