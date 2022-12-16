/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
import { loginPage } from "../../cypress/page_objects/login";
import { addOranizationPage } from "../../cypress/page_objects/addOrganization";
import { addBoardPage } from "../page_objects/addBoard";

describe("create organization test", () => {
    const organizationName = faker.name.lastName();
    const boardTitle = faker.lorem.word(5);

  before("log into the app and create organization", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("userEmail"), Cypress.env("userPassword"));

    cy.url().should("include", "/my-organizations");
    addOranizationPage.myOrganizationsTitle
      .should("be.visible")
      .and("have.text", "My Organizations");
    addOranizationPage.addOrganizationButton.click();
    addOranizationPage.addOrganization(organizationName);

  });

  it("create board with valid data", () => {
    addBoardPage.boardButton.click();
    addBoardPage.addBoard(boardTitle);
  });

    
});