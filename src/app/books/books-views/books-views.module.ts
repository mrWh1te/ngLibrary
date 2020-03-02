import { NgModule } from "@angular/core"
import { FlexLayoutModule } from '@angular/flex-layout'

import { BooksRoutingModule } from './books-routing.module'
import { BooksComponentsModule } from '../books-components/books-components.module'
import { BooksViewComponent } from './views/books/books-view.component'
import { BookComponentsModule } from '../../book/book-components/book-components.module'

@NgModule({
  imports: [
    BooksRoutingModule,
    BooksComponentsModule,
    BookComponentsModule,
    FlexLayoutModule
  ],
  declarations: [
    // Views
    BooksViewComponent
  ],
  exports: []
})
export class BooksViewsModule {
  constructor() {
    console.log('[BooksViewsModule] constructor()')
  }
}