import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'
import { FlexLayoutModule } from '@angular/flex-layout'

import { CartDataModule } from '../cart-data/cart-data.module'
import { DropDownModule } from '../../shared/drop-down/drop-down.module'

import { ShoppingCartIconComponent } from './components/shopping-cart-icon/smart/shopping-cart-icon.component'
import { ShoppingCartIconUiComponent } from './components/shopping-cart-icon/ui/shopping-cart-icon-ui.component'
import { ShoppingCartComponent } from './components/shopping-cart/smart/shopping-cart.component'
import { ShoppingCartUiComponent } from './components/shopping-cart/ui/shopping-cart-ui.component'

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
    ShoppingCartIconComponent,
    ShoppingCartComponent
  ]
})
export class CartComponentsModule {
  constructor() {
    console.log('[CartComponentsModule] constructor()')
  }
}
