import AdminForgetPassword from "../Pages/AdminForgetPasswordPage";
describe("Admin forget password test", () => {
    const adminForgetPasswordPage = new AdminForgetPassword();
    let forgetPasswordData;
    beforeEach(() => {
        cy.visit(Cypress.env("adminLoginUrl"));
        adminForgetPasswordPage.navigateToForgetPasswordPage();
        cy.fixture('forgetPasswordPageData.json').then((data) => {
            forgetPasswordData = data;
        });
    });
    it("Test successful navigation to forget password page", ()=> {
        adminForgetPasswordPage.testSuccessfulNavigationToForgetPasswordPage();
    });
    it("Test Forget password with blank field", ()=> {
        adminForgetPasswordPage.testForgetPasswordWithBlankInputField();
    });
    it("Test forget password with incomplete email", ()=> {
        adminForgetPasswordPage.testForgetPasswordWithIncompleteEmail(forgetPasswordData.IncompleteAdminEmail);
    });
    it("Test Forget password with existing Admin valid email", ()=> {
        adminForgetPasswordPage.testForgetPasswordWithExistingAdminValidEmail(forgetPasswordData.validAdminEmail);
    });
    it("Test Forget password with student email", ()=> {
        adminForgetPasswordPage.testForgetPasswordWithStudentEmail(forgetPasswordData.studentEmail);
    });
});