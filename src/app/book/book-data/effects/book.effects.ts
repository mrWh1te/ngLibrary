import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'

import { withLatestFrom, map } from 'rxjs/operators'

import { BookActionTypes, SelectedBookAddToCartBtnClick } from '../actions/book.actions'
import { selectActiveBookId } from 'src/app/books/books-data/selectors/books-cache.selectors'
import { AttemptToAddBookToCart } from 'src/app/cart/cart-data/actions/cart.actions'


@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) {}

  @Effect()
  addSelectedBookToCart$: Observable<Action> = this.actions$
    .pipe(
      ofType<SelectedBookAddToCartBtnClick>(BookActionTypes.SelectedBookAddToCartBtnClick),
      withLatestFrom(this.store.pipe(select(selectActiveBookId))),
      map(([action, selectedBookId]) => new AttemptToAddBookToCart({bookId: selectedBookId}))
    )
}
