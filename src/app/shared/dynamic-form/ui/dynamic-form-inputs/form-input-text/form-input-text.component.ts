import { Component } from "@angular/core"
import { FormGroup } from '@angular/forms'

import { DynamicFormInput } from '../../../models/dynamic-form-input.model'
import { DynamicFormInputComponent } from '../../../models/dynamic-form-input-component.interface'

@Component({
  selector: 'form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss']
})
export class FormInputTextComponent implements DynamicFormInputComponent {
  formInput: DynamicFormInput<string>
  formGroup: FormGroup
}