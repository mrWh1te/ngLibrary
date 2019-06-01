import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutViewsModule } from './layout/layout-views/layout-views.module'
import { CoreModule } from './core/core.module'
import { CartDataModule } from './cart/cart-data/cart-data.module'

@NgModule({
  imports: [
    CoreModule.forRoot(),
    AppRoutingModule,
    LayoutViewsModule,
    CartDataModule // Good chance we'll want this for initial load, in consideration of storing cart items locally in storage to display number in the Layout
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
