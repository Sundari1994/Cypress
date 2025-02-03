describe('shadow DOM',()=>{
    beforeEach(()=>{
        cy.visit('https://practice.expandtesting.com/shadowdom')
    })
    it('Shadow DOM ',()=>{
        //usual button
        cy.get(`.btn.btn-primary.mb-2`).should('be.visible')
        cy.get(`.btn.btn-primary.mb-2`).click()
        //Shadow button
        cy.get('#shadow-host').shadow().find('button').should('have.text','This button is inside a Shadow DOM.')
    })
})