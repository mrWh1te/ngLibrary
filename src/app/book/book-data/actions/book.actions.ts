import { Action } from '@ngrx/store'

export enum BookActionTypes {
  BookSelected = '[Book] Book Selected',
  SelectedBookAddToCartBtnClick = '[Book] Selected Book\'s "Add to Basket" Button Click'
}

export class BookSelected implements Action {
  readonly type = BookActionTypes.BookSelected

  constructor(public payload: {bookId: number}) {}
}

export class SelectedBookAddToCartBtnClick implements Action {
  readonly type = BookActionTypes.SelectedBookAddToCartBtnClick
}

export type BookActions =
  BookSelected |
  SelectedBookAddToCartBtnClick
