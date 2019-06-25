export function setupOpenLibraryBooksStubResponse() {
  // I think we're hitting a limit on image requests from OpenLibrary.org
  // so for these tests, let's omit actual images so we're not trying to request over and over again image files
  cy.fixture('open-library-books-no-covers.json').as('fxBooks')
  cy.route('GET', '**/books*', '@fxBooks')
  cy.wait('@fxBooks')
}