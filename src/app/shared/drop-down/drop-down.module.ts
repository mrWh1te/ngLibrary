import { NgModule } from "@angular/core"
import { OverlayModule } from '@angular/cdk/overlay'
import { PortalModule } from '@angular/cdk/portal'

import { DropDownComponent } from './widgets/drop-down/smart/drop-down.component'
import { DropDownUiComponent } from './widgets/drop-down/ui/drop-down-ui.component'

import { DropDownService } from './services/drop-down.service'

@NgModule({
  imports: [
    OverlayModule,
    PortalModule
  ],
  declarations: [
    // Smart
    DropDownComponent,
    // UI
    DropDownUiComponent
  ],
  providers: [
    DropDownService
  ],
  exports: [
    DropDownComponent
  ]
})
export class DropDownModule {}