import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'

import { Book } from '../../../book/book-data/models/book.model'
import { BooksActions, BooksActionTypes } from '../actions/books.actions'
import { BookActions, BookActionTypes } from 'src/app/book/book-data/actions/book.actions';

export interface State extends EntityState<Book> {
  // What book has been selected in the Book's SelectedBookComponent?
  activeBookId: number
}

export const adapter: EntityAdapter<Book> =
  createEntityAdapter<Book>()

// @todo add local storage support to cache data locally
// upon such, put these ISBN's in a service for when local storage is empty
const bookISBNs: string[] = [
  '0451526538',
  '0439554934',
  '0385333498',
  '0812550706',
  '0140441409',
  '0374531269',
  '0451169514',
  '0307277925',
  '9781400067824',
  '978-84-666-5895-9',
  '0060652950',
  '0553109537',
  '0062316095',
  '9780735213654',
  '0722534124',
  '0140350497',
  '0007322607',
  '1847922643',
  '0060513098',
  '0553755994',
  '0345353145',
  '0836218094',
  '0345342968',
  '0307473473',
  '0786851473',
  '0448411067',
  '0739326740'
]

export const initialState: State = {
  activeBookId: -1, // no book selected
  ids: bookISBNs.map((isbn, index) => index + 1),
  entities: bookISBNs.reduce((entities, isbn, index) => {
    const id = index + 1
    entities[id] = {
      id,
      isbn
    }
    return entities
  }, {})
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
