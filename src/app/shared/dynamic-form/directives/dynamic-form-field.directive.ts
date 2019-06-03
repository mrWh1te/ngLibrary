import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core

import { FormGroup } from '@angular/forms'

import { DYNAMICFORMINPUTS } from '../dynamic-form-inputs.const'
import { DynamicFormInput } from '../models/dynamic-form-input.model'

@Directive({
  selector: '[dynamicFormField]'
})
export class DynamicFormFieldDirective implements OnInit {
  @Input()
  config: DynamicFormInput<any>

  @Input()
  group: FormGroup

  component: any

  /**
   * 
   * @param resolver 
   * @param container 
   */
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  /**
   * 
   */
  ngOnInit() {
    const component = DYNAMICFORMINPUTS[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}