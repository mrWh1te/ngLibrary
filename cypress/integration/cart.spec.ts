import { addRandomBookToCart } from '../support/helpers/cart.helpers'
import { setupOpenLibraryBooksFixture } from '../support/routing/books.routing'

describe('Cart', function() {

  it('Users should be able to add any book to their Basket then Remove it to show an Empty message', () => {
    cy.visit('http://localhost:4200')
    
    addRandomBookToCart()

    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').should('be.visible')
    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').text().should('eq', '1')

    cy.get('shopping-cart-icon mat-icon').click()
    cy.get('shopping-cart').should('be.visible')
    cy.get('shopping-cart ul li').first().find('mat-icon.close').click()

    cy.get('shopping-cart shopping-cart-ui').should('contain', 'Empty')
  })

  it('Limits Users to 4 books in their Basket', () => {

    setupOpenLibraryBooksFixture()

    cy.visit('http://localhost:4200')

    cy.get('book').eq(0).click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('book').eq(1).click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('book').eq(2).click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('book').eq(3).click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').should('be.visible')
    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').text().should('eq', '4')

    cy.get('book').eq(4).click()
    cy.get('selected-book .add-to-basket-btn-container button').click()

    cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content').text().should('eq', '4')
  })
  
})