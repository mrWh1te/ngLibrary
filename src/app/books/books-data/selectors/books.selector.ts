import { createFeatureSelector } from '@ngrx/store'

import { BooksState } from '../reducers/books.reducers'

export const selectBooks = createFeatureSelector<BooksState>('books')
