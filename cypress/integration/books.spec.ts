import { bookISBNs } from "../../src/app/books/books-data/book-isbns.seed"

describe('Books', function() {

  it('Should contain the word "Inventory"', () => {
    cy.visit('http://localhost:4200')
    cy.contains('Inventory')
  })

  it('Should display a wall of books, 1 for each book ISBN in our seed', () => {
    cy.visit('http://localhost:4200')
    cy.get('book').should('have.length', bookISBNs.length)
  })

  it('Users should be able to select the first Book (The adventures of Tom Sawyer) & View it in the selected book section', () => {
    cy.visit('http://localhost:4200')
    cy.get('book').first().click()
    cy.get('selected-book .book-details h2').text().should('eq', 'The adventures of Tom Sawyer')
  })
  
})