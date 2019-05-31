import { createSelector } from '@ngrx/store'

import { selectBooks } from './books.selector'
import { BooksState } from '../reducers/books.reducers'
import { adapter } from '../reducers/books-cache.reducer'
import { State as BooksCacheState } from '../reducers/books-cache.reducer'

export const selectBooksCache = createSelector(
  selectBooks, 
  (state: BooksState) => state.cache
)

// Entity generated selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selectBooksCache)

export const selectBooksCacheIds = selectIds // array of book entity ids
export const selectBooksCacheEntities = selectEntities // dictionary of book entities
export const selectAllCacheBooks = selectAll // array of book entities
export const selectBooksCacheTotal = selectTotal // number of book entities in cache

// Our own custom selectors beyond Entity
export const selectActiveBookId = createSelector(
  selectBooksCache,
  (state: BooksCacheState) => state.activeBookId
)
