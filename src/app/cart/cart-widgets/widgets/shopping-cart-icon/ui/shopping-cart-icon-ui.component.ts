import { Component, Input } from "@angular/core";

@Component({
  selector: 'shopping-cart-icon-ui',
  templateUrl: './shopping-cart-icon-ui.component.html',
  styleUrls: ['./shopping-cart-icon-ui.component.scss']
})
export class ShoppingCartIconUiComponent {
  @Input() animating: boolean
  @Input() cartItemsCount: number
}