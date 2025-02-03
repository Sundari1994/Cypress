
describe('Validate login by accessing inline fixture', () => {
    beforeEach(()=>{
        cy.fixture("test1.json").then(function(logintestdataobj){
            this.logintestdataobj=logintestdataobj//objectassigned to a variable
        })
        })
      it.only('Validate login by accessing it thro beforeeach hook',function(){
        cy.login(this.logintestdataobj.email,this.logintestdataobj.password)
        cy.wait(5000)
      })

    it("Validate login by accessing inline fixture", () => {
        cy.fixture("test1.json").then((testData) => {
            var uname = testData.email
            var passwd = testData.password
            cy.login(uname, passwd)
        })
        it("Validate multiple login by accessing inline fixture", () => {
            cy.fixture("test1.json").then((testData) => {
                var uname = testData.email
                var passwd = testData.password
                cy.login(uname["logindata"]["Valid Account"]["Valid uname"],
                       passwd["logindata"]["Valid Account"]["Valid pwd"])
            })
    })
    
   
    })
})
