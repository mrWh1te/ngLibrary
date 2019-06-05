import { Component, ViewEncapsulation } from "@angular/core"

@Component({
  selector: 'checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: [
    './checkout-view.component.scss',
    './../../../../cart/cart-widgets/widgets/shopping-cart/ui/shopping-cart-checkout.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutViewComponent {}