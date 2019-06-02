import { NgModule } from "@angular/core"
import { FlexLayoutModule } from '@angular/flex-layout'

import { CheckoutRoutingModule } from './checkout-routing.module'
import { CartWidgetsModule } from 'src/app/cart/cart-widgets/cart-widgets.module'

import { CheckoutViewComponent } from './views/checkout/checkout-view.component'

@NgModule({
  imports: [
    FlexLayoutModule,
    CheckoutRoutingModule,
    CartWidgetsModule
  ],
  declarations: [
    CheckoutViewComponent
  ]
})
export class CheckoutViewsModule {}