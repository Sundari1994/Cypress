import userData from '../fixtures/test1.json'
import { loginMethod,Signup } from '../support/loginsignup.js'
describe('template spec', () => {
  it('Login with custom commands',() => {
    //cy.login()
    // cy.login("parrot.tps2@gmail.com","sundu")       
     cy.login(userData.email,userData.password)
})
it.only('Login with anonymous function',()=>{
      loginMethod(userData.email,userData.password)
})
})