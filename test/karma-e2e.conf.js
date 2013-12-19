// Karma configuration;
// http://karma-runner.github.io/0.10/config/configuration-file.html
var karmaDefaults = require('./karma.conf.js');

module.exports = function(config) {

  var options = karmaDefaults();

  // testing framework to use (jasmine/mocha/qunit/...)
  options.frameworks = ['ng-scenario'];

  // list of files / patterns to load in the browser
  options.files = [
    'test/e2e/**/*.js'
  ];

  // Uncomment the following lines if you are using grunt's server to run the tests
  // proxies: {
  //   '/': 'http://localhost:9000/'
  // },
  // URL root prevent conflicts with the site root
  // urlRoot: '_karma_'

  config.set(options);
};
