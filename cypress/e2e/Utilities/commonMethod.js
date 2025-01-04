export function getElement(selector) {
    // Check if the selector is an XPath (starts with //)
    const isXPath = selector.startsWith("//");
    
    // Return the element based on whether it's XPath or CSS selector
    return isXPath ? cy.xpath(selector) : cy.get(selector);
}

export function typeText(locator, text) {
    
    getElement(locator).type(text);
}
export function clickOnElement(locator) {
    getElement(locator).click();
}
export function verifyTitle(expectedTitle) {
    cy.title().should('eq', expectedTitle);
}
export function wait() {
    return cy.wait(5000);
}
export function elementShouldBeVisible(locator) {
    getElement(locator).should("be.visible");
}
export function selectCheckBox(locator) {
    getElement(locator).check();
}
export function deselectCheckBox(locator) {
    getElement(locator).uncheck();
}
export function textVisibleAnywhereInWebpage(message) {
    cy.contains(message).should("be.visible");
}
export function elementShouldHaveAttribute(locator,attribute,value) {
    getElement(locator).should('have.attr',attribute,value);
}
export function urlShouldContainText(text) {
    cy.url().should('include', text);
}
export function textShouldNotBeVisible(text) {
    cy.contains(text).should('not.exist');
}