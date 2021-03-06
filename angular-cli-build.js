/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function (defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'bootstrap/dist/*.+(css|css.map|ttf|woff|woff2|svg|png)',
      'jquery/dist/*.+(js|js.map)',
      'kendo-ui-core/**/*.+(js|js.map|css|css.map|ttf|woff|eot|svg|png)'
    ]
  });
};
