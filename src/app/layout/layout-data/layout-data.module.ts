import { NgModule } from "@angular/core"

import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { reducers } from './reducers/layout.reducers'
import { LayoutEffects } from './effects/layout.effects'

@NgModule({
  imports: [
    StoreModule.forFeature('layout', reducers),
    EffectsModule.forFeature([LayoutEffects])
  ]
})
export class LayoutDataModule {
  constructor() {
    console.log('[LayoutDataModule] constructor()')
  }
}