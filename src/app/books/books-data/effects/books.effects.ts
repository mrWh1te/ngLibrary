import {Injectable} from '@angular/core'
import { MatSnackBar } from '@angular/material'
import {Observable, of} from 'rxjs'

import {Actions, Effect, ofType, createEffect} from '@ngrx/effects'
import {Action, select, Store} from '@ngrx/store'

import { BooksService } from '../services/books.service'
// import { RequestBooksHydrate, RequestBooksHydrateSuccess, RequestBooksHydrateError } from '../actions/books.actions'
import * as booksActions from '../actions/books.actions'
import { withLatestFrom, map, catchError, exhaustMap, filter, mergeMap } from 'rxjs/operators'

import { selectAllCacheBooks, selectBooksCacheEntities } from '../selectors/books-cache.selectors'
import { AddBookToCart, CartActionTypes } from 'src/app/cart/cart-data/actions/cart.actions'

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

  // @Effect()
  // hydrateBooksFromAPI$: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType<RequestBooksHydrate>(BooksActionTypes.RequestBooksHydrate),
  //     withLatestFrom(this.store.pipe(select(selectAllCacheBooks))),
  //     // if Book is missing title, let's grab its ISBN & ID's to hydrate them
  //     map(([action, books]) => books.filter(book => !book.title).map(book => ({id: book.id, isbn: book.isbn}))),
  //     // only run the API call when there is at least 1 book to hydrate
  //     filter(books => books.length > 0),
  //     exhaustMap(books => this.booksService.getBooksData(books)), // let's use exhaustMap here in case we use this effect again in the future with some kind of user triggered action like clicking a button, to prevent multiple API calls from multiple clicks while waiting on 1 to resolve
  //     // tap(books => console.log('[BooksEffects] hydrateBooksFromAPI$ -> books = ', books)),
  //     map(books => new RequestBooksHydrateSuccess({books})),
  //     catchError((err, caught) => {
  //       this.store.dispatch(new RequestBooksHydrateError())
  //       return caught
  //     })
  //   )

  // showNotificationOnAddedBookToCart$ = createEffect(() => this.actions$.pipe(
  //   ofType(CartActionTypes.AddBookToCart),
  //   withLatestFrom(this.store.pipe(select(selectBooksCacheEntities))),
  //   map(([action, books]) => {
  //     this.snackbar.open(`Added "${books[action.payload.bookId].title}"`, 'Close', {
  //       duration: 3000
  //     })

  //     return action
  //   })
  // ), {dispatch: false})

  @Effect({
    dispatch: false
  })
  showNotificationOnAddedBookToCart$: Observable<Action> = this.actions$
    .pipe(
      ofType<AddBookToCart>(CartActionTypes.AddBookToCart),
      withLatestFrom(this.store.pipe(select(selectBooksCacheEntities))),
      map(([action, books]) => {
        this.snackbar.open(`Added "${books[action.payload.bookId].title}"`, 'Close', {
          duration: 3000
        })

        return action
      })
    )
}
