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