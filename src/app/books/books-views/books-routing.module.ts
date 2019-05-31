import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { BooksViewComponent } from './views/books/books-view.component';

const routes: Routes = [
  {
    path: '',
    component: BooksViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
