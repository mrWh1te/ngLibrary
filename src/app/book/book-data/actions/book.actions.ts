import { createAction, props } from '@ngrx/store'

export const bookSelected = createAction(
  '[Book] Book Selected',
  props<{ bookId: number }>()
)

export const clearBookSelected = createAction(
  '[Book] Selected Book Cleared'
)

export const selectedBookAddToCartBtnClick = createAction(
  '[Book] Selected Book\'s "Add to Basket" Button Click'
)

// export enum BookActionTypes {
//   BookSelected = '[Book] Book Selected',
//   ClearBookSelected = '[Book] Selected Book Cleared',
//   SelectedBookAddToCartBtnClick = '[Book] Selected Book\'s "Add to Basket" Button Click'
// }

// export class BookSelected implements Action {
//   readonly type = BookActionTypes.BookSelected

//   constructor(public payload: {bookId: number}) {}
// }
// export class ClearBookSelected implements Action {
//   readonly type = BookActionTypes.ClearBookSelected
// }

// export class SelectedBookAddToCartBtnClick implements Action {
//   readonly type = BookActionTypes.SelectedBookAddToCartBtnClick
// }

// export type BookActions =
//   BookSelected |
//   ClearBookSelected |
//   SelectedBookAddToCartBtnClick
