const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log(message) {
          console.log(`Soy el console log del task ${message}`);
          return null;
        },
      });
    },
    baseUrl: "https://demoqa.com",
  },
  chromeWebSecurity: false,
});
