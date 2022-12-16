class LoginPage {
    
    get loginHeading() {
        return cy.get("h1");
    }

    get emailInput () {
        return cy.get(".el-input__inner").eq(0);
    }

    get passwordInput() {
        return cy.get(".el-input__inner").eq(1);
    }

    get loginButton() {
        return cy.get("button.vs-c-btn.vs-c-btn--lg");
    }

    get okModal() {
        cy.get('.vs-c-modal--features-button > .vs-c-btn');
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
}

export const loginPage = new LoginPage;