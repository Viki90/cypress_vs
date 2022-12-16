/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
import { loginPage } from "../../cypress/page_objects/login";
import { addOranizationPage } from "../../cypress/page_objects/addOrganization";
import { addBoard } from "../page_objects/addBoard";

describe("create organization test", () => {

  before("log into the app and create organization", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("userEmail"), Cypress.env("userPassword"));

    cy.url().should("include", "/my-organizations");
    addOranizationPage.myOrganizationsTitle
      .should("be.visible")
      .and("have.text", "My Organizations");
    addOranizationPage.addOrganizationButton.click();
    addOranizationPage.addOrganization(faker.name.lastName());
  });

  it("create board with valid data", () => {

    });

    
});