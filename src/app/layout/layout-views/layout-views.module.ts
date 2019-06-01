import { NgModule } from "@angular/core";
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutComponent } from './components/layout/smart/layout.component';
import { LayoutUiComponent } from './components/layout/ui/layout-ui.component';

@NgModule({
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule
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