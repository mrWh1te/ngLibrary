import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { MatIconModule, MatBadgeModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

import { CartDataModule } from '../cart-data/cart-data.module'
import { DropDownModule } from 'src/app/shared/drop-down/drop-down.module'

import { ShoppingCartIconComponent } from './widgets/shopping-cart-icon/smart/shopping-cart-icon.component'
import { ShoppingCartIconUiComponent } from './widgets/shopping-cart-icon/ui/shopping-cart-icon-ui.component'
import { ShoppingCartComponent } from './widgets/shopping-cart/smart/shopping-cart.component'
import { ShoppingCartUiComponent } from './widgets/shopping-cart/ui/shopping-cart-ui.component'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CartDataModule,
    MatIconModule,
    MatBadgeModule,
    DropDownModule
  ],
  declarations: [
    // Smart
    ShoppingCartComponent,
    ShoppingCartIconComponent,
    // UI
    ShoppingCartUiComponent,
    ShoppingCartIconUiComponent
  ],
  exports: [
    ShoppingCartIconComponent
  ]
})
export class CartWidgetsModule {
  constructor() {
    console.log('[CartWidgetsModule] constructor()')
  }
}