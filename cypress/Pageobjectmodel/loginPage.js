import loginData from '../fixtures/test1.json'
class Login{
    uName = '[data-qa="login-email"]';
    pwd = '[data-qa="login-password"]';
    submitBtn = '[data-qa="login-button"]'
    constructor(){
        this.textFields ={
            email : '[data-qa="login-email"]',
            password : '[data-qa="login-password"]'
        }
    }
    navigateToLoginUrl(){
        cy.visit('/login')
    }
    setUsername(email){

        // this.navigateToLoginUrl()
        cy.get(this.uName)
        .click()
        .clear()
        .type(email)
    }
    setUsernameUsingTHIS(){
        cy.get(this.textFields.password)
        .click()
        .clear()
        .type(loginData.email)
    }

    setPassword(){
        cy.get('[data-qa="login-password"]')
        .click()
        .clear()
        .type(loginData.password)  
    }

    submit(){
        cy.get('[data-qa="login-button"]')
        .should('be.visible')
        .invoke('text').then((submitBtnText) => {
            expect(submitBtnText).equals('Submit')
            .click()
        })
    }

}

export default Login;


