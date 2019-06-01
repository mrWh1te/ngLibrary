import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

import { Observable } from 'rxjs'
import { withLatestFrom, map, tap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'

import { AddBookToCart, AttemptToAddBookToCart, CartActionTypes } from '../actions/cart.actions'
import { selectCartStatusBookIds } from '../selectors/cart-status.selectors'
import { selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors';


@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private snackbar: MatSnackBar
  ) {}

  @Effect({
    dispatch: false
  })
  addBookToCart$: Observable<Action> = this.actions$
    .pipe(
      ofType<AttemptToAddBookToCart>(CartActionTypes.AttemptToAddBookToCart),
      // tap(() => console.log('[CartEffects] addBookToCart$')),
      withLatestFrom(this.store.pipe(select(selectCartStatusBookIds))),
      map(([action, bookIds]) => {
        let bookId = bookIds.find(bookId => bookId === action.payload.bookId)

        // Our business logic: Users can only add 1 copy of each Book to their Cart
        // It's a library, not a Store ;)
        if (!bookId) {
          this.store.dispatch(new AddBookToCart({bookId: action.payload.bookId}))
        }

        return action
      })
    )

  @Effect({
    dispatch: false
  })
  showNotificationOnAddedBookToCart$: Observable<Action> = this.actions$
    .pipe(
      ofType<AddBookToCart>(CartActionTypes.AddBookToCart),
      withLatestFrom(this.store.pipe(select(selectBooksCacheEntities))),
      map(([action, books]) => {
        this.snackbar.open(`Added "${books[action.payload.bookId].title}" to your Basket`, 'Close', {
          duration: 3000
        })

        return action
      })
    )
}
