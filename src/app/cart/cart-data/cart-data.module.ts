import { NgModule } from '@angular/core'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers } from './reducers/cart.reducers'
import { CartEffects } from './effects/cart.effects'
import { CartIconEffects } from './effects/cart-icon.effects'

@NgModule({
  imports: [
    StoreModule.forFeature('cart', reducers),
    EffectsModule.forFeature([CartEffects, CartIconEffects]),
    MatSnackBarModule
  ]
})
export class CartDataModule {
  constructor() {
    console.log('[CartDataModule] constructor()')
  }
}