import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'

import { Book } from '../../../book/book-data/models/book.model'
import { BooksActions, BooksActionTypes } from '../actions/books.actions'

export interface State extends EntityState<Book> {

}

// @todo confirm this works:
// {
//   ids: [1, 2],
//   entities: {
//     1: {
//       id: 1,
//       isbn: '0451526538'
//     },
//     2: {
//       id: 2,
//       isbn: '0439554934'
//     }
//   }
// }

export const adapter: EntityAdapter<Book> =
  createEntityAdapter<Book>()

export const initialState: State = {
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
