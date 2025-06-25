import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import drupal from '../helpers/drupal'
import { React } from './React'

export class CardGroupDefault extends React {
  constructor (page) {
    super(page)
    this.heading = faker.lorem.words()
    this.content = faker.lorem.sentence()
  }

  async addContent (i) {
    await drupal.addMediaField(this.page, i)
    await this.inputCardHeading.nth(i).fill(this.heading)
    await this.inputCardContent.nth(i).fill(this.content)
    await drupal.addCTAField(this.page, i)
  }

  async verify () {}
}

export class CardGroupRanking {
  constructor (page) {
    this.page = page
  }

  async add () {}

  async addContent () {}

  async verify () {}
}

export class CardGroupStory {
  constructor (page) {
    this.page = page
  }

  async add () {}

  async addContent () {}

  async verify () {}
}

export class CardGroupIcon {
  constructor (page) {
    this.page = page
  }

  async add () {}

  async addContent () {}

  async verify () {}
}

export class CardGroupDegree {
  constructor (page) {
    this.page = page
  }

  async add () {}

  async addContent () {}

  async verify () {}
}

export class ImageBasedCards {
  constructor (page) {
    this.page = page
  }

  async add () {}

  async addContent () {}

  async verify () {}
}
