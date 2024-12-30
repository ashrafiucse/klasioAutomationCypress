export function typeText(xpath, text) {
    cy.xpath(xpath).type(text);
}
export function clickOnElement(xpath) {
    cy.xpath(xpath).click();
}
export function verifyTitle(expectedTitle) {
    cy.title().should('eq', expectedTitle);
}
export function wait() {
    return cy.wait(5000);
}
export function elementShouldVisible(xpath) {
    cy.xpath(xpath).should("be.visible");
}
export function selectCheckBox(xpath) {
    cy.xpath(xpath).check();
}
export function deselectCheckBox(xpath) {
    cy.xpath(xpath).uncheck();
}
export function assertTextAnyWhereInViewPort(message) {
    cy.contains(message).should("be.visible");
}