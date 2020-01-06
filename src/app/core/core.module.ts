import { environment } from '../../environments/environment'
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core"
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { reducers } from './reducers/root.reducers'
import { metaReducers } from './reducers/meta.reducers'
import { RouterSimpleStateSerializer } from './serializers/router-state.serializer'

/**
 * @name  CoreModule
 * @description  A wrapper module for global services, basic Angular stuff, and NgRX setup
 *    Only to be imported at the root module level (only import this once)
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    }),
//     !environment.production ? StoreDevtoolsModule.instrument({
//       maxAge: 20,
//       logOnly: environment.production
//     }) : [],
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [{ provide: RouterStateSerializer, useClass: RouterSimpleStateSerializer }],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Import CoreModule only once in the Root Module, probably AppModule');
    } else {
      console.log('[CoreModule] constructor()')
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule
    }
  }
}
