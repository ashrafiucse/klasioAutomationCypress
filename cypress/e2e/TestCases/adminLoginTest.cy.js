import AdminLoginPage from "../Pages/adminLoginPage"
describe('Login Page Tests', () => {
    const adminLoginPage = new AdminLoginPage();
    beforeEach(() => {
        cy.visit(Cypress.env('adminLoginUrl'));
    });
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

    it('SignUp Link Navigation Check', () => {
        adminLoginPage.signUpNavigationCheck();
    })
});