import { createFeatureSelector } from '@ngrx/store'

import { CheckoutState } from '../reducers/checkout.reducers'

export const selectCheckout = createFeatureSelector<CheckoutState>('checkout')
