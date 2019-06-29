import * as seed from '../../src/app/books/books-data/book-isbns.seed.json'
const bookISBNs = seed.bookISBNs

import { setupOpenLibraryBooksStubResponse } from '../support/routing/books.routing'

describe('Books', function() {

  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('Should contain the word "Inventory"', () => {
    cy.visit('http://localhost:4200')

    cy.contains('Inventory')
  })

  it('Should display a wall of books, 1 for each book ISBN in our seed', () => {
    cy.visit('http://localhost:4200')

    cy.get('book').should('have.length', bookISBNs.length)
  })

  it('Users should be able to select the first Book (The adventures of Tom Sawyer) & View it in the selected book section', () => {
    cy.server()
    setupOpenLibraryBooksStubResponse()
    cy.visit('http://localhost:4200')
    cy.wait('@openLibraryAPI')

    cy.get('book').first().find('mat-card').click()
    cy.get('selected-book .book-details h2').text().should('eq', 'The adventures of Tom Sawyer')
  })
  
})