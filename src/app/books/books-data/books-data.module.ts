import { NgModule } from "@angular/core"
import { StoreModule } from '@ngrx/store'

import { reducers } from './reducers/books.reducers'
import { BooksService } from './services/books.service'

@NgModule({
  imports: [
    StoreModule.forFeature('books', reducers)
  ],
  providers: [
    BooksService // @todo update it with API call
  ]
})
export class BooksDataModule {}