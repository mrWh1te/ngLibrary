import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

import { Observable } from 'rxjs'
import { withLatestFrom, map, tap, delay } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'

import { selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors'
import { AnimateLayoutHeaderShoppingCartIcon, LayoutActionTypes, AnimateOffLayoutHeaderShoppingCartIcon } from 'src/app/layout/layout-data/actions/layout.actions'
import { AddBookToCart, CartActionTypes } from 'src/app/cart/cart-data/actions/cart.actions'


@Injectable()
export class LayoutEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private snackbar: MatSnackBar
  ) {}

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

  @Effect()
  animateShoppingCartIcon$: Observable<Action> = this.actions$
    .pipe(
      ofType<AddBookToCart>(CartActionTypes.AddBookToCart),
      map(() => new AnimateLayoutHeaderShoppingCartIcon())
    )
  @Effect()
  animateShoppingCartIconOff$: Observable<Action> = this.actions$
    .pipe(
      ofType<AnimateLayoutHeaderShoppingCartIcon>(LayoutActionTypes.AnimateLayoutHeaderShoppingCartIcon),
      delay(2000),
      map(() => new AnimateOffLayoutHeaderShoppingCartIcon())
    )
}
