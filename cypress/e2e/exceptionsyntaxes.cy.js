describe("Display Error on wrong credentials", () => {
//Caused by Test Failures   
    it("Test Failure when trying to find incorrect locator - error message", () => {
      cy.on("fail", (err, runnable) => {
        cy.log(err.message)
        cy.log(runnable.message)
        return false
      })
      cy.viewport(400,507)
      cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
      cy.get("input[name=email]").type("test@example.com")
      cy.get("input[name=password]").type("incorrectpassword")
      cy.get('[value="Login"]').click()
      cy.get(".error-message").should("be.visible")
    })
    //calling api for staus codes
    it("Fail on status code by calling api", () => {
        cy.request(
        {url:"https://ecommerce-playground.lambdatest.io/index.php?route=account/login/1",
             failOnStatusCode: false })  
        })
    //Caused by Unexpected Status Codes
    it("Fail on status code", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login/1", {
          failOnStatusCode: false
        })
    })
    //Caused by the Application
    it("displays an error message when the password is incorrect", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com")
        cy.get('[id="input-password"]').type("Cypress1234!!")
        cy.get('[value="Login"]').click()
        cy.get(".alert.alert-danger.alert-dismissible").should("be.visible")
      })
      
    })
    describe("Cypress Exception Handling", () => {
        it("Uncaught Exception - Due to application error", () => {
        cy.on("uncaught:exception", (e, runnable) => {
        cy.log("error", e);
        cy.log("runnable", runnable);
        return false;
        });
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get(':nth-child(1) > button').click();
        cy.get('#result')
        cy.wait(1000);
        })
        })
  
