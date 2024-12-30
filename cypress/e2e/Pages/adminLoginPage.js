class adminlogin {
    logInWithValidCredential(email, password) {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.typeText(loginLocators.emailField,email);
        method.typeText(loginLocators.passwordField, password);
        method.clickOnElement(loginLocators.loginButton);
    }
    logInWithInvalidCredential(email, password) {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.typeText(loginLocators.emailField,email);
        method.typeText(loginLocators.passwordField, password);
        method.clickOnElement(loginLocators.loginButton);
        method.assertTextAnyWhereInViewPort(loginLocators.errorMessageText)
    }
    signUpNavigationCheck() {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.clickOnElement(loginLocators.signUpLink);
    }
} export default adminlogin