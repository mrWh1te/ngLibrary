import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { withLatestFrom, map } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'

import { AddBookToCart, AttemptToAddBookToCart, CartActionTypes } from '../actions/cart.actions'
import { selectCartStatusBookIds } from '../selectors/cart-status.selectors'


@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>
  ) {}

  @Effect({
    dispatch: false
  })
  addBookToCart$: Observable<Action> = this.actions$
    .pipe(
      ofType<AttemptToAddBookToCart>(CartActionTypes.AttemptToAddBookToCart),
      withLatestFrom(this.store.pipe(select(selectCartStatusBookIds))),
      map(([action, bookIds]) => {
        let bookId = bookIds.find(bookId => bookId === action.payload.bookId)

        // Our business logic: Users can only add 1 copy of each Book to their Cart
        // It's a library, not a Store ;)
        if (!bookId) {
          this.store.dispatch(new AddBookToCart({bookId}))
        }

        return action
      })
    )
}
