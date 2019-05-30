import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LayoutComponent } from './layout/layout-views/components/layout/smart/layout.component'

export const RootRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [      
      {
        path: '',
        loadChildren: './books/books-views/books-views.module#BooksViewsModule'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(RootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
