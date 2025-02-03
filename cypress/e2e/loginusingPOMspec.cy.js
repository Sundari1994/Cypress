import Login  from '../Pageobjectmodel/loginPage'

describe('Implementing login using POM', () => {

    const login = new Login()

    beforeEach(() => {
        cy.fixture('../fixtures/test1.json').then(function(loginTestData) {
            this.loginTestData = loginTestData
        })
    })

    it.only('Launching login url', () => {
        login.navigateToLoginUrl()
        validatePageUrl()
    })
    it('Enter login username & password', function () {
        login.setUsername(this.loginTestData.email)
        validateUsername()
    })
    it('Launching login url', () => {
        login.setPassword()
        validatePassword()
    })
    it('Launching login url', () => {
        login.submit()
        submit()
    })


    function validatePageUrl(){
        cy.url().should('include','/login')
    }

    function validateUsername(){
        cy.get('[data-qa="login-email"]')
        .should('be.visible')
        .should('have.value', this.loginTestData.email)
    }

    function validatePassword(){
        cy.get('[data-qa="login-password"]')
        .should('be.visible')
        .should('have.value', this.loginTestData.password)
    }

    function submit(){
        cy.get('[data-qa="login-button"]')
        .should('be.visible')
        .should('have.text', 'Submit')
    }
})