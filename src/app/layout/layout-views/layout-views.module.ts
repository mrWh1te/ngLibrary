import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule, MatIconModule } from '@angular/material'

import { LayoutWidgetsModule } from '../layout-widgets/layout-widgets.module'

import { LayoutViewComponent } from './views/layout/layout-view.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    LayoutWidgetsModule
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