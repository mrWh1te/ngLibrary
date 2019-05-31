import { NgModule } from "@angular/core"
import { FlexLayoutModule } from '@angular/flex-layout'

import { BooksRoutingModule } from './books-routing.module'
import { BooksWidgetsModule } from '../books-widgets/books-widgets.module'
import { BooksViewComponent } from './views/books/books-view.component'
import { BookWidgetsModule } from 'src/app/book/book-widgets/book-widgets.module'

@NgModule({
  imports: [
    BooksRoutingModule,
    BooksWidgetsModule,
    BookWidgetsModule,
    FlexLayoutModule
  ],
  declarations: [
    // Views
    BooksViewComponent
  ],
  exports: []
})
export class BooksViewsModule {}