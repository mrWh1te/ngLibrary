import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutViewsModule } from './layout/layout-views/layout-views.module'
import { CoreModule } from './core/core.module'

@NgModule({
  imports: [
    CoreModule.forRoot(),
    AppRoutingModule,
    LayoutViewsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
