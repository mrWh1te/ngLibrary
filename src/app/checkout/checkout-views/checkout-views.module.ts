import { NgModule } from "@angular/core"
import { FlexLayoutModule } from '@angular/flex-layout'

import { CheckoutRoutingModule } from './checkout-routing.module'
import { CartWidgetsModule } from 'src/app/cart/cart-widgets/cart-widgets.module'

import { CheckoutViewComponent } from './views/checkout/checkout-view.component'
import { CheckoutWidgetsModule } from '../checkout-widgets/checkout-widgets.module'

@NgModule({
  imports: [
    FlexLayoutModule,
    CheckoutRoutingModule,
    CartWidgetsModule,
    CheckoutWidgetsModule
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
