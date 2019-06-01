import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { MatIconModule, MatBadgeModule } from '@angular/material'

import { CartDataModule } from '../cart-data/cart-data.module'

import { ShoppingCartIconComponent } from './widgets/shopping-cart-icon/smart/shopping-cart-icon.component'
import { ShoppingCartIconUiComponent } from './widgets/shopping-cart-icon/ui/shopping-cart-icon-ui.component'

@NgModule({
  imports: [
    CommonModule,
    CartDataModule,
    MatIconModule,
    MatBadgeModule
  ],
  declarations: [
    // Smart
    ShoppingCartIconComponent,
    // UI
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