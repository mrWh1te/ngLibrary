import { Component } from "@angular/core"

import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { withLatestFrom, map } from 'rxjs/operators'

import { Book } from 'src/app/book/book-data/models/book.model'
import { selectCartStatusBookIds } from 'src/app/cart/cart-data/selectors/cart-status.selectors';
import { selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors';

@Component({
  selector: 'shopping-cart',
  template: '<shopping-cart-ui [books]="cartBooks$ | async"></shopping-cart-ui>'
})
export class ShoppingCartComponent {
  cartBooks$: Observable<Book[]>

  constructor(private store: Store<any>) {
    this.cartBooks$ = store.pipe(
      select(selectCartStatusBookIds),
      withLatestFrom(store.pipe(select(selectBooksCacheEntities))),
      map(([cartBookIds, books]) => cartBookIds.map(bookId => books[bookId]))
    )
  }
}