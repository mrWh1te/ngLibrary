import { RootState } from '../../../core/reducers/root.state'
import * as fromCartStatus from './cart-status.reducer'
import * as fromCartIcon from './cart-icon.reducer'

export interface CartState {
  status: fromCartStatus.State,
  icon: fromCartIcon.State
}

export interface State extends RootState {
  cart: CartState
}

export const reducers = {
  status: fromCartStatus.reducer,
  icon: fromCartIcon.reducer
}
