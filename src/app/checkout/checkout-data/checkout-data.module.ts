import { NgModule } from "@angular/core"

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers } from './reducers/checkout.reducers'
import { CheckoutService } from './services/checkout.service'
import { CheckoutEffects } from './effects/checkout.effects'

@NgModule({
  imports: [
    StoreModule.forFeature('checkout', reducers),
    EffectsModule.forFeature([CheckoutEffects])
  ],
  providers: [
    CheckoutService
  ]
})
export class CheckoutDataModule {
  constructor() {
    console.log('[CheckoutDataModule] constructor()')
  }
}