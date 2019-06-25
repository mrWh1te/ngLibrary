export function setupOpenLibraryBooksFixture() {
  cy.server()
  cy.fixture('open-library-books.json').as('fxBooks')
  cy.route('GET', '**/books*', '@fxBooks')
}