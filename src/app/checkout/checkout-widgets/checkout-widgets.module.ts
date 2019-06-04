import { NgModule } from "@angular/core"

import { DynamicFormModule } from 'src/app/shared/dynamic-form/dynamic-form.module'

import { CheckoutUserFormComponent } from './checkout-user-form/smart/checkout-user-form.component'

@NgModule({
  imports: [
    DynamicFormModule
  ],
  declarations: [
    CheckoutUserFormComponent
  ],
  exports: [
    CheckoutUserFormComponent
  ]
})
export class CheckoutWidgetsModule {
  constructor() {
    console.log('[CheckoutWidgetsModule] constructor()')
  }
}