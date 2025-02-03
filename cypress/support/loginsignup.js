
export const loginMethod=(email,pwd)=>{//anonymous function
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(pwd)  
    cy.get('[data-qa="login-button"]').click()
}
export const Signup=()=>{
    cy.visit('/login')
    cy.url().should('include','automationexcercise')
    cy.get('[alt="website for automation practice"]').invoke('attr','src').then((imgsrc)=>{
        expect(imgsrc).contains('/static/images/home/logo')
    } )
    //click on signup
    cy.get('a[href="/login"]').should('be.visible').invoke('text').then((signupvalue)=>{
        console.log(signupvalue)
    })

}
export const iFrameMethod = (iframeBody) => {
 
 
    cy.get(iframeBody).its('0.contentDocument.body').should('not.be.empty').then(() => {
       return (cy.wrap())
    })
}
