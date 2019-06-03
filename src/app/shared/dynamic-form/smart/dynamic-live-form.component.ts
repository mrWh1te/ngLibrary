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
  styleUrls: ['./dynamic-live-form.component.scss'],
  template: `
    <form [formGroup]="form">
      <ng-container 
        *ngFor="let field of config.inputs;"
        dynamicFormField
        [config]="field"
        [group]="form">
      </ng-container>
    </form>
  ` // @todo move this into a UI component !
})
export class DynamicLiveFormComponent implements OnInit {
  @Output() 
  onFormChange: EventEmitter<any> = new EventEmitter<any>()

  @Input()
  config: DynamicFormConfig = {
    inputs: []
  }

  form: FormGroup

  constructor(
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.form = this.dynamicFormService.createFormGroup(this.config.inputs)

    // Make this form live with immediate reactions on changes to form values
    this.form.valueChanges.subscribe(form => {
      console.log('[DynamicLiveFormComponent] form valueChanges, form = ', form)
      this.onFormChange.emit(form)
    })
  }
}