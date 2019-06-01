import { LayoutActions, LayoutActionTypes } from '../actions/layout.actions'

export interface State {
  animatingHeaderShoppingCartIcon: boolean
}

export const initialState: State = {
  animatingHeaderShoppingCartIcon: false
}

export function reducer(state: State = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutActionTypes.AnimateLayoutHeaderShoppingCartIcon: {     
      return {
        ...state,
        animatingHeaderShoppingCartIcon: true
      }
    }
    case LayoutActionTypes.AnimateOffLayoutHeaderShoppingCartIcon: {
      return {
        ...state,
        animatingHeaderShoppingCartIcon: false
      }
    }
    default: {
      return state
    }
  }
}
