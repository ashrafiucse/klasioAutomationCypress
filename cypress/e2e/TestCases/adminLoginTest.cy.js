import AdminLoginPage from "../Pages/AdminLoginPage"
describe('Login Page Tests', () => {
    const adminLoginPage = new AdminLoginPage();
    beforeEach(() => {
        cy.visit(Cypress.env('adminLoginUrl'));
    });
    it('Test successfull navigation to Login page', () => {
        adminLoginPage.testSuccessfulNavigationToLoginPage();
    });

    it('Admin Login with blank input field', () => {
        adminLoginPage.testLoginWithBlankInputFields();
    }
)
    it('Admin login with valid credential', () => {
        cy.fixture('logInCredentials.json').then((data) => {
            adminLoginPage.logInWithValidCredential(data.validAdminEmail, data.validAdminPassword);
        })
    });

    it('Admin Login test with invalid credential', () => {
        cy.fixture('logInCredentials.json').then((data) => {
            adminLoginPage.logInWithInvalidCredential(data.invalidAdminEmail, data.invalidAdminPassword);
        })
    })
    it('Password field masking checking', () => {
        const locator = require('../Locators/adminLoginPage.json')
        cy.fixture('logInCredentials.json').then((data) => {
            adminLoginPage.testPasswordFieldMasking(data.validAdminPassword);
            cy.get(locator.passwordField).should('have.value', data.validAdminPassword).then(($input) => {
                expect($input[0].type).to.equal('password');
            });
        })
    })

    it('SignUp page link navigation check', () => {
        adminLoginPage.signUpPageNavigationCheck();
    })
    it('Forget password page link navigation check', () => {
        adminLoginPage.forgetPasswordPageNavigationCheck();
    })
});