import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import { createReducer, on, Action } from '@ngrx/store'

import { Book } from '../../../book/book-data/models/book.model'

import * as booksActions from '../actions/books.actions'
import * as bookActions from '../../../book/book-data/actions/book.actions'

import * as seed from '../book-isbns.seed.json'
const bookISBNs = seed.bookISBNs

export interface State extends EntityState<Book> {
  // What book has been selected in the Book's SelectedBookComponent?
  activeBookId: number
}

export const adapter: EntityAdapter<Book> =
  createEntityAdapter<Book>()

export const initialState: State = {
  activeBookId: -1, // no book selected
  ids: bookISBNs.map((isbn, index) => index + 1),
  entities: bookISBNs.reduce((entities, isbn, index) => ({
    ...entities,
    [index+1]: {
      id: index+1, isbn
    }
  }), {})
}

const booksCacheReducer = createReducer(
  initialState,
  // Books Actions
  on(
    booksActions.requestBooksHydrateSuccess, 
    (state, { books }) => adapter.updateMany(books.map(book => ({id: book.id, changes: {...book}})), state)
  ),
  // Book Actions
  on(
    bookActions.bookSelected, 
    (state, { bookId }) => ({...state, activeBookId: bookId})
  ),
  on(
    bookActions.clearBookSelected, 
    state => ({...state, activeBookId: -1})
  )
)

export function reducer(state: State | undefined, action: Action) {
  return booksCacheReducer(state, action)
}