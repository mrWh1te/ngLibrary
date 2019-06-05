import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { map, delay, withLatestFrom, tap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, Store, select } from '@ngrx/store'

import { AddBookToCart, CartActionTypes } from '../actions/cart.actions'
import { AnimateLayoutHeaderShoppingCartIcon, CartIconActionTypes, AnimateOffLayoutHeaderShoppingCartIcon, ToggleCartIconDropDown, HideCartIconDropDown, ShowCartIconDropDown } from '../actions/cart-icon.actions'
import { selectCartIconDropDownIsVisible } from '../selectors/cart-icon.selectors'

@Injectable()
export class CartIconEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>
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

  @Effect()
  toggleShoppingCartIconDropDownVisibility$: Observable<Action> = this.actions$
    .pipe(
      ofType<ToggleCartIconDropDown>(CartIconActionTypes.ToggleCartIconDropDown),
      withLatestFrom(this.store.pipe(select(selectCartIconDropDownIsVisible))),
      map(([action, dropDownIsVisible]) => dropDownIsVisible ? new HideCartIconDropDown() : new ShowCartIconDropDown())
    )

  @Effect({
    dispatch: false
  })
  HideShoppingCartIconDropDown$: Observable<Action> = this.actions$
    .pipe(
      ofType('@ngrx/router-store/navigation'),
      tap(action => {
        // No point in displaying the dropdown shopping-cart, when we're going to display it in the Checkout view (styled differently, but some content)
        if (action['payload']['event']['state']['url'] === '/checkout') {
          this.store.dispatch(new HideCartIconDropDown())
        }
      })
    )
}
