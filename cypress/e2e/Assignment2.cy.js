import saucelogin from '../POM_Assignment2/Logincred.json'
import Products from '../POM_Assignment2/Products'
const Product = new Products()
describe('Loginto Saucedemo account',()=>{
    before('URL',()=>{
        Product.navigateToLoginUrl()
    })
    it('Check the item with high price',()=>{
        //login
        cy.get('[data-test="username"]').type(saucelogin.Username)
        cy.get('[data-test="password"]').type(saucelogin.Password)
        cy.get('#login-button').click()
        //Products page
        const title=cy.get('.product_label')
        cy.log(title)
       Product.Dropdownlowtohigh()
       Product.choosinghighrateproduct()
       Product.addtocart()
       Product.checkout()
       Product.checkoutdetails()
       Product.submit()
       Product.Successmsg()
    })
})