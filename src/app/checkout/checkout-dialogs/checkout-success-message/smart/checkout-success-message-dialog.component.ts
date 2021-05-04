import { Component, ChangeDetectionStrategy } from "@angular/core"
import { MatDialogRef } from '@angular/material/dialog'

import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators'

import { User } from '../../../checkout-data/models/user.model'
import { selectCheckoutRequestUser } from '../../../checkout-data/selectors/checkout-request.selectors'
import { checkoutComplete } from '../../../checkout-data/actions/checkout.actions'
import { selectCartStatusBooksCount } from '../../../../cart/cart-data/selectors/cart-status.selectors'

@Component({
  selector: 'checkout-success-message',
  template: `
    <checkout-success-message-dialog-ui
      [user]="user$ | async"
      [numberOfBooks]="numberOfBooks$ | async"
      [pickUpTime]="pickUpTime"
      (onClose)="close()"></checkout-success-message-dialog-ui>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
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
      take(1), // data won't change until we clear, and we won't care about that so
      map(user => User.fromJson(user))
    )
    this.numberOfBooks$ = store.pipe(
      select(selectCartStatusBooksCount),
      take(1)
    )

    const now = new Date()
    this.pickUpTime = new Date()
    this.pickUpTime.setHours(now.getHours() + 1)

    this.dialogRef.afterClosed().toPromise().then(() => {
      this.store.dispatch(checkoutComplete())
    })
  }

  close(): void {
    this.dialogRef.close()
  }
}
