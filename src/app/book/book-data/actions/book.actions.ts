import { Action } from '@ngrx/store'

import { Book } from 'src/app/book/book-data/models/book.model'

export enum BookActionTypes {
  BookSelected = '[Book] Book Selected',
  SelectedBookAddToCartBtnClick = '[Books] Request to Hydrate Books'
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
