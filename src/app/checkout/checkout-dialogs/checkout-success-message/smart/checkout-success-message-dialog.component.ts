import { Component } from "@angular/core"
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'checkout-success-message',
  template: `
    <checkout-success-message-dialog-ui
      (onClose)="close()"></checkout-success-message-dialog-ui>
  `
})
export class CheckoutSuccessMessageDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CheckoutSuccessMessageDialogComponent>,
  ) {}

  close(): void {
    this.dialogRef.close()
  }
}