import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { of } from 'rxjs'

import {Actions, ofType, createEffect} from '@ngrx/effects'
import {select, Store} from '@ngrx/store'

import { BooksService } from '../services/books.service'
import * as booksActions from '../actions/books.actions'
import { withLatestFrom, map, catchError, exhaustMap, filter, mergeMap } from 'rxjs/operators'

import { selectAllCacheBooks, selectBooksCacheEntities } from '../selectors/books-cache.selectors'
import * as cartActions from '../../../cart/cart-data/actions/cart.actions'

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private booksService: BooksService,
    private snackbar: MatSnackBar
  ) {}

  hydrateBooksFromAPI$ = createEffect(() => this.actions$.pipe(
    ofType(booksActions.requestBooksHydrate),
    withLatestFrom(this.store.pipe(select(selectAllCacheBooks))),
    // if Book is missing title, let's grab its ISBN & ID's to hydrate them
    map(([action, books]) => books.filter(book => !book.title).map(book => ({id: book.id, isbn: book.isbn}))),
    // only run the API call when there is at least 1 book to hydrate
    filter(books => books.length > 0),
    exhaustMap(
      books => this.booksService.getBooksData(books).pipe(
        map(books => booksActions.requestBooksHydrateSuccess({books})),
        catchError(() => of(booksActions.requestBooksHydrateError()))
      )
    )
  ))

  showNotificationOnAddedBookToCart$ = createEffect(() => this.actions$.pipe(
    ofType(cartActions.addBookToCart),
    withLatestFrom(this.store.pipe(select(selectBooksCacheEntities))),
    map(([action, books]) => {
      this.snackbar.open(`Added "${books[action.bookId].title}"`, 'Close', {
        duration: 3000
      })

      return action
    })
  ), {dispatch: false})

}
