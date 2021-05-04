import { createAction, props } from '@ngrx/store'

import { Book } from '../../../book/book-data/models/book.model'

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
