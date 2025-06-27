import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import drupal from '../helpers/drupal'
import { React } from './React'

export class CardGroupDefault extends React {
  constructor (page) {
    super(page)
    this.url = 'https://asu.edu'

    this.inputAddCard = page.getByRole('button', { name: 'Add Card' })
    this.inputAddCardGroup = page.getByRole('button', { name: 'Add Card Group Default' })
    this.inputCardHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputCardContent = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputSelectTarget = page.getByRole('combobox', { name: 'Select a target' })
    this.inputCTAStyle = page.getByRole('combobox', { name: 'Required Style' })
    this.inputAddCTA = page.getByRole('button', { name: 'Add CTA' })
    this.inputCTAURL = page.locator('[data-drupal-selector*="field-cta-0-subform-field-cta-link-0-uri"]')
    this.inputCTAText = page.locator('[data-drupal-selector*="field-cta-0-subform-field-cta-link-0-title"]')
    this.inputCTASecondaryURL = page.locator('[data-drupal-selector*="field-cta-secondary-0-subform-field-cta-link-0-uri"]')
    this.inputCTASecondaryText = page.locator('[data-drupal-selector*="field-cta-secondary-0-subform-field-cta-link-0-title"]')
    this.inputLinkURL = page.locator('[data-drupal-selector*="field-link-0-uri"]')
    this.inputLinkText = page.locator('[data-drupal-selector*="field-link-0-title"]')
    this.inputShowBorders = page.getByRole('checkbox', { name: 'Show borders' })
  }

  async addCardGroup () {
    await this.inputAddCardGroup.click()
  }

  async addCard (i = 0) {
    await drupal.addMediaField(this.page, i)
    await this.inputCardHeading.nth(i).fill(faker.book.title())
    await this.inputCardContent.nth(i).fill(faker.lorem.paragraph())
    await drupal.waitForAjax(this.page, this.inputAddCTA.first())
    await this.inputCTAURL.nth(i).fill(this.url)
    await this.inputCTAText.nth(i).fill(faker.lorem.words())
    await this.inputSelectTarget.nth(i).selectOption({ label: 'New window (_blank)' })
    await this.inputCTAStyle.nth(i).selectOption({ label: 'Maroon' })
    await drupal.waitForAjax(this.page, this.inputAddCTA.first())
    await this.inputCTASecondaryURL.nth(i).fill(this.url)
    await this.inputCTASecondaryText.nth(i).fill(faker.lorem.words())
    await this.inputSelectTarget.nth(i + 1).selectOption({ label: 'New window (_blank)' })
    await this.inputCTAStyle.nth(i + 1).selectOption({ label: 'Maroon' })
    await this.inputLinkURL.nth(i).fill(this.url)
    await this.inputLinkText.nth(i).fill(faker.lorem.words())
    await this.inputShowBorders.nth(i).check()
  }

  async addContent () {
    await this.addCard()
    await drupal.waitForAjax(this.page, this.inputAddCard)
    await this.addCard(1)
    await drupal.waitForAjax(this.page, this.inputAddCard)
    await this.addCard(2)
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
