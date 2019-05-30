import { Action } from '@ngrx/store'

import { Book } from 'src/app/book/book-data/models/book.model'

export enum BooksActionTypes {
  RequestBooksHydrate = '[Books] Request to Hydrate Books',
  RequestBooksHydrateSuccess = '[Books] Request to Hydrate Books Success',
  RequestBooksHydrateError = '[Books] Request to Hydrate Books Error'
}

export class RequestBooksHydrate implements Action {
  readonly type = BooksActionTypes.RequestBooksHydrate
}
export class RequestBooksHydrateSuccess implements Action {
  readonly type = BooksActionTypes.RequestBooksHydrateSuccess

  constructor(public payload: Book[]) {}
}
export class RequestBooksHydrateError implements Action {
  readonly type = BooksActionTypes.RequestBooksHydrateError
}

export type BooksActions =
  RequestBooksHydrate |
  RequestBooksHydrateSuccess |
  RequestBooksHydrateError
