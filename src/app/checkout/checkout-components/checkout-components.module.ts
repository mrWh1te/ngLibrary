import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'

import { DynamicFormModule } from 'src/app/shared/dynamic-form/dynamic-form.module'
import { CheckoutDataModule } from '../checkout-data/checkout-data.module'

import { CheckoutUserFormComponent } from './components/checkout-user-form/smart/checkout-user-form.component'
import { CheckoutSubmitButtonComponent } from './components/checkout-submit-button/smart/checkout-submit-button.component'
import { CheckoutSubmitButtonUiComponent } from './components/checkout-submit-button/ui/checkout-submit-button-ui.component'

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    CheckoutDataModule,
    MatButtonModule
  ],
  declarations: [
    CheckoutUserFormComponent,
    CheckoutSubmitButtonComponent,
    CheckoutSubmitButtonUiComponent,
  ],
  exports: [
    CheckoutUserFormComponent,
    CheckoutSubmitButtonComponent,
  ]
})
export class CheckoutComponentsModule {
  constructor() {
    console.log('[CheckoutComponentsModule] constructor()')
  }
}