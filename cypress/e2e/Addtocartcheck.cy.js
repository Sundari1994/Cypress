import userData from '../fixtures/test1.json'
import { login } from '../support/commands.js'
describe('Add to cart Checkout check and verify', () => {
  it('Addtocartcheckout check',() => {
    //cy.login()
    // cy.login("parrot.tps2@gmail.com","sundu")       
     cy.login(userData.email,userData.password)
     for (let i = 0; i < 40; i++){
        cy.get('.btn.btn-default.add-to-cart').eq(i).contains('Add to cart')
       }
       cy.visit('/view_cart')
       cy.get('.disabled').contains(1)
        cy.get('.btn.btn-default.check_out').click()
       cy.get('.address.item.box').contains('Ganapathy')
       cy.get('.address.alternate_item.box').contains('Your billing address')
  })
})