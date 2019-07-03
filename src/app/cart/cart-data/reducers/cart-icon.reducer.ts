import { createReducer, Action, on } from '@ngrx/store'

import * as cartIconActions from '../actions/cart-icon.actions'

/**
 * @description   This is the state of the Shopping Cart Icon found in the Header UI
 */
export interface State {
  animating: boolean,
  dropDownIsVisible: boolean
}

export const initialState: State = {
  animating: false,
  dropDownIsVisible: false
}

const cartIconReducer = createReducer(
  initialState,
  on(
    cartIconActions.animateLayoutHeaderShoppingCartIcon,
    state => ({...state, animating: true})
  ),
  on(
    cartIconActions.animateOffLayoutHeaderShoppingCartIcon, 
    state => ({...state, animating: false})
  ),
  on(
    cartIconActions.showCartIconDropDown, 
    state => ({...state, dropDownIsVisible: true})
  ),
  on(
    cartIconActions.hideCartIconDropDown,
    state => ({...state, dropDownIsVisible: false})
  )
)

export function reducer(state: State | undefined, action: Action) {
  return cartIconReducer(state, action)
}