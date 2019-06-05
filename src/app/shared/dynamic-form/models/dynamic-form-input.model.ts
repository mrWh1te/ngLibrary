import { ValidatorFn } from '@angular/forms'
import { SafeHtml } from '@angular/platform-browser'

export interface FormError {
  validationRule: string
  errorMessageHTML: string | SafeHtml
}

export interface DynamicFormInput<T> {
  type: string, // Maps to dynamic-form.inputs.const.ts
  name: string,
  label?: string,
  defaultValue?: T,
  placeholder?: string,
  hint?: string,
  validators?: ValidatorFn | ValidatorFn[],
  errors?: FormError[]
}