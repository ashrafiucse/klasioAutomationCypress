class Adminlogin {
    testSuccessfulNavigationToLoginPage() {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.elementShouldBeVisible(loginLocators.emailField);
        method.elementShouldBeVisible(loginLocators.passwordField);
    }
    testLoginWithBlankInputFields() {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.clickOnElement(loginLocators.loginButton);
        method.textVisibleAnywhereInWebpage(loginLocators.emailFieldRequiredMsg);
        method.textVisibleAnywhereInWebpage(loginLocators.passwordFieldRequiredMsg);
    }
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
        method.textVisibleAnywhereInWebpage(loginLocators.errorMessageText)
    }
    testPasswordFieldMasking(password) {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.typeText(loginLocators.passwordField, password);
        method.elementShouldHaveAttribute(loginLocators.passwordField,'type','password');
    }
    signUpPageNavigationCheck() {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.clickOnElement(loginLocators.signUpLink);
        method.textVisibleAnywhereInWebpage("Unlock a world of knowledge and endless teaching possibilities.");
    }

    forgetPasswordPageNavigationCheck() {
        const loginLocators = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.clickOnElement(loginLocators.forgetPasswordLink);
        method.textVisibleAnywhereInWebpage("Enter your email and we will send you a password reset link.");
    }
} export default Adminlogin