import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LayoutViewComponent } from './layout/layout-views/views/layout/layout-view.component'

export const RootRoutes: Routes = [
  {
    path: '',
    component: LayoutViewComponent,
    children: [      
      {
        path: '',
        loadChildren: () => import('./books/books-views/books-views.module').then(m => m.BooksViewsModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(RootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
