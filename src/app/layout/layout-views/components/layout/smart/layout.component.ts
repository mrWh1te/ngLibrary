import { Component } from "@angular/core";

@Component({
  selector: 'layout',
  template: '<layout-ui (logoClick)="logoClicked()" (cartClick)="cartClicked()"></layout-ui>'
})
export class LayoutComponent {
  cartClicked() {
    console.log('[LayoutComponent] cart clicked')
  }

  logoClicked() {
    console.log('[LayoutComponent] logo clicked')
  }
}