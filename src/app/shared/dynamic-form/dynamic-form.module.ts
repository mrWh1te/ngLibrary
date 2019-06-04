import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'

import { MatInputModule } from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { DynamicFormFieldDirective } from './directives/dynamic-form-field.directive'

import { DynamicLiveFormComponent } from './smart/dynamic-live-form.component'
import { DynamicFormComponent } from './smart/dynamic-form.component'

import { DynamicFormUiComponent } from './ui/dynamic-form/dynamic-form-ui.component'

import { FormInputTextComponent } from './ui/dynamic-form-inputs/form-input-text/form-input-text.component'

import { DynamicFormService } from './services/dynamic-form.service'
import { FormButtonSubmitComponent } from './ui/dynamic-form-inputs/form-button-submit/form-button-submit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [
    DynamicFormFieldDirective,
    // Smart
    DynamicFormComponent,
    DynamicLiveFormComponent,
    // UI
    DynamicFormUiComponent,
    // Form Inputs
    FormInputTextComponent,
    FormButtonSubmitComponent,
  ],
  exports: [
    DynamicFormComponent,
    DynamicLiveFormComponent
  ],
  providers: [
    DynamicFormService
  ],
  entryComponents: [
    FormInputTextComponent,
    FormButtonSubmitComponent
  ]
})
export class DynamicFormModule {}