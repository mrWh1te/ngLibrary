import { createAction } from '@ngrx/store'

export const animateLayoutHeaderShoppingCartIcon = createAction(
  '[Cart-Icon] Animation ON',
)

export const animateOffLayoutHeaderShoppingCartIcon = createAction(
  '[Cart-Icon] Animation OFF'
)

export const toggleCartIconDropDown = createAction(
  '[Cart-Icon] Toggle Drop-Down'
)

export const showCartIconDropDown = createAction(
  '[Cart-Icon] Show Drop-Down'
)

export const hideCartIconDropDown = createAction(
  '[Cart-Icon] Hide Drop-Down'
)