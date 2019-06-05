import { Component, Output, EventEmitter } from "@angular/core"

@Component({
  selector: 'checkout-success-message-dialog-ui',
  templateUrl: './checkout-success-message-dialog-ui.component.html',
  styleUrls: ['./checkout-success-message-dialog-ui.component.scss']
})
export class CheckoutSuccessMessageDialogUiComponent {
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>()
}