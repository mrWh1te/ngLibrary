import { Injectable } from '@angular/core'

import { Actions, ofType, createEffect } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'

import { withLatestFrom, map } from 'rxjs/operators'

import * as bookActions from '../actions/book.actions'
import { selectActiveBookId } from '../../../books/books-data/selectors/books-cache.selectors'
import { attemptToAddBookToCart } from '../../../cart/cart-data/actions/cart.actions'


@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) {}

  addSelectedBookToCart$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.selectedBookAddToCartBtnClick),
    withLatestFrom(this.store.pipe(select(selectActiveBookId))),
    map(([action, selectedBookId]) => attemptToAddBookToCart({bookId: selectedBookId}))
  ))
}
