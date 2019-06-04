import { createSelector } from '@ngrx/store'

import { selectCheckout } from './checkout.selector'
import { CheckoutState } from '../reducers/checkout.reducers'
import { State as CheckoutRequestState } from '../reducers/checkout-request.reducer'

export const selectCheckoutRequest = createSelector(
  selectCheckout, 
  (state: CheckoutState) => state.request
)

export const selectCheckoutRequestUser = createSelector(
  selectCheckoutRequest,
  (cartStatus: CheckoutRequestState) => cartStatus.user
)