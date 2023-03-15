describe("Tipos de localizadores", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  beforeEach(() => {
    cy.visit("/automation-practice-form");
  });

  it("Obtenerlo por medio de un tag", () => {
    cy.get("input");
  });

  it("Obtenerlo por medio de un atributo", () => {
    cy.get('[placeholder="First Name"]');
  });

  it("Obtenerlo por medio de un atributo y un tag", () => {
    cy.get('input[placeholder="First Name"]');
  });

  it("Obtenerlo por medio de un id", () => {
    cy.get("#firstName");
  });

  it("Obtenerlo por medio de un class", () => {
    cy.get(".mr-sm-2.form-control");
  });

  it("Usando contains", () => {
    cy.contains("Reading");
    cy.contains(".header-wrapper", "Widgets");
  });
});
