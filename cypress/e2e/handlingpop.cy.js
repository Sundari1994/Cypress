
describe('form Validation',()=>{
    it('handle pop',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title()
        cy.get('#name').type('Sundari').should('have.value','Sundari')
        cy.get('#email').type('parrot.tps@gmail.com').should('have.value','parrot.tps@gmail.com')
        cy.get('#phone').type('987654321').should('have.value','987654321')
        cy.get('#textarea').type('no.13,yella street,kindy,dus-3456789').should('have.value','no.13,yella street,kindy,dus-3456789')
        cy.get('#female').check().should('be.enabled')
        cy.get(`#sunday`).check().should('be.enabled')
        cy.get(`#monday`).check().should('be.enabled')
        cy.get(`#thursday`).check().should('be.enabled')
        cy.get(`#country`).select(`Canada`).should('have.value','canada')
        cy.get(`#colors`).select(0).should('have.focus','Red')
        cy.get(`#colors`).select('Green').should('have.focus','Green')
        cy.get(`#colors`).select('Blue').should('have.focus','Blue')
        cy.get(`#animals`).select([2,0,3]).invoke('val').should('deep.equal',['cat','deer','dog'])
        //date-picker1 method 1
        cy.get(`#datepicker`).click().type('10/09/2024').should('have.value','10/09/2024')
        //date-picker1 prev
        cy.get(`#datepicker`).click()
        cy.get(`[data-handler="prev"]`).click()
        cy.get('[data-date="27"]').click()
        cy.get(`#datepicker`).should('have.value','09/27/2024')
        //date-picker1 next
        cy.get(`#datepicker`).click()
        cy.get(`[data-handler="next"]`).click()
        cy.get(`[data-handler="next"]`).click()
        cy.get('[data-date="27"]').click()
        cy.get(`#datepicker`).should('have.value','11/27/2024')
        //date-picker:2
        cy.get(`#txtDate`).click()
        cy.get(`[data-handler="selectMonth"]`).select('Jun')
        cy.get('[data-handler="selectYear"]').select(3)
        cy.get('[data-date="10"]').click()
        cy.get(`#txtDate`).should('have.value','10/06/2018')
        //datepicker 3 method 1
        cy.get(`#start-date`).click().type('1994-10-27')
        cy.get(`#start-date`).should('have.value','1994-10-27')
        cy.get(`#end-date`).click().type('2025-01-10')
        cy.get(`#end-date`).should('have.value','2025-01-10')
        //Submit
    cy.get('.submit-btn').click()
    cy.get('#result').contains('You selected a range of 11033 days.')
          
    })
})