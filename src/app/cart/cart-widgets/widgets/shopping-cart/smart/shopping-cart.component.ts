import { Component, Input } from "@angular/core"

import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { withLatestFrom, map } from 'rxjs/operators'

import { Book } from 'src/app/book/book-data/models/book.model'
import { selectCartStatusBookIds } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors'
import { RemoveBookFromCart } from 'src/app/cart/cart-data/actions/cart.actions'

@Component({
  selector: 'shopping-cart',
  template: `<shopping-cart-ui 
    [ui]="ui"
    [books]="cartBooks$ | async"
    (onClickRemove)="removeFromCart($event)"></shopping-cart-ui>`
})
export class ShoppingCartComponent {
  @Input() ui: string

  cartBooks$: Observable<Book[]>

  constructor(private store: Store<any>) {
    this.cartBooks$ = store.pipe(
      select(selectCartStatusBookIds),
      withLatestFrom(store.pipe(select(selectBooksCacheEntities))),
      map(([cartBookIds, books]) => cartBookIds.map(bookId => books[bookId]))
    )
  }

  removeFromCart(bookId: number) {
    this.store.dispatch(new RemoveBookFromCart({bookId}))
  }
}