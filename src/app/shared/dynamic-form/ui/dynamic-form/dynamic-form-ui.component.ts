import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core"
import { FormGroup } from '@angular/forms'

import { DynamicFormConfig } from '../../models/dynamic-form-config.model'

@Component({
  selector: 'dynamic-form-ui', 
  templateUrl: './dynamic-form-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormUiComponent {
  @Input() dynamicFormConfig: DynamicFormConfig
  @Input() formGroup: FormGroup
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>()
}