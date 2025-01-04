const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      adminLoginUrl: 'https://app.klasio.dev/login',
      studentLoginUrl: 'https://testtenant-10minutesschool.klasio.com/login',
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
