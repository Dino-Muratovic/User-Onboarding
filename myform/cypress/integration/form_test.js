
describe ("Testing our User-Onboard form", function(){
    
    beforeEach(function (){
        cy.visit("http://localhost:3000")
    })

    it ("Add the tests for my inputs and submit", function(){
        pause().
        cy
        .get('input[name="name"]') // grab the input element with the name of name
        .type("Dino") // type in Dino in it
        .should('have.value', "Dino") // confirm that Dino is indeed a value inside

        cy
        .get('input[id="email"]')
        .type('TuckerSlimShady@yahoo.com')
        .should('have.value','TuckerSlimShady@yahoo.com')
    })



})