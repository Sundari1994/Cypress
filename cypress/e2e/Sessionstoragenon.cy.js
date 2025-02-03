import {nologin} from '../support/sessionstore.js'
describe('No login Session storage', () => {
    var search="men"
    beforeEach(()=>{
        //cy.visit('/view_cart')
        cy.nologin(search)
    })
        it('Validation for testcases ',()=>{
            cy.visit('/')
            cy.get('a[href="/test_cases"]').should('be.visible').invoke('text').then((TestcaseBtnEnabled)=>{
                expect(TestcaseBtnEnabled).contains('Test Cases')

            })
        })
            it('Validation for  api testing',()=>{
                cy.visit('/')
                cy.get('a[href="/api_list"]').should('be.visible').invoke('text').then((ApitestBtnEnabled)=>{
                    expect(ApitestBtnEnabled).contains(' API Testing')
    
                })
            })
            it('checkout',()=>{
                cy.visit('/view_cart')
                cy.get('.btn.btn-default.check_out').click()
                cy.get('.modal-footer > .btn').click()           
    
                })
            })

    

       
            
        
        
