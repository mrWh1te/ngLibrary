import { NgModule } from "@angular/core"
import { StoreModule } from '@ngrx/store'

import { reducers } from './reducers/checkout.reducers'

@NgModule({
  imports: [
    StoreModule.forFeature('checkout', reducers)
  ]
})
export class CheckoutDataModule {
  constructor() {
    console.log('[CheckoutDataModule] constructor()')
  }
}