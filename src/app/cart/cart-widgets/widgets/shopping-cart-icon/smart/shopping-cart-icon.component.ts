import { Component } from "@angular/core"
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors'

@Component({
  selector: 'shopping-cart-icon',
  template: `<shopping-cart-icon-ui 
    [cartItemsCount]="numberOfBooksInCart$ | async"></shopping-cart-icon-ui>`
})
export class ShoppingCartIconComponent {
  numberOfBooksInCart$: Observable<number>

  constructor(private store: Store<any>) {
    this.numberOfBooksInCart$ = this.store.pipe(select(selectCartStatusBooksCount))
  }

  cartClicked() {
    console.log('[LayoutComponent] cart clicked')
  }
}