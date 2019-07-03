import { createAction, props } from '@ngrx/store'

import { User } from '../models/user.model'

export const checkoutUpdateUserInfo = createAction(
  '[Checkout] Update Request User Info',
  props<{user: Partial<User>}>()
)

export const checkoutClearUserInfo = createAction(
  '[Checkout] Clear Request User Info'
)

export const checkoutComplete = createAction(
  '[Checkout] Complete'
)

export const checkoutSubmit = createAction(
  '[Checkout] Submit Request'
)

export const checkoutSubmitSuccess = createAction(
  '[Checkout] Submit Request Success'
)

export const checkoutSubmitError = createAction(
  '[Checkout] Submit Request Error'
)

// export enum CheckoutActionTypes {
//   CheckoutUpdateUserInfo = '[Checkout] Update Request User Info',
//   CheckoutClearUserInfo = '[Checkout] Clear Request User Info',
//   CheckoutComplete = '[Checkout] Complete',
//   CheckoutSubmit = '[Checkout] Submit Request',
//   CheckoutSubmitSuccess = '[Checkout] Submit Request Success',
//   CheckoutSubmitError = '[Checkout] Submit Request Error'
// }

// // Setters
// export class CheckoutUpdateUserInfo implements Action {
//   readonly type = CheckoutActionTypes.CheckoutUpdateUserInfo

//   constructor(public payload: {user: Partial<User>}) {}
// }

// // Artificial action due to its effect being impartially implemented (no backend to save request to DB)
// export class CheckoutSubmit implements Action {
//   readonly type = CheckoutActionTypes.CheckoutSubmit
// }
// export class CheckoutSubmitSuccess implements Action {
//   readonly type = CheckoutActionTypes.CheckoutSubmitSuccess
// }
// export class CheckoutSubmitError implements Action {
//   readonly type = CheckoutActionTypes.CheckoutSubmitError
// }

// // Clear data so we can checkout new books
// export class CheckoutClearUserInfo implements Action {
//   readonly type = CheckoutActionTypes.CheckoutClearUserInfo
// }
// export class CheckoutComplete implements Action {
//   readonly type = CheckoutActionTypes.CheckoutComplete
// }

// export type CheckoutActions =
//   CheckoutUpdateUserInfo |
//   CheckoutClearUserInfo |
//   CheckoutComplete |
//   CheckoutSubmit |
//   CheckoutSubmitSuccess |
//   CheckoutSubmitError
