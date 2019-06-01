import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule, MatIconModule } from '@angular/material'

import { LayoutViewComponent } from './views/layout/layout-view.component'
import { CartWidgetsModule } from 'src/app/cart/cart-widgets/cart-widgets.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    CartWidgetsModule,
  ],
  declarations: [
    // Views
    LayoutViewComponent
  ],
  exports: [
    LayoutViewComponent
  ]
})
export class LayoutViewsModule {
  constructor() {
    console.log('[LayoutViewsModule] constructor()')
  }
}