const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    // watchForFileChange: true
  }
});

{
  'chromeWebSecurity'; false
}
