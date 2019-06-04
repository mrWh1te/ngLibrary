import { Component } from "@angular/core"

import { Store } from '@ngrx/store'

import { DynamicFormConfig } from 'src/app/shared/dynamic-form/models/dynamic-form-config.model'
import { CheckoutUpdateUserInfo } from 'src/app/checkout/checkout-data/actions/checkout.actions';
import { User } from 'src/app/checkout/checkout-data/models/user.model'

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
      },
      {
        type: 'text',
        name: 'last_name',
        placeholder: 'Last name'
      },
      {
        type: 'text',
        name: 'library_card_id',
        placeholder: 'Library Card ID',
        hint: 'Found on the backside of your Library Card'
      }
    ]
  }

  constructor(
    private store: Store<any>
  ) {}

  formValueChanged(user: Partial<User>) {
    // console.log('[CheckoutUserFormComponent] formValueChanged() user = ', user)
    this.store.dispatch(new CheckoutUpdateUserInfo({user}))
  }
}