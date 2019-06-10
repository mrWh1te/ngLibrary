import { Component, ChangeDetectionStrategy } from "@angular/core"
import { FormGroup } from '@angular/forms'

import { DynamicFormInputComponent } from '../../../models/dynamic-form-input-component.interface'
import { DynamicFormInput } from '../../../models/dynamic-form-input.model'

/**
 * @note    The implementation of this component is in-complete. 
 */
@Component({
  selector: 'form-button-submit',
  templateUrl: './form-button-submit.component.html',
  styleUrls: ['./form-button-submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormButtonSubmitComponent implements DynamicFormInputComponent {
  formInput: DynamicFormInput<any> // T = any -> not going to emit anything but the signal itself @todo does void work?
  formGroup: FormGroup
}