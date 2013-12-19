// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
var karmaDefaults = require('./karma.conf.js');

module.exports = function(config) {

  var options = karmaDefaults();
  config.set(options);

};
