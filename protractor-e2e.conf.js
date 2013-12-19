exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    './test/e2e/*.js'
  ],
  capabilities: {
    'borwserName': 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
