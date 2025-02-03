import logindata from '../fixtures/Assignment1.json'
import {login,loginarray} from '../support/commands'
let a=logindata.name+Math.random()
describe('signup and create new account',()=>{
    before('URL',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('.fa.fa-lock').click()
    })
    it('signup and create new account',()=>{
       cy.get('[data-qa="signup-name"]').type(logindata.name)
        cy.get('[data-qa="signup-email"]').type(a+"@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.wait(2000)
        cy.get('[id="id_gender2"]').check()
        cy.get('[data-qa="password"]').type(logindata.password)
        cy.get('[data-qa="days"]').select(1)
        cy.get('[data-qa="months"]').select(5)
        cy.get('[data-qa="years"]').select(9)
        cy.get('[name="optin"]').check()
        cy.get('[data-qa="first_name"]').type(logindata.fName)
        cy.get('[data-qa="last_name"]').type(logindata.lName)
        cy.get('[data-qa="company"]').type(logindata.Company)
        cy.get('[data-qa="address"]').type(logindata.address)
        cy.get('[data-qa="address2"]').type(logindata.address)
        cy.get('[data-qa="country"]').select(logindata.Country)
        cy.get('[data-qa="state"]').type(logindata.State)
        cy.get('[data-qa="city"]').type(logindata.State)
        cy.get('[data-qa="zipcode"]').type(logindata.Zipcode)
        cy.get('[data-qa="mobile_number"]').type(logindata.MobileNo)
        cy.get('[data-qa="create-account"]').click()
       //Verify msg
        cy.get(`.title.text-center`).then((txt) => {
            const txtValue =  txt.text()
            expect(txtValue).equals('Account Created!')})
      
    })
    it('Login and add to cart',()=>{
    cy.intercept('GET','/view_cart').as('ViewCart')
    cy.login()
    cy.get(':nth-child(12) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('[href="/view_cart"]').eq(0).click()
    cy.wait('@ViewCart').its('response.statusCode').should('eq',200)
    //cy.wait('@ViewCart').its('response.requestURL')
    cy.get('.btn.btn-default.check_out').click()
    cy.wait(2000)
    cy.get('.btn.btn-default.check_out').click()
    cy.get('[data-qa="name-on-card"]').type(logindata.name)
    cy.get('[data-qa="card-number"]').type('4321567890')
    cy.get('[data-qa="cvc"]').type('311')
    cy.get('[data-qa="expiry-month"]').type('11')
    cy.get('[data-qa="expiry-year"]').type('2025')
    cy.get('[data-qa="pay-button"]').click()
 //Verify msg
        cy.get('.title.text-center').then((txt) => {
     const txtValue =  txt.text()
     expect(txtValue).equals('Order Placed!')})

    })
    it('uncaught exp',()=>{
    cy.visit('/login')
        cy.on("uncaught:exception", (e, runnable) => {
            cy.log("error", e);
            cy.log("runnable", runnable);
            return false;
            })
                cy.loginarray(logindata.InValid_uname,logindata.InValid_pwd)
                cy.wait(2000)
                cy.get('.login-form > form > p').should('be.visible')
               

            
        
    })
    it('alerts',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[onclick="displayAlert()"]').click()
        cy.on('window:alert', (text) => {
            expect(text).contains('Hello , share this practice page and share your knowledge')
        })
       cy.get('#opentab').invoke('attr','target','_self').click()
       cy.url().should('include','https://www.qaclickacademy.com')
       cy.get('.button > .main-btn').should('have.text','Access all our Courses')
       cy.go(-1)
       cy.wait(5000)
       cy.frameLoaded('#courses-iframe')
       cy.iframe().find('.navigation.clearfix > li >a[href="mentorship"]').should('have.text','MentorshipMentorship')
           cy.iframe().find('.navigation.clearfix > li >a[href="mentorship"]').first().click()


    })
   
    })
