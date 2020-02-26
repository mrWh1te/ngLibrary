import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

import { LayoutViewComponent } from './views/layout/layout-view.component'
import { CartComponentsModule } from 'src/app/cart/cart-components/cart-components.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    CartComponentsModule,
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