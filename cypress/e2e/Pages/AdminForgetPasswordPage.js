class AdminForgetPassword {
    navigateToForgetPasswordPage() {
        const locator = require("../Locators/adminLoginPage.json");
        const method = require("../Utilities/commonMethod");
        method.clickOnElement(locator.forgetPasswordLink);
    }
    testSuccessfulNavigationToForgetPasswordPage() {
        const method = require("../Utilities/commonMethod");
        method.urlShouldContainText("forgot-password");
        method.textVisibleAnywhereInWebpage("Enter your email and we will send you a password reset link.");
    }
    testForgetPasswordWithBlankInputField() {
        const locator = require("../Locators/adminForgetPasswordPage.json");
        const method = require("../Utilities/commonMethod");
        method.clickOnElement(locator.sendResetLinkButton);
        method.elementShouldBeVisible(locator.sendResetLinkButton);
        method.textVisibleAnywhereInWebpage("Enter your email and we will send you a password reset link.");
        method.textShouldNotBeVisible(locator.emailSentConfirmationText);
        method.textShouldNotBeVisible(locator.studentEmailWarningText);
    }
    testForgetPasswordWithIncompleteEmail(email) {
        const locator = require("../Locators/adminForgetPasswordPage.json");
        const method = require("../Utilities/commonMethod");
        method.typeText(locator.emailField,email);
        method.clickOnElement(locator.sendResetLinkButton);
        method.elementShouldBeVisible(locator.sendResetLinkButton);
        method.textVisibleAnywhereInWebpage("Enter your email and we will send you a password reset link.");
        method.textShouldNotBeVisible(locator.emailSentConfirmationText);
        method.textShouldNotBeVisible(locator.studentEmailWarningText);
    }
    testForgetPasswordWithExistingAdminValidEmail(email) {
        const locator = require("../Locators/adminForgetPasswordPage.json");
        const method = require("../Utilities/commonMethod");
        method.typeText(locator.emailField,email);
        method.clickOnElement(locator.sendResetLinkButton);
        method.elementShouldBeVisible(locator.sendResetLinkButton);
        method.textVisibleAnywhereInWebpage(locator.emailSentConfirmationText);
        method.textShouldNotBeVisible(locator.studentEmailWarningText);
    }
    testForgetPasswordWithStudentEmail(email) {
        const locator = require("../Locators/adminForgetPasswordPage.json");
        const method = require("../Utilities/commonMethod");
        method.typeText(locator.emailField,email);
        method.clickOnElement(locator.sendResetLinkButton);
        method.elementShouldBeVisible(locator.sendResetLinkButton);
        method.textVisibleAnywhereInWebpage(locator.studentEmailWarningText);
        method.textShouldNotBeVisible(locator.emailSentConfirmationText);
    }
} export default AdminForgetPassword