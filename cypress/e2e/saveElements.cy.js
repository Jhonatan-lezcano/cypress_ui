describe("Guardando elementos", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Repetición", () => {
    cy.visit("/automation-practice-form");
    //Obteniendo el elemento padre
    cy.get('input[placeholder="First Name"]').parent();
    //Obteniendo los elementos padre
    cy.get('input[placeholder="First Name"]').parents();
    //Obtener las etiquetas label a partir de los padres del input
    cy.get('input[placeholder="First Name"]').parents().find("label");
    //Nota: La función find necesita estar concatenada a un elemento del DOM para su correcto
    //funcionamiento

    //Lo mismo que la busqueda anterior pero con más sentido, ya que estoy buscando las etiquetas label
    //que esten dentro de la etiqueta form
    cy.get("form").find("label");
  });

  it("evitar repetición", () => {
    cy.visit("/automation-practice-form");
    //Obteniendo el elemento padre
    cy.get('input[placeholder="First Name"]')
      .parents("form")
      .then(form => {
        //El .then me devuelve un elemento de jquery que es diferente a un elemento de cypress

        //Estoy guardando en constantes las busquedas
        const inputs = form.find("input");
        const divs = form.find("div");
        const labels = form.find("label");

        //Aserción con sintaxis jquery, si no estoy mal xD
        expect(inputs.length).to.equal(15);
        //wrap envuelve un elemento jquery y ya podemos usar la sintaxis de cypress
        cy.wrap(inputs).should("have.length", 15);
        expect(divs.length).to.equal(70);
        expect(labels.length).to.equal(16);
      });
    cy.get("form").find("label");
  });
});
