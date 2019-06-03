/**
 * @name    DynamicFormComponent
 * @description     Similar to its brother, DynamicLiveFormComponent, it can be used to build forms on run-time
 *                  This one, however, RELIES on a configurable SUBMIT button. 
 * @example    See most sub-modules of Tools create pages ie FeelingsCreateComponent
 */

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { DynamicFormConfig } from '../models/dynamic-form-config.model'
import { DynamicFormService } from '../services/dynamic-form.service'

@Component({
  selector: 'dynamic-form',
  styleUrls: ['./dynamic-form.component.scss'], // @todo deprecate
  template: `
    <form [formGroup]="form">
      <ng-container 
        *ngFor="let field of config.inputs"
        dynamicFormField
        [config]="field"
        [group]="form">
      </ng-container>
    </form>
  ` // @todo move this into a UI component !
})
export class DynamicFormComponent implements OnInit {
  @Output() 
  onSubmit: EventEmitter<any> = new EventEmitter<any>()

  @Input()
  config: DynamicFormConfig = {
    inputs: []
  }

  form: FormGroup

  constructor(
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.form = this.dynamicFormService.createFormGroup(this.config.inputs);
  }
}