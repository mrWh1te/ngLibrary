import { Component, ChangeDetectionStrategy } from "@angular/core"

import { Store, select } from '@ngrx/store'
import { Observable, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { selectCheckoutRequestUser } from 'src/app/checkout/checkout-data/selectors/checkout-request.selectors'
import { CheckoutSubmit } from 'src/app/checkout/checkout-data/actions/checkout.actions'

/**
 * @description   A lot of work went into de-coupling this main form Submit button
 *                It was done to get flexibility in where we lay the button in the DOM
 *                Ideally, we would have instead used a design that coupled the submit button with the form, to decrease overall code size, but sometimes UI design dictates code
 */
@Component({
  selector: 'checkout-submit-button',
  template: `
    <checkout-submit-button-ui
      [isDisabled]="isDisabled$ | async"
      (onSubmit)="submit()"></checkout-submit-button-ui>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
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
        // books min count check
        if (cartBooksCount === 0) {
          return true
        }

        // null check
        if (checkoutUser === null) {
          return true
        }
        if (checkoutUser.first_name === null ||
            checkoutUser.last_name === null ||
            checkoutUser.library_card_id === null) {
          return true
        }

        // min lengths check
        if (checkoutUser.first_name === '' ||
            checkoutUser.last_name === '') {
          return true
        }

        // Max length checks
        if (checkoutUser.first_name.length > 255 ||
            checkoutUser.last_name.length > 255) {
          return true
        }

        // library card ID length check
        if (checkoutUser.library_card_id.length !== 8) {
          return true
        }

        return false
      })
    )
  }

  submit(): void {
    this.store.dispatch(new CheckoutSubmit())
  }
}