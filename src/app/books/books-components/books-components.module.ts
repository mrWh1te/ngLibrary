import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'

import { BooksDataModule } from '../books-data/books-data.module'

import { BooksComponent } from './components/books/smart/books.component'
import { BooksUiComponent } from './components/books/ui/books-ui.component'
import { BookComponentsModule } from '../../book/book-components/book-components.module'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BooksDataModule,
    BookComponentsModule
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
export class BooksComponentsModule {
  constructor() {
    console.log('[BooksComponentsModule] constructor()')
  }
}