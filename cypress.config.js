const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://automationexercise.com/",
    chromeWebSecurity:false,
    watchForFileChanges:false,
    specPattern:'cypress/e2e/**/*.cy.js',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
     
      on('task', {downloadFile})
     
    },
  },
});

 
   
 
