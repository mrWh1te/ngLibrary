import { RootState } from '../../../core/reducers/root.state'
import * as fromCheckoutRequest from './checkout-request.reducer'

export interface CheckoutState {
  request: fromCheckoutRequest.State
}

export interface State extends RootState {
  checkout: CheckoutState
}

export const reducers = {
  request: fromCheckoutRequest.reducer
}
