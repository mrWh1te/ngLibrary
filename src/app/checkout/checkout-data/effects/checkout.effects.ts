import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'

import { of } from 'rxjs'
import { withLatestFrom, exhaustMap, map, catchError, tap } from 'rxjs/operators'
import { Actions, ofType, createEffect } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'

import * as checkoutActions from '../actions/checkout.actions'
import { selectCheckoutRequestUser } from '../selectors/checkout-request.selectors'
import { selectCartStatusBookIds } from '../../../cart/cart-data/selectors/cart-status.selectors'
import { CheckoutService } from '../services/checkout.service'
import { CheckoutSuccessMessageDialogComponent } from '../../checkout-dialogs/checkout-success-message/smart/checkout-success-message-dialog.component'
import { clearCart } from '../../../cart/cart-data/actions/cart.actions'
import { clearBookSelected } from '../../../book/book-data/actions/book.actions'

@Injectable()
export class CheckoutEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private checkoutService: CheckoutService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  submitCheckoutRequestToAPI$ = createEffect(() => this.actions$.pipe(
    ofType(checkoutActions.checkoutSubmit),
    withLatestFrom(this.store.pipe(select(selectCheckoutRequestUser))),
    withLatestFrom(this.store.pipe(select(selectCartStatusBookIds))),
    exhaustMap(
      ([[action, checkoutUser], cartBookIds]) => this.checkoutService.submitToAPI(cartBookIds, checkoutUser).pipe(
        map(apiResponse => checkoutActions.checkoutSubmitSuccess()),
        catchError(() => of(checkoutActions.checkoutSubmitError()))
      )
    )
  ))

  displayCheckoutFollowUpMessageDialog$ = createEffect(() => this.actions$.pipe(
    ofType(checkoutActions.checkoutSubmitSuccess),
    tap(() => this.dialog.open(CheckoutSuccessMessageDialogComponent, {
      panelClass: 'special-pane-no-padding'
    }))
  ), {dispatch: false})

  clearAllCheckoutData$ = createEffect(() => this.actions$.pipe(
    ofType(checkoutActions.checkoutComplete),
    tap(() => {
      this.store.dispatch(checkoutActions.checkoutClearUserInfo())
      this.store.dispatch(clearCart())
      this.store.dispatch(clearBookSelected())
    })
  ), {dispatch: false})

  redirectToHomePage$ = createEffect(() => this.actions$.pipe(
    ofType(checkoutActions.checkoutComplete),
    tap(() => this.router.navigateByUrl('/'))
  ), {dispatch: false})

}
