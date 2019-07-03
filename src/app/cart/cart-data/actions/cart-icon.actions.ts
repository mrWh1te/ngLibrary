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

// export enum CartIconActionTypes {
//   AnimateLayoutHeaderShoppingCartIcon = '[Cart-Icon] Animation ON',
//   AnimateOffLayoutHeaderShoppingCartIcon = '[Cart-Icon] Animation OFF',
//   ToggleCartIconDropDown = '[Cart-Icon] Toggle Drop-Down',
//   ShowCartIconDropDown = '[Cart-Icon] Show Drop-Down',
//   HideCartIconDropDown = '[Cart-Icon] Hide Drop-Down'
// }

// export class AnimateLayoutHeaderShoppingCartIcon implements Action {
//   readonly type = CartIconActionTypes.AnimateLayoutHeaderShoppingCartIcon
// }
// export class AnimateOffLayoutHeaderShoppingCartIcon implements Action {
//   readonly type = CartIconActionTypes.AnimateOffLayoutHeaderShoppingCartIcon
// }

// export class ToggleCartIconDropDown implements Action {
//   readonly type = CartIconActionTypes.ToggleCartIconDropDown
// }
// export class ShowCartIconDropDown implements Action {
//   readonly type = CartIconActionTypes.ShowCartIconDropDown
// }
// export class HideCartIconDropDown implements Action {
//   readonly type = CartIconActionTypes.HideCartIconDropDown
// }

// export type CartIconActions =
//   AnimateLayoutHeaderShoppingCartIcon |
//   AnimateOffLayoutHeaderShoppingCartIcon |
//   ToggleCartIconDropDown |
//   ShowCartIconDropDown |
//   HideCartIconDropDown

