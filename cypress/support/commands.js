// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)  
    cy.get('[data-qa="login-button"]').click()
})*/
import logindata from '../fixtures/test1.json'
 Cypress.Commands.add('login', () => {
     cy.visit('/login')
     cy.get('[data-qa="login-email"]').type(logindata.email)
     cy.get('[data-qa="login-password"]').type(logindata.password)  
     cy.get('[data-qa="login-button"]').click() //submit
 })
 
import loginD from '../fixtures/Assignment1.json'
Cypress.Commands.add('loginarray', () => {
    
    cy.get('[data-qa="login-email"]').type(loginD.InValid_uname)
    cy.get('[data-qa="login-password"]').type(loginD.InValid_pwd)  
    cy.get('[data-qa="login-button"]').click()
   // cy.get('[.single-products > productinfo.text-center > a]').click()
})
Cypress.Commands.add('getiFrame', (iframeSelector) => {
    cy.get(iframeSelector)
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap);
  })


/*Cypress.Commands.add('login', (email,password) => {
   // cy.session([email,passwd])
    cy.visit('/login')
    cy.intercept('POST','/login').as('logincall')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)  
    cy.get('[data-qa="login-button"]').click()
    cy.wait('@logincall')
   // cy.get('[.single-products > productinfo.text-center > a]').click()
})*/
Cypress.Commands.add('loginsessionstorage', (email,password) => {
    cy.session([email,password],()=>
    {
     cy.visit('/login')
     cy.intercept('POST','/login').as('logincall')
     cy.get('[data-qa="login-email"]').type(email)
     cy.get('[data-qa="login-password"]').type(password)  
     cy.get('[data-qa="login-button"]').click()
     cy.wait('@logincall')
     cy.get(':nth-child(10) > a').contains("Logged in as sundu")
       let c=cy.get('.shop-menu > .nav > :nth-child(4) > a').contains("Logout")
       cy.get('.shop-menu > .nav > :nth-child(5) > a').contains("Delete Account")
       //c.click()
    // cy.get('[.single-products > productinfo.text-center > a]').click()
})
//,{cacheAcrossSpecs:true})

})

