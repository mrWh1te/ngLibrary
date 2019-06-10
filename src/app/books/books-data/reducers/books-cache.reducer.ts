import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'

import { Book } from '../../../book/book-data/models/book.model'
import { BooksActions, BooksActionTypes } from '../actions/books.actions'
import { BookActions, BookActionTypes } from '../../../book/book-data/actions/book.actions'
import { bookISBNs } from '../book-isbns.seed'

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

export function reducer(state: State = initialState, action: BooksActions | BookActions): State {
  switch (action.type) {
    case BooksActionTypes.RequestBooksHydrateSuccess: {      
      return adapter.updateMany(action.payload.books.map(book => ({id: book.id, changes: {...book}})), state)
    }
    case BookActionTypes.BookSelected: {
      return {
        ...state,
        activeBookId: action.payload.bookId
      }
    }
    case BookActionTypes.ClearBookSelected: {
      return {
        ...state,
        activeBookId: -1
      }
    }
    default: {
      return state
    }
  }
}
