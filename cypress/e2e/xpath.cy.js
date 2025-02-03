import { faker } from "@faker-js/faker"
const personname =faker.person.firstName()+" "+faker.person.lastName()
const emailid = faker.internet.email()
const password = faker.internet.password()
const fName = faker.person.firstName()
const lName = faker.person.lastName()
const add = faker.location.streetAddress()
const companyy = faker.company.name()
const Country = faker.location.country()
const state = faker.location.state()
const City = faker.location.city()
const Zipcode = faker.location.zipCode()
const MobileNo = faker.phone.number()
describe('signup and create new account using xpath and faker details',()=>{
    before('URL',()=>{
        cy.visit('/login')  
    })
    it('signup and create new account using xpath and faker details',()=>{
        
       cy.xpath('//input[@name="name"]').type(personname)
       cy.xpath('//input[@data-qa="signup-email"]').type(emailid)
       cy.xpath('//button[text()="Signup"]').click()
        cy.wait(2000)
        cy.xpath('//input[@id="id_gender2"]').check()
        cy.xpath('//input[@data-qa="password"]').type(password)
        cy.xpath('//select[@data-qa="days"]').select(1)
        cy.xpath('//select[@data-qa="months"]').select(5)
        cy.xpath('//select[@data-qa="years"]').select(9)
        cy.xpath('//input[@name="optin"]').check()
        cy.xpath('//input[@data-qa="first_name"]').type(fName)
        cy.xpath('//input[@data-qa="last_name"]').type(lName)
        cy.xpath('//input[@data-qa="company"]').type(companyy)
        cy.xpath('//input[@data-qa="address"]').type(add)
        cy.xpath('//input[@data-qa="address2"]').type(add)
        cy.xpath('//select[@data-qa="country"]').select(5)
        cy.xpath('//input[@data-qa="state"]').type(state)
        cy.xpath('//input[@data-qa="city"]').type(City)
        cy.xpath('//input[@data-qa="zipcode"]').type(Zipcode)
        cy.xpath('//input[@data-qa="mobile_number"]').type(MobileNo)
        cy.xpath('//button[@data-qa="create-account"]').click()
       //Verify msg
       cy.xpath(`//h2[@data-qa="account-created"]`).then((txt) => {
           const txtValue =  txt.text()
        expect(txtValue).equals('Account Created!')})
      

      
    })
})