import { Component } from "@angular/core"

import { Store, select } from '@ngrx/store'
import { Observable, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { selectCheckoutRequestUser } from 'src/app/checkout/checkout-data/selectors/checkout-request.selectors'
import { CheckoutSubmit } from 'src/app/checkout/checkout-data/actions/checkout.actions';

@Component({
  selector: 'checkout-submit-button',
  template: `
    <checkout-submit-button-ui
      [isDisabled]="isDisabled$ | async"
      (onSubmit)="submit()"></checkout-submit-button-ui>
  `
})
export class CheckoutSubmitButtonComponent {
  isDisabled$: Observable<boolean>

  constructor(
    private store: Store<any>
  ) {
    this.isDisabled$ = combineLatest(
      store.pipe(select(selectCartStatusBooksCount)),
      store.pipe(select(selectCheckoutRequestUser))
    ).pipe(
      map(([cartBooksCount, checkoutUser]) => {
        if (cartBooksCount === 0) {
          return true
        }

        if (checkoutUser === null) {
          return true
        }

        if (checkoutUser.first_name === null ||
            checkoutUser.last_name === null ||
            checkoutUser.library_card_id === null) {
          return true
        }

        if (checkoutUser.first_name === '' ||
            checkoutUser.last_name === '') {
          return true
        }

        // @todo some basic kind of data validation on the library card ID
        // if (checkoutUser.library_card_id.length !== 8) {
        //   return false
        // }

        return false
      })
    )
  }

  submit(): void {
    console.log('[CheckoutSubmitButtonComponent] submit()')
    this.store.dispatch(new CheckoutSubmit())
  }
}