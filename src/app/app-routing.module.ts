import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

import { LayoutViewComponent } from './layout/layout-views/views/layout/layout-view.component'

export const RootRoutes: Routes = [
  {
    path: '',
    component: LayoutViewComponent,
    children: [      
      {
        path: '',
        loadChildren: () => import('./books/books-views/books-views.module').then(m => m.BooksViewsModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout-views/checkout-views.module').then(m => m.CheckoutViewsModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(RootRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
