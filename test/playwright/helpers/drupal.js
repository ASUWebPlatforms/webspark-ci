import drush from './drush'

/**
 * <Revised> Collection of Drupal helpers for Playwright tests.
 * Keep the functionality limited to core or global Drupal operations.
 * Things like creating nodes should happen in the appropriate Page Object Model.
 */
class Drupal {
  /**
   * Enable a Drupal module.
   * @param {string} name
   * @returns {Promise<void>}
   */
  async enableModule (name) {
    await drush.enableModule(name)
    await drush.rebuild()
  }

  /**
   * Disable a Drupal module.
   * @param {string} name
   * @returns {Promise<void>}
   */
  async disableModule (name) {
    await drush.disableModule(name)
    await drush.rebuild()
  }

  /**
   * Accept cookies on the page.
   * @param {import('playwright').Page} page
   * @param {string} path
   * @returns {Promise<void>}
   */
  async acceptCookies (page, path = 'auth.json') {
    await page.getByRole('button', { name: 'Ok, I agree' }).click()
    await page.context().storageState({ path: path })
  }

  /**
   * Login to Drupal using Drush.
   * @param {import('playwright').Page} page
   * @param buffer
   * @returns {Promise<void>}
   */
  async #login (page, buffer) {
    const url = buffer.toString().trim()
    await page.goto(url)
    await this.acceptCookies(page)
  }

  /**
   * Login as an admin user using Drush.
   * @param {import('playwright').Page} page
   * @returns {Promise<void>}
   */
  async loginAsAdmin (page) {
    const buffer = await drush.getAdminLogin()
    await this.#login(page, buffer)
  }

  /**
   * Login as a specific user using Drush.
   * @param {import('playwright').Page} page
   * @param {string} name
   * @returns {Promise<void>}
   */
  async loginAsUser (page, name) {
    const buffer = await drush.getUserLogin(name)
    await this.#login(page, buffer)
  }

  /**
   * Get the path of a node by its alias.
   * @param {string} alias
   * @returns {Promise<string>}
   */
  async getNodePath (alias) {
    const cmd = `print \Drupal::service("path_alias.manager")->getPathByAlias("${alias}");`
    const buffer = drush.drush(`php:eval '${cmd}'`)
    return buffer.toString().trim()
  }

  /**
   * Get the alias of the current node.
   * @returns {Promise<string>}
   */
  async getNodeAlias () {
    const cmd = 'print \Drupal::requestStack()->getCurrentRequest()->getPathInfo();'
    const buffer = drush.drush(`php:eval '${cmd}'`)
    return buffer.toString().trim()
  }

  /**
   * Get the node ID by its alias.
   * @param {string} alias
   * @returns {Promise<string>}
   */
  async getNodeIdByAlias (alias) {
    const formattedAlias = alias.startsWith('/') ? alias : `/${alias}`
    const cmd = `print \Drupal::service("path_alias.manager")->getPathByAlias("${formattedAlias}");`
    const buffer = drush.drush(`php:eval '${cmd}'`)
    const path = buffer.toString().trim()

    if (path.startsWith('/node/')) {
      return path.substring('/node/'.length)
    }

    console.warn(`Unexpected path format from Drush: ${path}. Expected to start with /node/`)
    return path
  }

  /**
   * Add a media field.
   * @param {import('playwright').Page} page
   * @param {number} n
   * @param {string} media
   * @returns {Promise<void>}
   */
  async addMediaField (page, n = 0, media = 'sample') {
    await page.getByRole('button', { name: 'Add media' }).nth(n).click()
    await page.getByRole('checkbox', { name: `Select ${media}`, exact: true }).check()

    const responsePromise = page.waitForResponse(resp =>
      resp.url().includes('/layout') || resp.url().includes('/edit'),
    )
    await page.getByRole('button', { name: 'Insert selected' }).click()
    const response = await responsePromise
    if (!response.ok()) {
      throw new Error(`Failed to load media: ${response.status()} ${response.statusText()}`)
    }
  }

  /**
   * Add a Call to Action field.
   * @param {import('playwright').Page} page
   * @param {number} n
   * @returns {Promise<void>}
   */
  async addCTAField (page, n = 0) {
    await page.getByRole('button', { name: 'Add CTA' }).nth(n).click()
    await page.getByRole('textbox', { name: 'URL' }).nth(n).fill('https://asu.edu')
    await page.getByRole('textbox', { name: 'Link text' }).nth(n).fill('Call to action')
    await page.getByRole('combobox', { name: 'Select a target' }).nth(n).selectOption({ label: 'New window (_blank)' })
    await page.getByRole('combobox', { name: 'Required Style' }).nth(n).selectOption({ label: 'Maroon' })
  }

  /**
   * Add an Icon field.
   * @param {import('playwright').Page} page
   * @param {number} n
   * @returns {Promise<void>}
   */
  async addIcon (page, n = 0) {
    await page.locator('.fip-icon-down-dir').nth(n).click()
    await page.getByTitle('Pyramid,ASUAwesome,Shapes,').nth(n).click()
  }
}

export default new Drupal()
