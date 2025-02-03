// try to access element that has multiple occurrences from the webpage.(View product)
// search with any keyword and get the list of items displayed (count and values printed) using both contains & equals
//import { expect } from 'chai'
import userData from '../fixtures/test1.json'
describe('Multiple and search', () => {
    it('Multiple occurances ',() => {
        cy.login(userData.email,userData.password)
        cy.get('.choose > ul > li > a').invoke("text")
        //text1.get.innertext()
         cy.get('.single-products').should('have.length.at.least', 40)
        for (let i = 0; i < 40; i++){
         cy.get('.single-products').find('.productinfo > h2').eq(i).contains(/Rs\.\s?\d+/)
        }
        var count = 0
        cy.get('.single-products').find('.productinfo > h2').each((item) => {
             count++
      })
            
             cy.get('.single-products').find('.productinfo > h2').invoke('text').then((text) => {
   //             expect($ele.text()).to.be.equal('')
 //               cy.get().text() // invoke('text')
 
             cy.log("Count: " + count + ", Text: " + text)
         })
})
})
