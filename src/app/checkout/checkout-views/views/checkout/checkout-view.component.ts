import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core"

@Component({
  selector: 'checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: [
    './checkout-view.component.scss',
    './../../../../cart/cart-components/components/shopping-cart/ui/shopping-cart-checkout.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutViewComponent {}