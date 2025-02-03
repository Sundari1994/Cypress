import loginData from '../fixtures/test1.json'
Cypress.Commands.add('logout', () => {
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type(loginData.email)
    cy.get('[data-qa="login-password"]').type(loginData.password)  
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').contains("Logged in as sundu")
    let c=cy.get('.shop-menu > .nav > :nth-child(4) > a').contains("Logout")
    cy.get('.shop-menu > .nav > :nth-child(5) > a').contains("Delete Account")
    c.click()

})
Cypress.Commands.add('Delete', () => {
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type("parrot.tps5@gmail.com")
    cy.get('[data-qa="login-password"]').type('sundu')  
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').contains("Logged in as sundu")
   cy.get('.shop-menu > .nav > :nth-child(4) > a').contains("Logout")
   let c=cy.get('.shop-menu > .nav > :nth-child(5) > a').contains("Delete Account")
    c.click()

})