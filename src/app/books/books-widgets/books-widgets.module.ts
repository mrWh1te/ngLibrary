import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'

import { BooksDataModule } from '../books-data/books-data.module'

import { BooksComponent } from './components/books/smart/books.component'
import { BooksUiComponent } from './components/books/ui/books-ui.component'
import { BookWidgetsModule } from 'src/app/book/book-widgets/book-widgets.module'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BooksDataModule,
    BookWidgetsModule
  ],
  declarations: [
    // Smart
    BooksComponent,
    // UI
    BooksUiComponent
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksWidgetsModule {}