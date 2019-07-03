// import { CartActions, CartActionTypes } from '../actions/cart.actions'

import { createReducer, on, Action } from '@ngrx/store'

import * as cartActions from '../actions/cart.actions'

export interface State {
  bookIds: number[]
}

export const initialState: State = {
  bookIds: []
}

const cartStatusReducer = createReducer(
  initialState,
  on(
    cartActions.addBookToCart,
    (state, { bookId }) => ({...state, bookIds: [...state.bookIds, bookId]})
  ),
  on(
    cartActions.removeBookFromCart,
    (state, { bookId }) => ({...state, bookIds: state.bookIds.filter(id => id !== bookId)})
  ),
  on(
    cartActions.clearCart,
    state => ({...state, bookIds: []})
  )
)

export function reducer(state: State | undefined, action: Action) {
  return cartStatusReducer(state, action)
}

// export function reducerOld(state: State = initialState, action: CartActions): State {
//   switch (action.type) {
//     case CartActionTypes.AddBookToCart: {     
//       return {
//         ...state,
//         bookIds: [...state.bookIds, action.payload.bookId]
//       }
//     }
//     case CartActionTypes.RemoveBookFromCart: {
//       return {
//         ...state,
//         bookIds: state.bookIds.filter(bookId => bookId !== action.payload.bookId)
//       }
//     }
//     case CartActionTypes.ClearCart: {
//       return {
//         ...state,
//         bookIds: []
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }
