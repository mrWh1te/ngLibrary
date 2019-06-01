import { createSelector } from '@ngrx/store'

import { selectCart } from './cart.selector'
import { CartState } from '../reducers/cart.reducers'
import { State as CartIconState } from '../reducers/cart-icon.reducer'

export const selectCartIcon = createSelector(
  selectCart, 
  (state: CartState) => state.icon
)

export const selectCartIconAnimatingStatus = createSelector(
  selectCartIcon,
  (cartIcon: CartIconState) => cartIcon.animating
)
