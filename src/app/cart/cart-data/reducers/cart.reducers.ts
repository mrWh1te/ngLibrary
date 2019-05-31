import { RootState } from '../../../core/reducers/root.state'
import * as fromCartStatus from './cart-status.reducer'

export interface CartState {
  status: fromCartStatus.State
}

export interface State extends RootState {
  cart: CartState
}

export const reducers = {
  status: fromCartStatus.reducer
}
