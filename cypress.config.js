const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 100000,
    baseUrl: 'http://www.saucedemo.com'
  }
});
