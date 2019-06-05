import { User } from '../models/user.model'

import { CheckoutActions, CheckoutActionTypes } from '../actions/checkout.actions'

export interface State {
  user: Partial<User>
}

export const initialState: State = {
  user: null
}

export function reducer(state: State = initialState, action: CheckoutActions): State {
  switch (action.type) {
    case CheckoutActionTypes.CheckoutUpdateUserInfo: {
      return {
        ...state,
        user: {...action.payload.user}
      }
    }

    case CheckoutActionTypes.CheckoutClearUserInfo: {
      return {
        ...state,
        user: null
      }
    }

    default: {
      return state
    }
  }
}
