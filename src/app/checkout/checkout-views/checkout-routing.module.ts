import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import { CheckoutViewComponent } from './views/checkout/checkout-view.component'

const routes: Routes = [
  {
    path: '',
    component: CheckoutViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
