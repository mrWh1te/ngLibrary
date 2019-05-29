import { NgModule } from "@angular/core";

import { BooksRoutingModule } from './books-routing.module';
import { BooksWidgetsModule } from '../books-widgets/books-widgets.module';
import { BooksViewComponent } from './views/books/books-view.component';

@NgModule({
  imports: [
    BooksRoutingModule,
    BooksWidgetsModule
  ],
  declarations: [
    // Views
    BooksViewComponent
  ],
  exports: []
})
export class BooksViewsModule {}