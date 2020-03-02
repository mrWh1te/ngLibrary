import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutsModule } from './layouts/layouts.module'
import { CoreModule } from './core/core.module'

@NgModule({
  imports: [
    CoreModule.forRoot(),
    AppRoutingModule,
    LayoutsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
    console.log('[AppModule] constructor()')
  }
}
