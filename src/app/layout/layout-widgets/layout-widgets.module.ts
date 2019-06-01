import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { MatIconModule, MatBadgeModule } from '@angular/material'

import { LayoutDataModule } from '../layout-data/layout-data.module'

import { ShoppingCartIconComponent } from './components/shopping-cart-icon/smart/shopping-cart-icon.component'
import { ShoppingCartIconUiComponent } from './components/shopping-cart-icon/ui/shopping-cart-icon-ui.component'

@NgModule({
  imports: [
    CommonModule,
    LayoutDataModule,
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
export class LayoutWidgetsModule {
  constructor() {
    console.log('[LayoutWidgetsModule] constructor()')
  }
}