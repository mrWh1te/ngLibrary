import { Component } from "@angular/core"
import { MatDialogRef } from '@angular/material'

import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { User } from 'src/app/checkout/checkout-data/models/user.model'
import { selectCheckoutRequestUser } from 'src/app/checkout/checkout-data/selectors/checkout-request.selectors'
import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { CheckoutClearAll } from 'src/app/checkout/checkout-data/actions/checkout.actions';

@Component({
  selector: 'checkout-success-message',
  template: `
    <checkout-success-message-dialog-ui
      [user]="user$ | async"
      [numberOfBooks]="numberOfBooks$ | async"
      [pickUpTime]="pickUpTime"
      (onClose)="close()"></checkout-success-message-dialog-ui>
  `
})
export class CheckoutSuccessMessageDialogComponent {
  public user$: Observable<User>
  public numberOfBooks$: Observable<number>
  public pickUpTime: Date

  constructor(
    private dialogRef: MatDialogRef<CheckoutSuccessMessageDialogComponent>,
    private store: Store<any>
  ) {
    this.user$ = store.pipe(
      select(selectCheckoutRequestUser),
      map(user => User.fromJson(user))
    )    
    this.numberOfBooks$ = store.pipe(
      select(selectCartStatusBooksCount)
    )

    const now = new Date()
    this.pickUpTime = new Date()
    this.pickUpTime.setHours(now.getHours() + 1)
  }

  close(): void {
    this.dialogRef.close()

    this.store.dispatch(new CheckoutClearAll()) // clear cart, clear checkout request user, clear book selected
  }
}