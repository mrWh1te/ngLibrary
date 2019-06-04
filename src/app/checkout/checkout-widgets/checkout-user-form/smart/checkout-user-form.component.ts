import { Component } from "@angular/core"

import { Store } from '@ngrx/store'

import { DynamicFormConfig } from 'src/app/shared/dynamic-form/models/dynamic-form-config.model'

@Component({
  selector: 'checkout-user-form',
  template: `
    <dynamic-form-live
      [config]="dynamicFormConfig"
      (onFormChange)="formValueChanged($event)"></dynamic-form-live>
  `
})
export class CheckoutUserFormComponent {
  dynamicFormConfig: DynamicFormConfig = {
    inputs: [
      {
        type: 'text',
        name: 'first_name',
        placeholder: 'First name'
      }
    ]
  }

  constructor(
    private store: Store<any>
  ) {}

  formValueChanged(formValue: any) {
    console.log('[CheckoutUserFormComponent] formValueChanged() formValue = ', formValue)
  }
}