import { NgModule } from "@angular/core"

import { BooksDataModule } from '../books-data/books-data.module'

import { BooksComponent } from './components/books/smart/books.component'
import { BooksUiComponent } from './components/books/ui/books-ui.component'

@NgModule({
  imports: [
    BooksDataModule
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