import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

import { Observable } from 'rxjs'
import { map, delay } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, Store } from '@ngrx/store'

import { AddBookToCart, CartActionTypes } from '../actions/cart.actions'
import { AnimateLayoutHeaderShoppingCartIcon, CartIconActionTypes, AnimateOffLayoutHeaderShoppingCartIcon } from '../actions/cart-icon.actions'

@Injectable()
export class CartIconEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) {}

  @Effect()
  animateShoppingCartIcon$: Observable<Action> = this.actions$
    .pipe(
      ofType<AddBookToCart>(CartActionTypes.AddBookToCart),
      map(() => new AnimateLayoutHeaderShoppingCartIcon())
    )
  @Effect()
  animateShoppingCartIconOff$: Observable<Action> = this.actions$
    .pipe(
      ofType<AnimateLayoutHeaderShoppingCartIcon>(CartIconActionTypes.AnimateLayoutHeaderShoppingCartIcon),
      delay(2000),
      map(() => new AnimateOffLayoutHeaderShoppingCartIcon())
    )
}
