import { addRandomBookToCart } from '../support/helpers/cart.helpers'
import { setupOpenLibraryBooksStubResponse } from '../support/routing/books.routing'

describe('Cart', function() {

  beforeEach(() => {
    cy.clearLocalStorage()
    sessionStorage.clear()
  })

  it('Users should be able to add any book to their Basket then Remove it to show an Empty message', () => {
    cy.server()
    setupOpenLibraryBooksStubResponse()
    cy.visit('http://localhost:4200')
    cy.wait('@openLibraryAPI')
    
    addRandomBookToCart()

    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').should('be.visible')
    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').text().should('eq', '1')

    cy.get('shopping-cart-icon mat-icon').click()
    cy.get('shopping-cart').should('be.visible')
    cy.get('shopping-cart ul li').first().find('mat-icon.close').click()

    cy.get('shopping-cart shopping-cart-ui').should('contain', 'Empty')
  })

  it('Limits Users to 4 books in their Basket', () => {
    cy.server()
    setupOpenLibraryBooksStubResponse()
    cy.visit('http://localhost:4200')
    cy.wait('@openLibraryAPI')

    cy.get('book').eq(0).find('mat-card').click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('book').eq(1).find('mat-card').click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('book').eq(2).find('mat-card').click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('book').eq(3).find('mat-card').click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').should('be.visible')
    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').text().should('eq', '4')

    cy.get('book').eq(4).find('mat-card').click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').text().should('eq', '4')
  })
  
})