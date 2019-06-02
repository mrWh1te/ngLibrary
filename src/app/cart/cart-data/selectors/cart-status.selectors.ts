import { createSelector } from '@ngrx/store'

import { selectCart } from './cart.selector'
import { CartState } from '../reducers/cart.reducers'
import { State as CartStatusState } from '../reducers/cart-status.reducer'

export const selectCartStatus = createSelector(
  selectCart, 
  (state: CartState) => state.status
)

export const selectCartStatusBookIds = createSelector(
  selectCartStatus,
  (cartStatus: CartStatusState) => cartStatus.bookIds
)

export const selectCartStatusBooksCount = createSelector(
  selectCartStatusBookIds,
  (bookIds: number[]) => bookIds.length
)
