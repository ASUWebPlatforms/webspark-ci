import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import drupal from '../helpers/drupal'

// TODO: This file should only contain the bare basics to create a block
// TODO: Create a different file to hold and export all fields for each block, use that approach as many fields are reused
class Block {
  // @param {import('playwright').Page} page
  constructor (page, name) {
    this.page = page
    this.name = name
  }

  async add () {}

  async delete () {}

  async addAppearanceSettings () {}
}

export { Block }
