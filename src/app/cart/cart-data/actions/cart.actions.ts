import { Action } from '@ngrx/store'

export enum CartActionTypes {
  AttemptToAddBookToCart = '[Cart] Attempt to Add Book To Cart',
  AddBookToCart = '[Cart] Added Book to Cart',
  AlreadyHaveBookInCartError = '[Cart] Attempt to Add Book Error: Already In Cart',
  RemoveBookFromCart = '[Cart] Removed Book from Cart',
  ClearCart = '[Cart] Removed all Books from Cart',
}

// @todo What should the pattern in naming actions be?
// We could follow the BooksActions of Request*, Request*Success, & Request*Error for consistency?
export class AttemptToAddBookToCart implements Action {
  readonly type = CartActionTypes.AttemptToAddBookToCart

  constructor(public payload: {bookId: number}) {}
}
export class AddBookToCart implements Action {
  readonly type = CartActionTypes.AddBookToCart

  constructor(public payload: {bookId: number}) {}
}
export class AlreadyHaveBookInCartError implements Action {
  readonly type = CartActionTypes.AlreadyHaveBookInCartError
}
// The above naming pattern?
export class RemoveBookFromCart implements Action {
  readonly type = CartActionTypes.RemoveBookFromCart

  constructor(public payload: {bookId: number}) {}
}

export class ClearCart implements Action {
  readonly type = CartActionTypes.ClearCart
}

export type CartActions =
  AttemptToAddBookToCart |
  AddBookToCart |
  RemoveBookFromCart |
  ClearCart
