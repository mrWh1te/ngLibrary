import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

import { Observable } from 'rxjs'
import { withLatestFrom, map, tap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'

import { AddBookToCart, AttemptToAddBookToCart, CartActionTypes, AlreadyHaveBookInCartError } from '../actions/cart.actions'
import { selectCartStatusBookIds } from '../selectors/cart-status.selectors'


@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private snackbar: MatSnackBar
  ) {}

  @Effect()
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
          return new AddBookToCart({bookId: action.payload.bookId})
        } else {
          return new AlreadyHaveBookInCartError()
        }
      })
    )

  @Effect({
    dispatch: false
  })
  showErrorNotificationBookAlreadyInCart$: Observable<Action> = this.actions$
    .pipe(
      ofType<AlreadyHaveBookInCartError>(CartActionTypes.AlreadyHaveBookInCartError),
      tap(() => this.snackbar.open(`That book is already in your basket`, 'Close', {
        duration: 3000
      }))
    )
}
