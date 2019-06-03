import { Injectable } from '@angular/core'

import { FormBuilder, FormGroup } from '@angular/forms'

import { DynamicFormInput } from '../models/dynamic-form-input.model'

@Injectable()
export class DynamicFormService {
  constructor(
    private fb:FormBuilder
  ) {}

  public createFormGroup(inputs: DynamicFormInput<any>[]): FormGroup {
    const group = this.fb.group({})

    inputs.forEach(control => {
      group.addControl(control.name, this.fb.control(control.defaultValue))
    })

    return group
  }
}