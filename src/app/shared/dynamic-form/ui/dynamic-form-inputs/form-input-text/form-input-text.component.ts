import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core"
import { FormGroup } from '@angular/forms'

import { DynamicFormInput } from '../../../models/dynamic-form-input.model'
import { DynamicFormInputComponent } from '../../../models/dynamic-form-input-component.interface'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputTextComponent implements DynamicFormInputComponent, OnInit {
  formInput: DynamicFormInput<string>
  formGroup: FormGroup

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.formInput.errors.forEach(formError => {
      formError.errorMessageHTML = this.sanitizer.bypassSecurityTrustHtml(formError.errorMessageHTML as string)
    })
  }
}