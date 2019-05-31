import { CartActions, CartActionTypes } from '../actions/cart.actions'

export interface State {
  bookIds: number[]
}

export const initialState: State = {
  bookIds: []
}

export function reducer(state: State = initialState, action: CartActions): State {
  switch (action.type) {
    case CartActionTypes.AddBookToCart: {   
      return {
        ...state,
        bookIds: [...state.bookIds, action.payload.bookId]
      }
    }
    case CartActionTypes.RemoveBookFromCart: {
      return {
        ...state,
        bookIds: state.bookIds.filter(bookId => bookId !== action.payload.bookId)
      }
    }
    case CartActionTypes.ClearCart: {
      return {
        ...state,
        bookIds: []
      }
    }
    default: {
      return state
    }
  }
}
