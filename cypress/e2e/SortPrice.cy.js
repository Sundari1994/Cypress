//Swag Labs - sort the cost values from low to high --assignment of 4th Jan
describe('Sort cost', () => {
    before('url',()=>{
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
    })
    it('Sort Cost ',() => {
        var count =0
        cy.get('.inventory_item_name').invoke("text").each((item) => {
             count++
      })
            
        cy.get('.inventory_item_name').invoke("text").then((text) => {
            cy.log("Count: " + count + ", Text: " + text)
        })
        cy.get('.inventory_item_price').invoke("text").then((text) => {
            cy.log("Count: " + count + ", Price: " + text)
        })

    })
})