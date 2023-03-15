describe("Navigation", () => {
  it("Navegar a nuestra primera pagina", () => {
    cy.visit("https://www.platzi.com/");
  });

  it("Recargar la pagina", () => {
    cy.reload();
  });

  it("Recargar pagina de forma forzada", () => {
    cy.visit("https://www.platzi.com/");
    cy.reload(true);
  });

  it("Navegar hacia atras ", () => {
    cy.visit("https://www.google.com/");
    cy.visit(
      "https://www.google.com/search?q=platzi&sxsrf=AJOqlzXzCKPekr6BP5b_EHll1blano5eow%3A1677102249105&source=hp&ei=qYz2Y4m2A6OzkvQPzriGgA0&iflsig=AK50M_UAAAAAY_aauWBdrTQRcaTcPkB-3dQbPuwEBGlB&ved=0ahUKEwjJrrrejKr9AhWjmYQIHU6cAdAQ4dUDCAg&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBENEDMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgQILhAnOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6EwguEIAEELEDEIMBEMcBENEDEAo6EAguEIAEELEDEIMBENQCEAo6CAgAELEDEIMBOgcIABCABBAKUPIGWMsXYI8baAFwAHgAgAGlAYgB8waSAQMwLjaYAQCgAQGwAQo&sclient=gws-wiz"
    );
    cy.go("back");
  });
});
