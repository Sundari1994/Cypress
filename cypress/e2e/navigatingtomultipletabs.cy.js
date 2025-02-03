describe('navigating to multiple tabs',()=>{
it('multiple tabs method1 by removing the target value',()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example > a').invoke('removeAttr','target').click()
    cy.url().should('include','/windows/new')
    cy.get('h3').should('have.text','New Window')
    cy.reload()
    cy.go('back')
})
it('multiple tabs method1 by replacing the target value',()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example > a')
       .invoke('attr','target','_self').click()
    cy.url().should('include','/windows/new')
    cy.get('h3').should('have.text','New Window')
    cy.go(-1)
})
it('multiple tabs method1 by replacing the target value',()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example > a').then(tab=>{
       const newtab= tab.prop("href")
       cy.visit(newtab)
    cy.url().should('include','/windows/new')
   cy.get('h3').should('have.text','New Window')
    cy.go(-1)
    cy.go('forward')
})
})
})