import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

import {Actions, Effect, ofType} from '@ngrx/effects'
import {Action, select, Store} from '@ngrx/store'

import { BooksService } from '../services/books.service'
import { RequestBooksHydrate, BooksActionTypes, RequestBooksHydrateSuccess, RequestBooksHydrateError } from '../actions/books.actions'
import { withLatestFrom, map, catchError, exhaustMap, switchMap } from 'rxjs/operators'

import { selectAllCacheBooks } from '../selectors/books-cache.selectors'

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private booksService: BooksService
  ) {}

  @Effect()
  hydrateBooksFromAPI$: Observable<Action> = this.actions$
    .pipe(
      ofType<RequestBooksHydrate>(BooksActionTypes.RequestBooksHydrate),
      withLatestFrom(this.store.pipe(select(selectAllCacheBooks))),
      map(([action, books]) => {
        // if Book is missing title, let's grab its ISBN & ID's to hydrate them
        return books.filter(book => !book.title).map(book => ({id: book.id, isbn: book.isbn}))
      }),
      switchMap(books => this.booksService.getBooksData(books)), // exhaustMap vs switchMap
      // tap(books => console.log('[BooksEffects] hydrateBooksFromAPI$ -> books = ', books)),
      map(books => new RequestBooksHydrateSuccess({books})),
      catchError((err, caught) => {
        this.store.dispatch(new RequestBooksHydrateError())
        return caught
      })
    )
}
