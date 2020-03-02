import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core"

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: [
    './layout.component.scss', 
    './../../../cart/cart-components/components/shopping-cart/ui/shopping-cart-dropdown.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}