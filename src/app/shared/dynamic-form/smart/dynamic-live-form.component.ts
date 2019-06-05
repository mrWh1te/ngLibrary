/**
 * @name    DynamicLiveFormComponent
 * @description     Similar to its brother, DynamicFormComponent, it can be used to build forms on run-time
 *                  This one, however, does not use a SUBMIT button. Instead, it emits all changes as they are observed in the FormGroup valueChanges observable
 * @example    See any Settings container components that are form based ie SettingsPreferencesComponent
 */

// Dependencies
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { DynamicFormConfig } from '../models/dynamic-form-config.model'
import { DynamicFormService } from '../services/dynamic-form.service'

@Component({
  selector: 'dynamic-form-live',
  template: `
    <dynamic-form-ui
      [dynamicFormConfig]="config"
      [formGroup]="formGroup"></dynamic-form-ui>
  `
})
export class DynamicLiveFormComponent implements OnInit {
  @Output() 
  onFormChange: EventEmitter<any> = new EventEmitter<any>()

  @Input()
  config: DynamicFormConfig

  formGroup: FormGroup

  constructor(
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.formGroup = this.dynamicFormService.createFormGroup(this.config.inputs)

    // How this form is live:
    this.formGroup.valueChanges.subscribe(form => {
      this.onFormChange.emit(form)
    })
  }
}