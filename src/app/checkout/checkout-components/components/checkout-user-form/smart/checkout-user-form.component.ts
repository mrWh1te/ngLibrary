import { Component, ChangeDetectionStrategy } from "@angular/core"
import { Validators } from '@angular/forms'

import { Store, select } from '@ngrx/store'

import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators'

import { DynamicFormConfig } from '../../../../../shared/dynamic-form/models/dynamic-form-config.model'
import { checkoutUpdateUserInfo } from '../../../../checkout-data/actions/checkout.actions'
import { User } from '../../../../checkout-data/models/user.model'
import { selectCheckoutRequestUser } from '../../../../checkout-data/selectors/checkout-request.selectors'

@Component({
  selector: 'checkout-user-form',
  template: `
    <dynamic-form-live
      [config]="dynamicFormConfig$ | async"
      (onFormChange)="formValueChanged($event)"></dynamic-form-live>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutUserFormComponent {
  dynamicFormConfig$: Observable<DynamicFormConfig>

  constructor(
    private store: Store<any>
  ) {
    this.dynamicFormConfig$ = store.pipe(
      select(selectCheckoutRequestUser),
      take(1), // only do this on initial load, and not on changes to the User data, otherwise we'll be effectively trying to rebuild the form on each change. Currently, the dynamic form component doesn't properly watch the config input for changes to then update the form controller's group's control's values or recreate the whole form all together... a lot to be added to DynamicFormModule, come time
      map(checkoutUser => ({
        inputs: [
          {
            type: 'text',
            name: 'first_name',
            placeholder: 'First name',
            defaultValue: checkoutUser !== null ? checkoutUser.first_name : null,
            validators: [Validators.required, Validators.minLength(1), Validators.maxLength(255)],
            errors: [
              {
                validationRule: 'required',
                errorMessageHTML: `First name is <strong>required</strong>`
              },
              {
                validationRule: 'maxlength',
                errorMessageHTML: `It must be less than <strong>255 characters</strong>`
              }
            ]
          },
          {
            type: 'text',
            name: 'last_name',
            placeholder: 'Last name',
            defaultValue: checkoutUser !== null ? checkoutUser.last_name : null,
            validators: [Validators.required, Validators.minLength(1), Validators.maxLength(255)],
            errors: [
              {
                validationRule: 'required',
                errorMessageHTML: `Last name is <strong>required</strong>`
              },
              {
                validationRule: 'maxlength',
                errorMessageHTML: `It can\'t be longer than <strong>255 characters</strong>`
              }
            ]
          },
          {
            type: 'text',
            name: 'library_card_id',
            placeholder: 'Library Card ID',
            defaultValue: checkoutUser !== null ? checkoutUser.library_card_id : null,
            hint: 'Found on the backside of your Library Card',
            validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
            errors: [
              {
                validationRule: 'required',
                errorMessageHTML: `Your Library Card ID is <strong>required</strong>`
              },
              {
                validationRule: 'minlength',
                errorMessageHTML: `The ID length should be <strong>8 characters</strong> long`
              }
            ]
          }
        ]
      }))
    )
  }

  formValueChanged(user: Partial<User>) {
    this.store.dispatch(checkoutUpdateUserInfo({user}))
  }
}
