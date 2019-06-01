import { Component } from "@angular/core"
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { selectCartIconAnimatingStatus } from 'src/app/cart/cart-data/selectors/cart-icon.selectors'

@Component({
  selector: 'shopping-cart-icon',
  template: `<shopping-cart-icon-ui 
    [cartItemsCount]="numberOfBooksInCart$ | async"
    [animating]="animating$ | async"></shopping-cart-icon-ui>`
})
export class ShoppingCartIconComponent {
  numberOfBooksInCart$: Observable<number>
  animating$: Observable<boolean>

  constructor(private store: Store<any>) {
    this.numberOfBooksInCart$ = this.store.pipe(select(selectCartStatusBooksCount))
    this.animating$ = this.store.pipe(select(selectCartIconAnimatingStatus))
  }

  cartClicked() {
    console.log('[LayoutComponent] cart clicked')
  }
}