describe('Logout and Delete Account', () => {
    it('Logout ',() => {
       cy.visit('/login')
       //let a ='Username'+Math.random()
       let b ='sundu'
       cy.get('[data-qa="login-email"]').type('parrot.tps3@gmail.com')
       cy.get('[data-qa="login-password"]').type(b)  
       cy.get('[data-qa="login-button"]').click()
       cy.get(':nth-child(10) > a').contains("Logged in as sundu")
       let c=cy.get('.shop-menu > .nav > :nth-child(4) > a').contains("Logout")
       cy.get('.shop-menu > .nav > :nth-child(5) > a').contains("Delete Account")
       c.click()

    })
    it.only('Delete Account ',() => {
        cy.visit('/login')
        //let a ='Username'+Math.random()
        let b ='sundu'
        cy.get('[data-qa="login-email"]').type('parrot.tps4@gmail.com')
        cy.get('[data-qa="login-password"]').type(b)  
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').contains("Logged in as sundu")
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains("Logout")
        let d=cy.get('.shop-menu > .nav > :nth-child(5) > a').contains("Delete Account")
        d.click()
 
     })
})