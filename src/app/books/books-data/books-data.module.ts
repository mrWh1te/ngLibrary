import { NgModule } from "@angular/core"
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers } from './reducers/books.reducers'
import { BooksService } from './services/books.service'

import { BooksEffects } from './effects/books.effects'

@NgModule({
  imports: [
    StoreModule.forFeature('books', reducers),
    EffectsModule.forFeature([BooksEffects])
  ],
  providers: [
    BooksService
  ]
})
export class BooksDataModule {
  constructor() {
    console.log('[BooksDataModule] constructor()')
  }
}