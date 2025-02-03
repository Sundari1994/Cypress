describe('methods of handling data in POST/PUT methods',() => {
    it.only('Direct data',()=>{
        cy.request({
            method : "POST",
            url: "https://automationexercise.com/api/searchProduct",
            form:true,   // if we are passing data as a form of form-data
            body:{
                'search-product' : 'tshirt'
            }
        }).then((res) => {
            const responseBody = JSON.parse(res.body)
            expect(responseBody).to.equals(200)
        })
    })
 
    it('Data through variable',()=>{
        const objData = {
            'search-product' : 'tshirt'
        }
        cy.request({
            method : "POST",
            url: "https://automationexercise.com/api/searchProduct",
            form:true,   // if we are passing data as a form of form-data
            body: objData
        }).then((res) => {
            const responseBody = JSON.parse(res.body)
            expect(responseBody).to.equals(200)
        })
    })
 
    it('data through fixture file',()=>{
        cy.fixture('/networkTestData').then((fixtureData) => {
            cy.request({
                method : "POST",
                url: "https://automationexercise.com/api/searchProduct",
                form:true,   // if we are passing data as a form of form-data
                body:fixtureData
            }).then((res) => {
                const responseBody = JSON.parse(res.body)
                expect(responseBody).to.equals(200)
            })
        })        
    })
 
})
 
