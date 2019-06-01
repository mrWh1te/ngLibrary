import { Action } from '@ngrx/store'

export enum CartIconActionTypes {
  AnimateLayoutHeaderShoppingCartIcon = '[Cart-Icon] Animation ON',
  AnimateOffLayoutHeaderShoppingCartIcon = '[Cart-Icon] Animation OFF'
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
