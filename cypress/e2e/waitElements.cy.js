/// <reference types="cypress" />

describe("Esperando por elementos", () => {
  beforeEach(() => {
    cy.visit("https://platzi.com/");
  });

  it("Esperar por un tiempo definido", () => {
    cy.wait(5000);
  });

  it("Esperar por un elemento", () => {
    cy.get(
      ".Nav-header-mobileCtas > .Nav-header-mobileCtas-actions > .Nav-header-mobileCtas-actions--login",
      { timeout: 6000 }
    );
  });

  it("Esperar por un Elemento y hacer una aserción", () => {
    cy.get(
      ".Nav-header-mobileCtas > .Nav-header-mobileCtas-actions > .Nav-header-mobileCtas-actions--login",
      { timeout: 6000 }
    ).should("be.visible");
  });
});

describe("Esperando por elementos", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Deshabilitar el retry", () => {
    cy.get(":nth-child(3) > :nth-child(1) > .card-up", { timeout: 0 });
  });
});
