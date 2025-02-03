describe('Fileupload',()=>{

    beforeEach(()=>{
        cy.visit('https://qa-automation-practice.netlify.app/file-upload.html')
    })
    
    it('fileupload',()=>{
     //upload
     cy.get('#file_upload').attachFile('example.json')
     cy.get('.btn.btn-primary').click()
     cy.get('#file_upload_response').contains('You have successfully uploaded')
     //download
     cy.visit('/')
     cy.downloadFile('https://automationexercise.com/static/images/home/girl2.jpg','downloads','success.jpg')
cy.downloadFile('https://practice.expandtesting.com/download/1737332440950_csv-microsoft-excel-example-file-upload.csv','downloads','downloadsuccess.pdf')
cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','downloads','example.jpg')
    })
})