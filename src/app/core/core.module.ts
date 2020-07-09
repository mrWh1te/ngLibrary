import { environment } from '../../environments/environment'
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core"
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { StoreModule, USER_PROVIDED_META_REDUCERS } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { reducers } from './reducers/root.reducers'
import { metaReducersFactory } from './reducers/meta.reducers'
import { RouterSimpleStateSerializer } from './serializers/router-state.serializer'
import { LocalStorageService } from './services/local-storage.service'

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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    { 
      provide: RouterStateSerializer,
      useClass: RouterSimpleStateSerializer
    },
    {
      provide: USER_PROVIDED_META_REDUCERS,
      deps: [LocalStorageService],
      useFactory: metaReducersFactory
    }
  ],
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
