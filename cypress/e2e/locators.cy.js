describe("Tipos de localizadores", () => {
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

  it("Obtener elementos por medio de un tag", () => {
    cy.get("input");
    //Obtiene todas las etiquetas input
  });

  it("Obtener elementos por medio de un atributo", () => {
    cy.get('[placeholder="First Name"]');
    //Obtiene los elementos con placeholder igual a "First Name"
  });

  it("Obtener elementos por medio de un atributo y un tag", () => {
    cy.get('input[placeholder="First Name"]');
    //Obtiene los inputs con placeholder igual a "First Name"
  });

  it("Obtener elementos por medio de un id", () => {
    cy.get("#firstName");
    //Obtiene los elementos con id igual a "firstName"
  });

  it("Obtener elementos por medio de un class", () => {
    cy.get(".mr-sm-2.form-control");
    //Obtiene los elementos con class igual a ".mr-sm-2.form-control"
  });

  it("Usando contains", () => {
    cy.contains("Reading");
    //obtiene los elementos con el contenido "Reading"
    cy.contains(".header-wrapper", "Widgets");
    //Obtiene los elementos con class igual .header-wrapper y que contengan el texto "Widgets"
  });

  it("Usando parent", () => {
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
});
