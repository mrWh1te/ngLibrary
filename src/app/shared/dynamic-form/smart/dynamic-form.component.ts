/**
 * @name    DynamicFormComponent
 * @description     Similar to its brother, DynamicFormLiveComponent, it can be used to build forms on run-time
 */

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { DynamicFormConfig } from '../models/dynamic-form-config.model'
import { DynamicFormService } from '../services/dynamic-form.service'

@Component({
  selector: 'dynamic-form',
  template: `
    <dynamic-form-ui
      [dynamicFormConfig]="config"
      [formGroup]="formGroup"
      (formSubmitted)="onSubmit.emit($event)"></dynamic-form-ui>
  `
})
export class DynamicFormComponent implements OnInit {
  @Output() 
  onSubmit: EventEmitter<any> = new EventEmitter<any>()

  @Input()
  config: DynamicFormConfig

  formGroup: FormGroup

  constructor(
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.formGroup = this.dynamicFormService.createFormGroup(this.config.inputs)
  }
}