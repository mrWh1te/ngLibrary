import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core"

@Component({
  selector: 'layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: [
    './layout-view.component.scss', 
    './../../../../cart/cart-widgets/widgets/shopping-cart/ui/shopping-cart-dropdown.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutViewComponent {}