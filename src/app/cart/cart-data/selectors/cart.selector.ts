import { createFeatureSelector } from '@ngrx/store'

import { CartState } from '../reducers/cart.reducers'

export const selectCart = createFeatureSelector<CartState>('cart')
