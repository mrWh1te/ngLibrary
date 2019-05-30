import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'

import { Book } from '../../../book/book-data/models/book.model'
import { BooksActions, BooksActionTypes } from '../actions/books.actions'

export interface State extends EntityState<Book> {
  // What book has been selected in the Books smart component?
  activeBookId: number // if activeBookId > 0, then there is one selected. To make it more obvious, -1 is the value assigned when no book is selected (instead of 0)
}

export const adapter: EntityAdapter<Book> =
  createEntityAdapter<Book>()

// For this example app, I've hard-coded some entities into our intial state right here
// Usually I don't do this, maybe instead grab the data from a global JS object that is rendered inside the main index.html file (that can be server generated with the books data). Ideally, data required for the upfront loading of home page is packaged together in the index.html file so no subsequent API calls are required to display. One technique to do that is inline your required data in the index.html file using server rendering
// But for now, since we're trying to avoid server rendering (backend in this example project), this will do:
export const initialState: State = {
  activeBookId: -1, // no book selected
  ids: [1, 2, 3, 4, 5, 6],
  entities: {
    1: {
      id: 1,
      isbn: '0451526538'
    },
    2: {
      id: 2,
      isbn: '0439554934'
    },
    3: {
      id: 3,
      isbn: '0385333498'
    },
    4: {
      id: 4,
      isbn: '0812550706'
    },
    5: {
      id: 5,
      isbn: '0140441409'
    },
    6: {
      id: 6,
      isbn: '0374531269'
    }
  }
}

export function reducer(state: State = initialState, action: BooksActions): State {
  switch (action.type) {
    case BooksActionTypes.RequestBooksHydrateSuccess: {      
      return adapter.updateMany(action.payload.books.map(book => ({id: book.id, changes: {...book}})), state)
    }
    case BooksActionTypes.BookSelected: {
      return {
        ...state,
        activeBookId: action.payload.bookId
      }
    }
    default: {
      return state
    }
  }
}
