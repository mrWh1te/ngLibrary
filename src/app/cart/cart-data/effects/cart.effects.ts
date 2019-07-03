import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

import { withLatestFrom, map, tap } from 'rxjs/operators'
import { Actions, ofType, createEffect } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'

// import { AddBookToCart, AttemptToAddBookToCart, CartActionTypes, AlreadyHaveBookInCartError, CantAddAnyMoreBooksInCartError } from '../actions/cart.actions'
import * as cartActions from '../actions/cart.actions'
import { selectCartStatusBookIds } from '../selectors/cart-status.selectors'

// @todo where should this be? Move into a folder for constants? models? in the store?
export const maximumNumberOfBooksAUserCanCheckOut = 4

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private snackbar: MatSnackBar
  ) {}

  addBookToCart$ = createEffect(() => this.actions$.pipe(
    ofType(cartActions.attemptToAddBookToCart),
      // tap(() => console.log('[CartEffects] addBookToCart$')),
      withLatestFrom(this.store.pipe(select(selectCartStatusBookIds))),
      map(([action, bookIds]) => {
        // Users can only check out a maximum of 4 books at a time (this could get fun with users in the future... already 2 books checked out, then can check out 2 more...)
        if (bookIds.length === maximumNumberOfBooksAUserCanCheckOut) {
          // already have maximum number of books in basket
          return cartActions.cantAddAnyMoreBooksInCartError()
        } 
        
        // Users can only add 1 copy of each Book to their Cart
        if (bookIds.find(id => id === action.bookId)) {
          return cartActions.alreadyHaveBookInCartError()
        }

        return cartActions.addBookToCart({bookId: action.bookId})
      })
  ))
  // @Effect()
  // addBookToCart$: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType<AttemptToAddBookToCart>(CartActionTypes.AttemptToAddBookToCart),
  //     // tap(() => console.log('[CartEffects] addBookToCart$')),
  //     withLatestFrom(this.store.pipe(select(selectCartStatusBookIds))),
  //     map(([action, bookIds]) => {
  //       let bookId = bookIds.find(bookId => bookId === action.payload.bookId)

  //       // Our business logic: Users can only add 1 copy of each Book to their Cart
  //       // Also, they can only check out a maximum of 4 books at a time (this could get fun with users in the future... already 2 books checked out, then can check out 2 more...)
  //       // It's a library, not a Store ;)
  //       if (bookIds.length === maximumNumberOfBooksAUserCanCheckOut) {
  //         // already have maximum number of books in basket
  //         return new CantAddAnyMoreBooksInCartError()
  //       } else if (!bookId) {
  //         return new AddBookToCart({bookId: action.payload.bookId})
  //       } else {
  //         return new AlreadyHaveBookInCartError()
  //       }
  //     })
  //   )

  showErrorNotificationBookAlreadyInCart$ = createEffect(() => this.actions$.pipe(
    ofType(cartActions.alreadyHaveBookInCartError),
    tap(() => this.snackbar.open(`That book is already in your basket`, 'Close', {
      duration: 3000
    }))
  ), {dispatch: false})
  // @Effect({
  //   dispatch: false
  // })
  // showErrorNotificationBookAlreadyInCart$: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType<AlreadyHaveBookInCartError>(CartActionTypes.AlreadyHaveBookInCartError),
  //     tap(() => this.snackbar.open(`That book is already in your basket`, 'Close', {
  //       duration: 3000
  //     }))
  //   )

  showErrorNotificationAtMaximumCheckedOutBooks$ = createEffect(() => this.actions$.pipe(
    ofType(cartActions.cantAddAnyMoreBooksInCartError),
      tap(() => this.snackbar.open(`You can only check out ${maximumNumberOfBooksAUserCanCheckOut} books at a time`, 'Close', {
        duration: 6000
      }))
  ), {dispatch: false})
  // @Effect({
  //   dispatch: false
  // })
  // showErrorNotificationAtMaximumCheckedOutBooks$: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType<CantAddAnyMoreBooksInCartError>(CartActionTypes.CantAddAnyMoreBooksInCartError),
  //     tap(() => this.snackbar.open(`You can only check out ${maximumNumberOfBooksAUserCanCheckOut} books at a time`, 'Close', {
  //       duration: 6000
  //     }))
  //   )
}
