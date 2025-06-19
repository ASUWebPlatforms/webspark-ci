import drush from './drush'

/**
 * <Revised> Collection of Drupal helpers for Playwright tests.
 *
 * Keep the functionality limited to core or global Drupal operations.
 * Things like creating nodes should happen in the appropriate Page Object Model.
 */
class Drupal {
  async enableModule (name) {
    await drush.enableModule(name)
    await drush.rebuild()
  }

  async disableModule (name) {
    await drush.disableModule(name)
    await drush.rebuild()
  }

  async acceptCookies (page, path = 'auth.json') {
    await page.getByRole('button', { name: 'Ok, I agree', timeout: 30000 })
    await page.context().storageState({ path: path })
  }

  async #login (page, buffer) {
    const url = buffer.toString().trim()
    await page.goto(url)
    await this.acceptCookies(page)
  }

  async loginAsAdmin (page) {
    const buffer = await drush.getAdminLogin()
    await this.#login(page, buffer)
  }

  async loginAsUser (page, name) {
    const buffer = await drush.getUserLogin(name)
    await this.#login(page, buffer)
  }

  async getNodePath (alias) {
    const cmd = `print \Drupal::service("path_alias.manager")->getPathByAlias("${alias}");`
    const buffer = drush.drush(`php:eval '${cmd}'`)
    const path = buffer.toString().trim()
    return path
  }

  async getNodeAlias () {
    const cmd = 'print \Drupal::requestStack()->getCurrentRequest()->getPathInfo();'
    const buffer = drush.drush(`php:eval '${cmd}'`)
    const alias = buffer.toString().trim()
    return alias
  }

  async getNodeIdByAlias (alias) {
    const formattedAlias = alias.startsWith('/') ? alias : `/${alias}`
    const cmd = `print \Drupal::service("path_alias.manager")->getPathByAlias("${formattedAlias}");`
    const buffer = drush.drush(`php:eval '${cmd}'`)
    const path = buffer.toString().trim()

    if (path.startsWith('/node/')) {
      const nid = path.substring('/node/'.length)
      return nid
    }

    console.warn(`Unexpected path format from Drush: ${path}. Expected to start with /node/`)
    return path
  }

  async addMediaField (page, n = 0, media = 'sample') {
    await page.getByRole('button', { name: 'Add media' }).nth(n).click()
    await page.getByRole('checkbox', { name: `Select ${media}`, exact: true }).check()

    const responsePromise = page.waitForResponse(resp => resp.url().includes('/edit'))
    await page.getByRole('button', { name: 'Insert selected' }).click()
    const response = await responsePromise
    if (!response.ok()) {
      throw new Error(`Failed to load media: ${response.status()} ${response.statusText()}`)
    }
  }
}

export default new Drupal()
