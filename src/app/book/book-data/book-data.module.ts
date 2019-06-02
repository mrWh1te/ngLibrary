import { NgModule } from "@angular/core"

import { EffectsModule } from '@ngrx/effects'

import { BookEffects } from './effects/book.effects'

@NgModule({
  imports: [
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BookDataModule {
  constructor() {
    console.log('[BookDataModule] constructor()')
  }
}