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