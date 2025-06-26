import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import drupal from '../helpers/drupal'
import { React } from './React'

export class CardGroupDefault extends React {
  constructor (page) {
    super(page)
    this.heading = faker.lorem.words()
    this.content = faker.lorem.sentence()
    this.url = 'https://asu.edu'
    this.text = faker.lorem.words()

    this.inputAddCard = page.getByRole('button', { name: 'Add Card' })
    this.inputAddCardGroup = page.getByRole('button', { name: 'Add Card Group Default' })
    this.inputCardHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputCardContent = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputLinkURL = page.locator('[data-drupal-selector*="field-link-0-uri"]')
    this.inputLinkText = page.locator('[data-drupal-selector*="field-link-0-title"]')
    this.inputSelectTarget = page.getByRole('combobox', { name: 'Select a target' })
    this.inputCTAStyle = page.getByRole('combobox', { name: 'Required Style' })
    this.inputAddCTA = page.getByRole('button', { name: 'Add CTA' })
    this.inputCTAURL = page.locator('[data-drupal-selector*="field-cta-0-subform-field-cta-link-0-uri"]')
    this.inputCTAText = page.locator('[data-drupal-selector*="field-cta-0-subform-field-cta-link-0-title"]')
    this.inputCTASecondaryURL = page.locator('[data-drupal-selector*="field-cta-secondary-0-subform-field-cta-link-0-uri"]')
    this.inputCTASecondaryText = page.locator('[data-drupal-selector*="field-cta-secondary-0-subform-field-cta-link-0-title"]')
    this.inputShowBorders = page.getByRole('checkbox', { name: 'Show borders' })
  }

  /**
   * Add a new card group.
   * @returns {Promise<void>}
   */
  async addCardGroup () {
    await this.inputAddCardGroup.click()
  }

  async #addCard(n = 0) {
    console.log(`Adding card ${n}`)
    await drupal.addMediaField(this.page, n)
    await this.inputCardHeading.nth(n).fill(faker.book.title())
    await this.inputCardContent.nth(n).fill(faker.lorem.paragraph())
    await this.inputAddCTA.first().click()
    await this.page.waitForTimeout(2500)
    await this.inputCTAURL.nth(n).fill(this.url)
    await this.inputCTAText.nth(n).fill(faker.lorem.words())
    await this.inputSelectTarget.nth(n).selectOption({ label: 'New window (_blank)' })
    await this.inputCTAStyle.nth(n).selectOption({ label: 'Maroon' })
    await this.inputAddCTA.first().click()
    await this.page.waitForTimeout(2500)
    await this.inputCTASecondaryURL.nth(n).fill(this.url)
    await this.inputCTASecondaryText.nth(n).fill(faker.lorem.words())
    await this.inputSelectTarget.nth(n+1).selectOption({ label: 'New window (_blank)' })
    await this.inputCTAStyle.nth(n+1).selectOption({ label: 'Maroon' })
    await this.inputLinkURL.nth(n).fill(this.url)
    await this.inputLinkText.nth(n).fill(this.text)
    await this.inputShowBorders.nth(n).check()
  }

  async addContent () {
    await this.page.waitForTimeout(2500)
    await this.#addCard()
    await this.inputAddCard.click()
    await this.page.waitForTimeout(2500)
    await this.#addCard(1)
    await this.inputAddCard.click()
    await this.page.waitForTimeout(2500)
    await this.#addCard(2)
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
