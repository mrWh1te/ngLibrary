import { Injectable } from '@angular/core'

import { map, delay, withLatestFrom, tap } from 'rxjs/operators'
import { Actions, ofType, createEffect } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'

import * as cartActions from '../actions/cart.actions'
import * as cartIconActions from '../actions/cart-icon.actions'
import { selectCartIconDropDownIsVisible } from '../selectors/cart-icon.selectors'

@Injectable()
export class CartIconEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>
  ) {}

  animateShoppingCartIcon$ = createEffect(() => this.actions$.pipe(
    ofType(cartActions.addBookToCart),
    map(() => cartIconActions.animateLayoutHeaderShoppingCartIcon())
  ))

  animateShoppingCartIconOff$ = createEffect(() => this.actions$.pipe(
    ofType(cartIconActions.animateLayoutHeaderShoppingCartIcon),
    delay(1000),
    map(() => cartIconActions.animateOffLayoutHeaderShoppingCartIcon())
  ))

  toggleShoppingCartIconDropDownVisibility$ = createEffect(() => this.actions$.pipe(
    ofType(cartIconActions.toggleCartIconDropDown),
    withLatestFrom(this.store.pipe(select(selectCartIconDropDownIsVisible))),
    map(([action, dropDownIsVisible]) => dropDownIsVisible ? cartIconActions.hideCartIconDropDown() : cartIconActions.showCartIconDropDown())
  ))

  hideShoppingCartIconDropDown$ = createEffect(() => this.actions$.pipe(
    ofType('@ngrx/router-store/navigated'), // the success action for navigating too a page
    tap(action => {
      // No point in displaying the dropdown shopping-cart, when we're going to display it in the Checkout view (styled differently, but some content)
      if (action['payload']['event']['url'] === '/checkout') {
        this.store.dispatch(cartIconActions.hideCartIconDropDown())
      }
    })
  ), {dispatch: false})
  
}
