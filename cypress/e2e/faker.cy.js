import { faker } from '@faker-js/faker'; 
it('faker',()=>{
    cy.visit('/login')
    const name = faker.person.firstName() +' '+faker.person.lastName()
    const email = faker.internet.email()
    const password= faker.internet.password()
   
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)  
    cy.get('[data-qa="login-button"]').click()
})