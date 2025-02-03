import userData from '../fixtures/test1.json'
describe('Session storage', () => {
    beforeEach(()=>{
        cy.loginsessionstorage(userData.email,userData.password)
        })

       it('Login with custom commands',()=>{
            cy.visit('/')
            cy.get('li > a > .fa.fa-user').should('be.visible').then(()=>{
                cy.get('b').invoke('text').then((loggedUserName)=>{
              expect(loggedUserName).equals(userData.name)
                })
            })
        })
        
        it('Validation for logout ',()=>{
            cy.visit('/')
            cy.get('a[href="/logout"]').should('be.visible').invoke('text').then((logoutBtnEnabled)=>{
                expect(logoutBtnEnabled).equals(' Logout')

            })
        })
            it('Validation for  delete',()=>{
                cy.visit('/')
                cy.get('a[href="/delete_account"]').should('be.visible').invoke('text').then((deleteAcctBtnEnabled)=>{
                    expect(deleteAcctBtnEnabled).equals(' Delete Account')
    
                })
            })
            
        })
        
