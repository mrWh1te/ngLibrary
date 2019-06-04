import { User } from '../models/user.model'

import { CheckoutActions, CheckoutActionTypes } from '../actions/checkout.actions'

export interface State {
  user: Partial<User>,
  bookIds: number[]
}

export const initialState: State = {
  user: null,
  bookIds: []
}

export function reducer(state: State = initialState, action: CheckoutActions): State {
  switch (action.type) {
    case CheckoutActionTypes.CheckoutSetBooks: {     
      return {
        ...state,
        bookIds: [...action.payload.bookIds]
      }
    }
    case CheckoutActionTypes.CheckoutUpdateUserInfo: {
      return {
        ...state,
        user: {...action.payload.user}
      }
    }

    case CheckoutActionTypes.CheckoutClearBooks: {
      return {
        ...state,
        bookIds: []
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
