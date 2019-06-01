import { NgModule } from "@angular/core"
import { OverlayModule } from '@angular/cdk/overlay'
import { PortalModule } from '@angular/cdk/portal'

import { DropDownComponent } from './components/drop-down/drop-down.component'

import { DropDownService } from './services/drop-down.service'

@NgModule({
  imports: [
    OverlayModule,
    PortalModule
  ],
  declarations: [
    // Smart
    DropDownComponent,
  ],
  providers: [
    DropDownService
  ],
  exports: [
    DropDownComponent
  ]
})
export class DropDownModule {}