import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout-views/components/layout/smart/layout.component';

export const RootRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [      
      {
        path: '',
        loadChildren: './books/books-views/books-views.module#BooksViewsModule'
      },
      // {
      //   path: 'book',
      //   loadChildren: './book/book-views/book-views.module#BookViewsModule'
      // }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(RootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
