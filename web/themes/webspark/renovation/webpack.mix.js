/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. See https://github.com/JeffreyWay/laravel-mix.
 |
 */
const config = require('./config.local.js');
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Configuration
 |--------------------------------------------------------------------------
 */
mix
  .setPublicPath('assets')
  .disableNotifications()
  .options({
    processCssUrls: false
  });

/*
 |--------------------------------------------------------------------------
 | Browsersync
 |--------------------------------------------------------------------------
 */
mix.browserSync({
  proxy: config.proxy,
  files: ['assets/js/**/*.js', 'assets/css/**/*.css'],
  stream: true,
});

/*
 |--------------------------------------------------------------------------
 | UDS
 |--------------------------------------------------------------------------
 */
mix.copy(
  [
    "node_modules/@asu/unity-bootstrap-theme/dist/css/unity-bootstrap-theme.css",
    'node_modules/@asu/unity-bootstrap-theme/dist/css/unity-bootstrap-footer.css'
  ],
  "assets/css"
);

mix.copy(
  [
    "node_modules/@asu/unity-bootstrap-theme/dist/js/bootstrap.bundle.min.js",
    "node_modules/@asu/unity-bootstrap-theme/dist/js/data-layer.js",
    "node_modules/@asu/unity-bootstrap-theme/dist/js/global-header.js",
  ],
  "assets/js"
);

/*
 |--------------------------------------------------------------------------
 | SASS
 |--------------------------------------------------------------------------
 */
mix.sass('src/sass/renovation.style.scss', 'css', {
  sassOptions: {
    includePaths: [
      'node_modules/@asu/unity-bootstrap-theme/src/scss/variables',
    ]
  }
});

/*
 |--------------------------------------------------------------------------
 | JS
 |--------------------------------------------------------------------------
 */
mix.js('src/js/renovation.script.js', 'js');
