// ----------------------------------------------------------------------------
// Laravel Mix
// @see https://laravel-mix.com
// ----------------------------------------------------------------------------
const config = require('./config.local.js');
const mix = require('laravel-mix');

// BrowserSync
// ----------------------------------------------------------------------------
mix.browserSync(config.browserSync);

// UDS
// ----------------------------------------------------------------------------
mix.copy(
  [
    "node_modules/@asu/unity-bootstrap-theme/dist/js/bootstrap.bundle.min.js",
    "node_modules/@asu/unity-bootstrap-theme/dist/js/data-layer.js",
    "node_modules/@asu/unity-bootstrap-theme/dist/js/global-header.js",
  ],
  "assets/js"
);

mix.copy("node_modules/@asu/unity-bootstrap-theme/dist/img", "assets/img");

// SASS
// ----------------------------------------------------------------------------
mix.sass('src/sass/renovation.style.scss', 'css');

// JS
// ----------------------------------------------------------------------------
mix.js('src/js/renovation.script.js', 'js');
