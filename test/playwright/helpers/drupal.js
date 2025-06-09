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

  async getNodeIdByAlias (alias) {
    const formattedAlias = alias.startsWith('/') ? alias : `/${alias}`;
    const cmd = `print \Drupal::service("path_alias.manager")->getPathByAlias("${formattedAlias}");`;
    const buffer = drush.drush(`php:eval '${cmd}'`);
    const path = buffer.toString().trim();

    console.log('Raw path from Drush:', path);

    if (path.startsWith('/node/')) {
      const nid = path.substring('/node/' . length);
      console.log('Extracted Node ID:', nid);
      return nid;
    }

    console.warn(`Unexpected path format from Drush: ${path}. Expected to start with /node/`);
    return path;
  }
}

export default new Drupal()
