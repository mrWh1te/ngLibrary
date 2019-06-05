import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'

import { ModalModule } from 'src/app/shared/modal/modal.module'

import { CheckoutSuccessMessageDialogComponent } from './checkout-success-message/smart/checkout-success-message-dialog.component'
import { CheckoutSuccessMessageDialogUiComponent } from './checkout-success-message/ui/checkout-success-message-dialog-ui.component'

/**
 * @description   Necessary code separation other-wise circular dependency between CheckoutDataModule & CheckoutWidgetsModule
 */
@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [
    CheckoutSuccessMessageDialogComponent,
    CheckoutSuccessMessageDialogUiComponent
  ],
  exports: [
    CheckoutSuccessMessageDialogComponent
  ],
  entryComponents: [
    CheckoutSuccessMessageDialogComponent
  ]
})
export class CheckoutDialogsModule {
  constructor() {
    console.log('[CheckoutDialogsModule] constructor()')
  }
}