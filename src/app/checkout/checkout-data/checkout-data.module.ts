import { NgModule } from "@angular/core"
import { MatDialogModule } from '@angular/material/dialog'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { CheckoutDialogsModule } from '../checkout-dialogs/checkout-dialogs.module'

import { reducers } from './reducers/checkout.reducers'
import { CheckoutService } from './services/checkout.service'
import { CheckoutEffects } from './effects/checkout.effects'

@NgModule({
  imports: [
    StoreModule.forFeature('checkout', reducers),
    EffectsModule.forFeature([CheckoutEffects]),
    MatDialogModule,
    CheckoutDialogsModule
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