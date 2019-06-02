import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { map, delay } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'

import { AddBookToCart, CartActionTypes } from '../actions/cart.actions'
import { AnimateLayoutHeaderShoppingCartIcon, CartIconActionTypes, AnimateOffLayoutHeaderShoppingCartIcon } from '../actions/cart-icon.actions'

@Injectable()
export class CartIconEffects {
  constructor(
    private actions$: Actions
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
      delay(1000),
      map(() => new AnimateOffLayoutHeaderShoppingCartIcon())
    )
}
