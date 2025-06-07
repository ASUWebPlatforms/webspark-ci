const { execSync } = require('child_process')

class Drush {
  constructor () {
    this.drush = cmd => execSync(`drush ${cmd}`)
  }

  async rebuild () {
    this.drush('cache:rebuild')
  }

  async enableUniversalGTM () {
    this.drush('cset asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled 1')
    this.drush('cset asu_brand.settings asu_brand.asu_brand_gtm_enabled 1')
  }

  async disableUniversalGTM () {
    this.drush('cset asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled 0')
    this.drush('cset asu_brand.settings asu_brand.asu_brand_gtm_enabled 0')
  }

  async enableMaintenanceMode () {
    this.drush('maint:set')
  }

  async disableMaintenanceMode () {
    this.drush('state:set system.maintenance_mode 0 --input-format=integer')
  }

  async enableModule (name) {
    this.drush(`pm:install ${name} -y`)
  }

  async disableModule (name) {
    this.drush(`pm:uninstall ${name} -y`)
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
