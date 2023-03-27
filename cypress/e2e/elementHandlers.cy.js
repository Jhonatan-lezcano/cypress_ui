/// <reference types="cypress" />

describe("Interactuar con los elementos", () => {
  // beforeEach(() => {
  //   cy.visit("/buttons");
  // });

  it("click", () => {
    cy.get("button").eq(3).click();
    cy.get("#dynamicClickMessage")
      .should("be.visible")
      .and("contain", "You have done a dynamic click");
  });

  it("Double Click", () => {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("contain", "You have done a double click");
  });

  it("Right click", () => {
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("contain", "You have done a right click");
  });

  it.only("Input type text", () => {
    cy.visit("/automation-practice-form");
    cy.get("#firstName").type("jhonatan");
    cy.get("#lastName").type("Lezcano");
    cy.get("#userEmail").type("jhonatanlezcano.plv@gmail.com");
    cy.get("#firstName").clear().type("Yeison");
  });
});