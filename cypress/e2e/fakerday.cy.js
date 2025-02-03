import { faker } from '@faker-js/faker'; 
const dayjs = require("dayjs");

describe('Faker and date functions',()=>{

beforeEach(()=>{
    cy.visit('https://vinothqaacademy.com/demo-site/')
})
it('faker',()=>{
   
    const firstname = faker.person.firstName() 
    const lastname= faker.person.lastName()
    const email = faker.internet.email()
    const Address=faker.location.city()
    const Number= faker.number.int({max:99},{min:10})
     const todaysDate = dayjs().format("MMM DD, YYYY");
    cy.get('#vfb-5').type(firstname)
    cy.get('#vfb-7').type(lastname)
    cy.get('#vfb-31-2').check()
    cy.get('#vfb-13-address').type(Address)
    cy.get('#vfb-18').type(todaysDate)
    cy.get('#vfb-13-address-2').type(Address)
    cy.get('#vfb-14').type(email)
    cy.get('#vfb-3').type(Number)  
    cy.get('#vfb-4').click()
})
})