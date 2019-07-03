import { Injectable } from '@angular/core'

import { Actions, ofType, createEffect } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'

import { withLatestFrom, map } from 'rxjs/operators'

// import { BookActionTypes, SelectedBookAddToCartBtnClick } from '../actions/book.actions'
import * as bookActions from '../actions/book.actions'
import { selectActiveBookId } from 'src/app/books/books-data/selectors/books-cache.selectors'
import { AttemptToAddBookToCart } from 'src/app/cart/cart-data/actions/cart.actions'


@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) {}

  addSelectedBookToCart$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.selectedBookAddToCartBtnClick),
    withLatestFrom(this.store.pipe(select(selectActiveBookId))),
    map(([action, selectedBookId]) => new AttemptToAddBookToCart({bookId: selectedBookId}))
  ))

  // @Effect()
  // addSelectedBookToCart$: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType<SelectedBookAddToCartBtnClick>(BookActionTypes.SelectedBookAddToCartBtnClick),
  //     withLatestFrom(this.store.pipe(select(selectActiveBookId))),
  //     map(([action, selectedBookId]) => new AttemptToAddBookToCart({bookId: selectedBookId}))
  //   )
}
