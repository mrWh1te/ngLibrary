import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { DynamicFormFieldDirective } from './directives/dynamic-form-field.directive'

import { DynamicLiveFormComponent } from './smart/dynamic-live-form.component'
import { DynamicFormComponent } from './smart/dynamic-form.component'

import { DynamicFormUiComponent } from './ui/dynamic-form/dynamic-form-ui.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormFieldDirective,
    // Smart
    DynamicFormComponent,
    DynamicLiveFormComponent,
    // UI
    DynamicFormUiComponent,
    // Form Inputs
    
  ],
  exports: [
    DynamicFormComponent,
    DynamicLiveFormComponent
  ],
  providers: [],
  entryComponents: []
})
export class DynamicFormModule {}