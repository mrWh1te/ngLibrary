import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'

import { ModalComponent } from './modal/modal.component'

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule {
  constructor() {
    console.log('[ModalModule] constructor()')
  }
}