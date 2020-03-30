
describe ("Testing our User-Onboard form", function(){
    
    beforeEach(function (){
        cy.visit("http://localhost:3000")
    })

    it ("Add the tests for my inputs and submit", function(){
        // cy.pause()

        cy
        .get('input[name="name"]') // grab the input element with the name of name
        .type("Dino") // type in Dino in it
        .should('have.value', "Dino") // confirm that Dino is indeed a value inside

        cy
        .get('input[id="email"]') // grab the element by id
        .type('TuckerSlimShady@yahoo.com') // type in a certain email
        .should('have.value','TuckerSlimShady@yahoo.com') // make sure that the email typed matches what's expected
       
        cy
        .get('input[name="password"]') // grab the element by name again
        .type("password") // type in password
        .should('be.visible', "password") // verify that's the password

        cy
        .get('input[type="checkbox"]') // grab the element by type
        .check()//check the checkbox
        .should('be.checked') // assure it stays checked 

        cy
        .get('input') // all inputs should not be empty
        .should('be.empty')
        
        cy.get("button").click() // clicks the button and makes sure it's working on post


    })



})