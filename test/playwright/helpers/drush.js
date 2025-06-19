const { execSync } = require('child_process')

/**
 * Note that we intentionally are not using any shorthand(s) for command names.
 */
class Drush {
  constructor () {
    this.drush = cmd => execSync(`drush ${cmd}`)
  }

  async rebuild () {
    this.drush('cache:rebuild')
  }

  async enableUniversalGTM () {
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled 1')
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_gtm_enabled 1')
  }

  async disableUniversalGTM () {
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled 0')
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_gtm_enabled 0')
  }

  async enableMaintenanceMode () {
    this.drush('maint:set 1')
  }

  async disableMaintenanceMode () {
    this.drush('maint:set 0')
  }

  async enableModule (name) {
    this.drush(`pm:install -y ${name}`)
  }

  async disableModule (name) {
    this.drush(`pm:uninstall -y ${name}`)
  }

  async updateDB () {
    this.drush('updatedb -y')
  }

  async getAdminLogin () {
    return this.drush('user:login')
  }

  async getUserLogin (name) {
    return this.drush(`user:login --name=${name}`)
  }
}

export default new Drush()
