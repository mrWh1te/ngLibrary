import { Action } from '@ngrx/store'

import { User } from '../models/user.model'

export enum CheckoutActionTypes {
  CheckoutUpdateUserInfo = '[Checkout] Update Request User Info',
  CheckoutClearUserInfo = '[Checkout] Clear Request User Info',
  CheckoutClearAll = '[Checkout] Clear All Request Data',
  CheckoutSubmit = '[Checkout] Submit Request',
  CheckoutSubmitSuccess = '[Checkout] Submit Request Success',
  CheckoutSubmitError = '[Checkout] Submit Request Error'
}

// Setters
export class CheckoutUpdateUserInfo implements Action {
  readonly type = CheckoutActionTypes.CheckoutUpdateUserInfo

  constructor(public payload: {user: Partial<User>}) {}
}

// Artificial action due to its effect being impartially implemented (no backend to save request to DB)
export class CheckoutSubmit implements Action {
  readonly type = CheckoutActionTypes.CheckoutSubmit
}
export class CheckoutSubmitSuccess implements Action {
  readonly type = CheckoutActionTypes.CheckoutSubmitSuccess
}
export class CheckoutSubmitError implements Action {
  readonly type = CheckoutActionTypes.CheckoutSubmitError
}

// Clear data so we can checkout new books
export class CheckoutClearUserInfo implements Action {
  readonly type = CheckoutActionTypes.CheckoutClearUserInfo
}
export class CheckoutClearAll implements Action {
  readonly type = CheckoutActionTypes.CheckoutClearAll
}

export type CheckoutActions =
  CheckoutUpdateUserInfo |
  CheckoutClearUserInfo |
  CheckoutClearAll |
  CheckoutSubmit |
  CheckoutSubmitSuccess |
  CheckoutSubmitError
