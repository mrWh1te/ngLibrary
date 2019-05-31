import { Action } from '@ngrx/store'

export enum CartActionTypes {
  AttemptToAddBookToCart = '[Cart] Request to Add Book To Cart',
  AddBookToCart = '[Cart] Added Book to Cart',
  RemoveBookFromCart = '[Cart] Removed Book from Cart',
  ClearCart = '[Cart] Removed all Books from Cart',
}

export class AttemptToAddBookToCart implements Action {
  readonly type = CartActionTypes.AttemptToAddBookToCart

  constructor(public payload: {bookId: number}) {}
}
export class AddBookToCart implements Action {
  readonly type = CartActionTypes.AddBookToCart

  constructor(public payload: {bookId: number}) {}
}
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
