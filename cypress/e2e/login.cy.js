/// <reference types="Cypress" />

import { loginPage } from "../../cypress/page_objects/login";

describe("login test", () => {
    before("visit vivify scrum", () => {
        cy.visit("/login");
        loginPage.loginHeading.should('be.visible').and('have.text', 'Log in with your existing account');
    });

    it("login with valid credentials", () => {
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        ).as("successfullLogin");

        loginPage.login(Cypress.env("userEmail"), Cypress.env("userPassword"));

        cy.wait("@successfullLogin").then(interception => {
            console.log("interception", interception);
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.body.token).to.exist;
        });
        cy.url().should("not.include", "/login");
    });
});