import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material'
import { Router } from '@angular/router'

import { Observable } from 'rxjs'
import { withLatestFrom, exhaustMap, map, catchError, tap } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, Store, select } from '@ngrx/store'

import { CheckoutSubmit, CheckoutActionTypes, CheckoutSubmitSuccess, CheckoutSubmitError, CheckoutComplete, CheckoutClearUserInfo } from '../actions/checkout.actions'
import { selectCheckoutRequestUser } from '../selectors/checkout-request.selectors'
import { selectCartStatusBookIds } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { CheckoutService } from '../services/checkout.service'
import { CheckoutSuccessMessageDialogComponent } from '../../checkout-dialogs/checkout-success-message/smart/checkout-success-message-dialog.component'
import { clearCart } from 'src/app/cart/cart-data/actions/cart.actions'
import { clearBookSelected } from 'src/app/book/book-data/actions/book.actions'

@Injectable()
export class CheckoutEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private checkoutService: CheckoutService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  @Effect()
  submitCheckoutRequestToAPI$: Observable<Action> = this.actions$
    .pipe(
      ofType<CheckoutSubmit>(CheckoutActionTypes.CheckoutSubmit),
      withLatestFrom(this.store.pipe(select(selectCheckoutRequestUser))),
      withLatestFrom(this.store.pipe(select(selectCartStatusBookIds))),
      exhaustMap(([[action, checkoutUser], cartBookIds]) => this.checkoutService.submitToAPI(cartBookIds, checkoutUser)),
      map(apiResponse => new CheckoutSubmitSuccess()),
      catchError((error, caught) => {
        this.store.dispatch(new CheckoutSubmitError())

        return caught
      })
    )

  @Effect({
    dispatch: false
  })
  displayCheckoutFollowUpMessageDialog$: Observable<Action> = this.actions$
    .pipe(
      ofType<CheckoutSubmitSuccess>(CheckoutActionTypes.CheckoutSubmitSuccess),
      tap(() => this.dialog.open(CheckoutSuccessMessageDialogComponent, {
        panelClass: 'special-pane-no-padding'
      }))
    )

  @Effect({
    dispatch: false
  })
  clearAllCheckoutData$: Observable<Action> = this.actions$
    .pipe(
      ofType<CheckoutComplete>(CheckoutActionTypes.CheckoutComplete),
      tap(() => {
        this.store.dispatch(new CheckoutClearUserInfo())
        this.store.dispatch(clearCart())
        this.store.dispatch(clearBookSelected())
      })
    )
  @Effect({
    dispatch: false
  })
  redirectToHomePage$: Observable<Action> = this.actions$
    .pipe(
      ofType<CheckoutComplete>(CheckoutActionTypes.CheckoutComplete),
      tap(() => this.router.navigateByUrl('/'))
    )
}
