import { NgModule } from "@angular/core"
import { FlexLayoutModule } from '@angular/flex-layout'

import { CheckoutRoutingModule } from './checkout-routing.module'
import { CartComponentsModule } from 'src/app/cart/cart-components/cart-components.module'

import { CheckoutViewComponent } from './views/checkout/checkout-view.component'
import { CheckoutComponentsModule } from '../checkout-components/checkout-components.module'

@NgModule({
  imports: [
    FlexLayoutModule,
    CheckoutRoutingModule,
    CheckoutComponentsModule,
    CartComponentsModule
  ],
  declarations: [
    CheckoutViewComponent
  ]
})
export class CheckoutViewsModule {
  constructor() {
    console.log('[CheckoutViewsModule] constructor()')
  }
}
