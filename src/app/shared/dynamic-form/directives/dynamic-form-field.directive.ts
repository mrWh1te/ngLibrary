import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef, ComponentRef } from '@angular/core'

import { FormGroup } from '@angular/forms'

import { DynamicFormInput } from '../models/dynamic-form-input.model'
import { DynamicFormInputComponentsType, DynamicFormInputComponentsMap } from '../dynamic-form-input-components'
import { DynamicFormInputComponent } from '../models/dynamic-form-input-component.interface'

@Directive({
  selector: '[dynamicFormField]'
})
export class DynamicFormFieldDirective implements DynamicFormInputComponent, OnInit {
  @Input()
  formInput: DynamicFormInput<any>

  @Input()
  formGroup: FormGroup

  formInputComponent: ComponentRef<DynamicFormInputComponentsType>

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = DynamicFormInputComponentsMap[this.formInput.type]

    const factory = this.resolver.resolveComponentFactory<any>(component)

    this.formInputComponent = this.container.createComponent(factory)
    this.formInputComponent.instance.formInput = this.formInput
    this.formInputComponent.instance.formGroup = this.formGroup
  }
}