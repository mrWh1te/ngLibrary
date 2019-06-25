import { bookISBNs } from '../../../src/app/books/books-data/book-isbns.seed'

export function addRandomBookToCart() {
  const bookISBNsIdx = Math.floor(Math.random() * bookISBNs.length)

  cy.get('book').eq(bookISBNsIdx).click()
  cy.get('selected-book .add-to-basket-btn-container button').click()
}