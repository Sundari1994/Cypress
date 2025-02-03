Cypress.Commands.add('nologin',(search,cartquantity)=> {
    cy.session([search,cartquantity],()=>
    {    
        cy.visit('/')
        cy.get('a[href="/products"]').click()
        cy.get('#search_product').type(search)
        cy.get('#submit_search').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        let a = cy.get('#product-2 > .cart_quantity > .disabled').invoke('text')
        let b= cy.get('#product-7 > .cart_quantity > .disabled').invoke('text')
   
        var cart_quantity = a+b
        cy.log(cart_quantity);
    
     })
    
})