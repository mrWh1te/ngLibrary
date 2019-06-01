import { Action } from '@ngrx/store'

export enum CartIconActionTypes {
  AnimateLayoutHeaderShoppingCartIcon = '[Layout] Animation ON of Header Shopping Cart Icon',
  AnimateOffLayoutHeaderShoppingCartIcon = '[Layout] Animation OFF of Header Shopping Cart Icon'
}

export class AnimateLayoutHeaderShoppingCartIcon implements Action {
  readonly type = CartIconActionTypes.AnimateLayoutHeaderShoppingCartIcon
}
export class AnimateOffLayoutHeaderShoppingCartIcon implements Action {
  readonly type = CartIconActionTypes.AnimateOffLayoutHeaderShoppingCartIcon
}

export type CartIconActions =
  AnimateLayoutHeaderShoppingCartIcon |
  AnimateOffLayoutHeaderShoppingCartIcon
