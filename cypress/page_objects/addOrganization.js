class AddOrganizationPage {

    get myOrganizationsTitle() {
        return cy.get("header").find("span").first();
    }

    get addOrganizationButton() {
        return cy.get(".vs-c-media__body").last();
    }

    get organizationNameInput() {
        return cy.get("input").eq(0);
    }

    get nextButton() {
        return cy.get('[name="next_btn"]');
    }

    get okButton() {
        return cy.get('.vs-c-modal--features-button > .vs-c-btn');
    }


    addOrganization(name) {
        this.organizationNameInput.type(name);
        this.nextButton.click();
        this.nextButton.click();
        this.okButton.click();
    }
}

export const addOranizationPage = new AddOrganizationPage();