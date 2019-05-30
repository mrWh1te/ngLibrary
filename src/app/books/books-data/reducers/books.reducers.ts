import { RootState } from '../../../core/reducers/root.state'
import * as fromBooksCache from './books-cache.reducer'

export interface BooksState {
  cache: fromBooksCache.State
}

export interface State extends RootState {
  books: BooksState
}

export const reducers = {
  cache: fromBooksCache.reducer
}
