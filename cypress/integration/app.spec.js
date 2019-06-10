describe('Home page', function() {

  it('Should contain the word "Inventory"', function() {
    cy.visit('http://localhost:4200')
    cy.contains("Inventory")
  })
  
})