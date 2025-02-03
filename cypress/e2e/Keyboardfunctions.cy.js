describe('keyboard functions',()=>{
    it('Keyboard',()=>{
        cy.visit('/login')
        //let a ='Username'+Math.random()
        let b ='sundu'
        cy.get('[data-qa="login-email"]').type('parrot.tps3@gmail.com')
        cy.get('[data-qa="login-password"]').type(b,'{enter}')  
        cy.get('.fa.fa-home').type('{home}')
        
    })
})