import { createAction, props } from '@ngrx/store'

export const attemptToAddBookToCart = createAction(
  '[Cart] Attempt to Add Book To Cart',
  props<{bookId: number}>()
)

export const addBookToCart = createAction(
  '[Cart] Added Book to Cart',
  props<{bookId: number}>()
)

export const alreadyHaveBookInCartError = createAction(
  '[Cart] Attempt to Add Book Error: Already In Cart'
)

export const cantAddAnyMoreBooksInCartError = createAction(
  '[Cart] Attempt to Add Book Error: At Maxium Number of Books being Checked Out'
)

export const removeBookFromCart = createAction(
  '[Cart] Removed Book from Cart',
  props<{bookId: number}>()
)

export const clearCart = createAction(
  '[Cart] Removed all Books from Cart'
)