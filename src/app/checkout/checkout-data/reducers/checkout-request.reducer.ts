import { createReducer, on, Action } from '@ngrx/store'

import { User } from '../models/user.model'

import * as checkoutActions from '../actions/checkout.actions'

export interface State {
  user: Partial<User>
}

export const initialState: State = {
  user: null
}

const checkoutRequestReducer = createReducer(
  initialState,
  on(
    checkoutActions.checkoutUpdateUserInfo,
    (state, { user }) => ({...state, user: {...user}})
  ),
  on(
    checkoutActions.checkoutClearUserInfo,
    state => ({...state, user: null})
  )
)

export function reducer(state: State | undefined, action: Action) {
  return checkoutRequestReducer(state, action)
}