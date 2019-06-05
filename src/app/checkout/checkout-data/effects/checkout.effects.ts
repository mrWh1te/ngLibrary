import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { withLatestFrom, exhaustMap, map, catchError } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, Store, select } from '@ngrx/store'

import { CheckoutSubmit, CheckoutActionTypes, CheckoutSubmitSuccess, CheckoutSubmitError } from '../actions/checkout.actions'
import { selectCheckoutRequestUser } from '../selectors/checkout-request.selectors'
import { selectCartStatusBookIds } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { CheckoutService } from '../services/checkout.service'

@Injectable()
export class CheckoutEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private checkoutService: CheckoutService
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
}
