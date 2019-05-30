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
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      isbn: '0451526538'
    },
    2: {
      id: 2,
      isbn: '0439554934'
    }
  }
}

export function reducer(state: State = initialState, action: BooksActions): State {
  switch (action.type) {
    // case BooksActionTypes.RequestBooksHydrateSuccess: {
    //   // @todo update this to an updateMany call
    //   return adapter.addMany(action.payload, state)
    // }
    default: {
      return state
    }
  }
}
