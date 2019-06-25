import { addRandomBookToCart } from '../support/helpers/cart.helpers'
import { setupOpenLibraryBooksFixture } from '../support/routing/books.routing'

describe('Checkout', function() {

  it('Going directly to the Checkout page with an Empty Cart has a disabled Checkout button & an Empty cart', () => {
    cy.visit('http://localhost:4200/checkout')

    cy.get('checkout-submit-button button').should('have.attr', 'disabled')
    cy.get('shopping-cart').should('contain', 'empty')
  })

  it('Users should be able to add any book to their Basket from their Home page, then go to the Checkout page, to see it listed in the Shopping Cart', () => {
    setupOpenLibraryBooksFixture()
    
    cy.visit('http://localhost:4200')
    
    addRandomBookToCart()

    cy.get('mat-icon.checkout').click()
    cy.url().should('contain', '/checkout')

    cy.get('shopping-cart ul li').should('have.length', 1)
  })

  it('Checkout button can be submitted once the form is filled correctly and there is at least 1 book in the Cart', () => {
    setupOpenLibraryBooksFixture()

    cy.visit('http://localhost:4200')

    addRandomBookToCart()

    cy.get('mat-icon.checkout').click()
    cy.get('checkout-submit-button button').should('have.attr', 'disabled')
    
    cy.get('checkout-user-form input').eq(0).type('Peter')
    cy.get('checkout-submit-button button').should('have.attr', 'disabled')

    cy.get('checkout-user-form input').eq(1).type('Parker')
    cy.get('checkout-submit-button button').should('have.attr', 'disabled')

    cy.get('checkout-user-form input').eq(2).type('34989043')
    
    cy.get('checkout-submit-button button').click()

    cy.get('checkout-success-message').contains('Thank you')
  })
  
})