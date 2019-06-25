import { bookISBNs } from "src/app/books/books-data/book-isbns.seed";

describe('Home page', function() {

  it('Should contain the word "Inventory"', () => {
    cy.visit('http://localhost:4200')
    cy.contains('Inventory')
  })

  it('Users should be able to select the first Book (The adventures of Tom Sawyer) & View it in the selected book section', () => {
    cy.visit('http://localhost:4200')
    cy.get('book').first().click()
    cy.get('selected-book .book-details h2').text().should('eq', 'The adventures of Tom Sawyer')
  })

  it('Users should be able to select a random book then add it to their Basket', () => {
    cy.visit('http://localhost:4200')
    
    const bookISBNsIdx = Math.floor(Math.random() * bookISBNs.length)

    cy.get('book').eq(bookISBNsIdx).click()

    const addToBasketBtn = cy.get('selected-book .add-to-basket-btn-container button')
    addToBasketBtn.should('be.visible')
    addToBasketBtn.click()

    const addToBasketBtnCountBadge = cy.get('shopping-cart-icon .shopping-cart-icon-ui mat-icon .mat-badge-content')
    addToBasketBtnCountBadge.should('be.visible')
    addToBasketBtnCountBadge.text().should('eq', 1)
  })
  
})