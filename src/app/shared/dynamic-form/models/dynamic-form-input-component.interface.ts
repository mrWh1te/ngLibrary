import { DynamicFormInput } from './dynamic-form-input.model'
import { FormGroup } from '@angular/forms'

export interface DynamicFormInputComponent {
  formInput: DynamicFormInput<any>
  formGroup: FormGroup
}