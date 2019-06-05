import { Component } from "@angular/core"
import { FormGroup } from '@angular/forms'

import { DynamicFormInputComponent } from '../../../models/dynamic-form-input-component.interface'
import { DynamicFormInput } from '../../../models/dynamic-form-input.model'

@Component({
  selector: 'form-button-submit',
  templateUrl: './form-button-submit.component.html',
  styleUrls: ['./form-button-submit.component.scss']
})
export class FormButtonSubmitComponent implements DynamicFormInputComponent {
  formInput: DynamicFormInput<any> // T = any -> not going to emit anything but the signal itself @todo does void work?
  formGroup: FormGroup
}