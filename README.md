# Klasio Cypress Automation Project

# Description

This project is a Cypress automation framework for testing the Klasio LMS platform. It uses the Page Object Model (POM) design pattern for better maintainability and scalability.

# Project Structure

 - e2e

   - Locators: Contains JSON files for element locators.

   - Pages: Contains methods and steps for specific pages using locators.

   - TestCases: Contains test case files.

   - Utilities: Contains reusable common methods.

 - fixtures: Contains JSON data for test inputs.

# Prerequisites

 - Node.js installed on your machine.

# Installation

1. Clone the repository:

``git clone https://github.com/ashrafiucse/klasioAutomationCypress``

2. Navigate to the project directory:

``cd klasioAutomationCypress``

3. Install dependencies:

``npm install``

# Running Tests

 - Open Cypress Test Runner:

``npx cypress open``

 - Run all tests in headless mode:

``npx cypress run``

# Environment Variables

Environment variables are defined in the ``cypress.config.js`` file:
```javascript
module.exports = defineConfig({
  e2e: {
    env: {
      adminLoginUrl: 'https://app.klasio.dev/login',
      studentHomePageUrl: 'https://wedevsacademy.klasio.dev/'
    },
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
```

# Extensions Used

``cypress``

``cypress-xpath``

# Notes

Ensure the dependencies are installed before running the tests. Use npm install to set up the project.

# License

This project is licensed under the MIT License.
