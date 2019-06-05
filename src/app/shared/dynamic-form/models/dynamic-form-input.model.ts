import { ValidatorFn } from '@angular/forms'

export interface DynamicFormInput<T> {
  type: string, // Maps to dynamic-form.inputs.const.ts
  name: string,
  label?: string,
  defaultValue?: T,
  placeholder?: string,
  hint?: string,
  validators?: ValidatorFn | ValidatorFn[]
}