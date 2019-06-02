import { NgModule } from "@angular/core"

import { CheckoutRoutingModule } from './checkout-routing.module'

import { CheckoutViewComponent } from './views/checkout/checkout-view.component'

@NgModule({
  imports: [
    CheckoutRoutingModule
  ],
  declarations: [
    CheckoutViewComponent
  ]
})
export class CheckoutViewsModule {}