import userData from '../fixtures/test1.json'
import {logout,Delete} from '../support/logoutdelete.js'
describe('logout custom commands', () => {
    
    it('logout custom commands',() => {
        cy.logout(userData.email,userData.password)
    })
    it.only('Delete custom commands',(email,password)=>{
        cy.Delete(email,password)
    })
})