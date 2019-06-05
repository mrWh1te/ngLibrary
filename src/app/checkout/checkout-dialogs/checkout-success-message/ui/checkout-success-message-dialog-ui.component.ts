import { Component, Output, EventEmitter, Input } from "@angular/core"

import { User } from 'src/app/checkout/checkout-data/models/user.model'

@Component({
  selector: 'checkout-success-message-dialog-ui',
  templateUrl: './checkout-success-message-dialog-ui.component.html',
  styleUrls: ['./checkout-success-message-dialog-ui.component.scss']
})
export class CheckoutSuccessMessageDialogUiComponent {
  @Input() user: User
  @Input() numberOfBooks: number
  @Input() pickUpTime: Date
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>()
}