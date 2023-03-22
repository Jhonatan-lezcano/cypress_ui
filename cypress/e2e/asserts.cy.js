describe("Aserciones", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  beforeEach(() => {
    cy.visit("/automation-practice-form");
    //El beforeEach ejecuta una instrucción para cata test, en este caso esta ejecutando la navegación
    //a la pagina en la que se van a hacer los tests
  });

  it("Asercion 1", () => {
    cy.visit("/automation-practice-form");
    //valida que la url incluya "demoqa.com", esto nos ayuda a verificar que estamos en la pagina
    //correcta
    cy.url().should("include", "demoqa.com");
    cy.get("#firstName")
      .should("be.visible")
      .and("have.attr", "placeholder", "First Name");
  });

  it("Asercion 2", () => {
    //valida que la url incluya "demoqa.com", esto nos ayuda a verificar que estamos en la pagina
    //correcta
    cy.url().should("include", "demoqa.com");
    cy.get("#firstName").then(element => {
      //El expect nos permite interactual con elementos que no son propios de cypress
      expect(element).to.be.visible;
      expect(element).to.have.attr("placeholder", "First Name");
    });
  });

  it("Asercion 3", () => {
    //valida que la url incluya "demoqa.com", esto nos ayuda a verificar que estamos en la pagina
    //correcta
    cy.url().should("include", "demoqa.com");
    cy.get("#firstName").then(element => {
      assert.equal(element.attr("placeholder"), "First Name");
    });
  });
});
