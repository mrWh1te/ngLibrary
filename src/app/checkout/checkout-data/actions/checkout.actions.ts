import { Action } from '@ngrx/store'

import { User } from '../models/user.model'

export enum CheckoutActionTypes {
  CheckoutUpdateUserInfo = '[Checkout] Update Request User Info',
  CheckoutSetBooks = '[Checkout] Set Request Books',
  CheckoutClearUserInfo = '[Checkout] Clear Request User Info',
  CheckoutClearBooks = '[Checkout] Clear Request Books',
  CheckoutClearAll = '[Checkout] Clear All Request Data',
  CheckoutSubmit = '[Checkout] Submit Request'
}

// Setters
export class CheckoutUpdateUserInfo implements Action {
  readonly type = CheckoutActionTypes.CheckoutUpdateUserInfo

  constructor(public payload: {user: Partial<User>}) {}
}
export class CheckoutSetBooks implements Action {
  readonly type = CheckoutActionTypes.CheckoutSetBooks

  constructor(public payload: {bookIds: number[]}) {}
}

// Artificial action due to its effect being impartially implemented (no backend to save request to DB)
export class CheckoutSubmit implements Action {
  readonly type = CheckoutActionTypes.CheckoutSubmit
}

// Clear data so we can checkout new books
export class CheckoutClearUserInfo implements Action {
  readonly type = CheckoutActionTypes.CheckoutClearUserInfo
}
export class CheckoutClearBooks implements Action {
  readonly type = CheckoutActionTypes.CheckoutClearBooks
}
export class CheckoutClearAll implements Action {
  readonly type = CheckoutActionTypes.CheckoutClearAll
}

export type CheckoutActions =
  CheckoutUpdateUserInfo |
  CheckoutSetBooks |
  CheckoutClearUserInfo |
  CheckoutClearBooks |
  CheckoutClearAll |
  CheckoutSubmit
