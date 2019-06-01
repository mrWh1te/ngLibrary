import { Action } from '@ngrx/store'

export enum LayoutActionTypes {
  AnimateLayoutHeaderShoppingCartIcon = '[Layout] Animation ON of Header Shopping Cart Icon',
  AnimateOffLayoutHeaderShoppingCartIcon = '[Layout] Animation OFF of Header Shopping Cart Icon'
}

export class AnimateLayoutHeaderShoppingCartIcon implements Action {
  readonly type = LayoutActionTypes.AnimateLayoutHeaderShoppingCartIcon
}
export class AnimateOffLayoutHeaderShoppingCartIcon implements Action {
  readonly type = LayoutActionTypes.AnimateOffLayoutHeaderShoppingCartIcon
}

export type LayoutActions =
  AnimateLayoutHeaderShoppingCartIcon |
  AnimateOffLayoutHeaderShoppingCartIcon
