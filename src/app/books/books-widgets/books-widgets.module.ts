import { NgModule } from "@angular/core";

import { BooksComponent } from './components/books/smart/books.component';
import { BooksUiComponent } from './components/books/ui/books-ui.component';

@NgModule({
  imports: [],
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