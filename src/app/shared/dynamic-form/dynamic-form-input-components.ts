import { FormButtonSubmitComponent } from './ui/dynamic-form-inputs/form-button-submit/form-button-submit.component';
import { FormInputTextComponent } from './ui/dynamic-form-inputs/form-input-text/form-input-text.component';

/**
 * @description   A dictionary that represents mappings of strings to actual Dynamic Form Input Components
 */
export const DynamicFormInputComponentsMap = {
  text: FormInputTextComponent,
  submit: FormButtonSubmitComponent
}

/**
 * @description   A reusable wrapper Type to help with some static typing
 */
export type DynamicFormInputComponentsType =
  FormButtonSubmitComponent |
  FormInputTextComponent