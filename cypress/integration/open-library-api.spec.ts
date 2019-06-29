import * as seed from '../../src/app/books/books-data/book-isbns.seed.json'
const bookISBNs = seed.bookISBNs

// @todo re-enable this test suite when OpenLibrary.org comes back online
describe.skip('Open Library API', function() {

  const firstSeedISBN = bookISBNs[0]

  it('returns JSON', () => {
    cy.request(`https://openlibrary.org/api/books?bibkeys=ISBN:${firstSeedISBN}&format=json&jscmd=data`)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('Should have a response whose body is a hash map of the first ISBN in our Seed to its actual Book data', () => {
    // first ISBN, 0451526538, belongs to The Adventures of Tom Sawyer
    const request = cy.request(`https://openlibrary.org/api/books?bibkeys=ISBN:${firstSeedISBN}&format=json&jscmd=data`)
    
    // WIP
    // request.its('body').should('include', '<h1>Admin</h1>')
  })
})