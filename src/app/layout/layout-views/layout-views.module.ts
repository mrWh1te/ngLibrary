import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule, MatIconModule, MatBadgeModule } from '@angular/material'

import { LayoutComponent } from './components/layout/smart/layout.component'
import { LayoutUiComponent } from './components/layout/ui/layout-ui.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ],
  declarations: [
    // Smart Components
    LayoutComponent,
    // UI Components
    LayoutUiComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutViewsModule {
  constructor() {
    console.log('[LayoutViewsModule] constructor()')
  }
}