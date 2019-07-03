import { createAction, props } from '@ngrx/store'

import { Book } from 'src/app/book/book-data/models/book.model'

export const requestBooksHydrate = createAction(
  '[Books] Request to Hydrate Books'
)

export const requestBooksHydrateSuccess = createAction(
  '[Books] Request to Hydrate Books Success',
  props<{ books: Book[] }>()
)

export const requestBooksHydrateError = createAction(
  '[Books] Request to Hydrate Books Error'
)

// // For Main Feature of Books Inventory (home page)
// export enum BooksActionTypes {
//   RequestBooksHydrate = '[Books] Request to Hydrate Books',
//   RequestBooksHydrateSuccess = '[Books] Request to Hydrate Books Success',
//   RequestBooksHydrateError = '[Books] Request to Hydrate Books Error'
// }

// export class RequestBooksHydrate implements Action {
//   readonly type = BooksActionTypes.RequestBooksHydrate
// }
// export class RequestBooksHydrateSuccess implements Action {
//   readonly type = BooksActionTypes.RequestBooksHydrateSuccess

//   constructor(public payload: {books: Book[]}) {}
// }
// export class RequestBooksHydrateError implements Action {
//   readonly type = BooksActionTypes.RequestBooksHydrateError
// }

// export type BooksActions =
//   RequestBooksHydrate |
//   RequestBooksHydrateSuccess |
//   RequestBooksHydrateError
