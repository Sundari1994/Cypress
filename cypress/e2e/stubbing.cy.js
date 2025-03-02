describe('stubbing', () => {
        it('POST',()=>{
            cy.intercept('POST','https://automationexercise.com/api/searchProduct',{limit: 3,"name": "cypress test"}).as('searchProduct')
           cy.get('@searchProduct')
     
        })
        it('POST',()=>{
            cy.intercept('POST','https://automationexercise.com/api/searchProduct',{feature: 'mock.json'}).as('searchProduct')
           // cy.wait('@searchProduct')
     
        })
     
        it.only('PUT',()=>{
            cy.intercept(' https://automationexercise.com/api/updateAccount',{fixture: '../fixtures/mock.json'}).as('user')
            cy.get('@user')
            .its('response.name')
            .should('eq', 'cypress test')
     
        })
    })    