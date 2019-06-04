import { Component, Output, EventEmitter, Input } from "@angular/core"

@Component({
  selector: 'checkout-submit-button-ui',
  templateUrl: './checkout-submit-button-ui.component.html',
  styleUrls: ['./checkout-submit-button-ui.component.scss']
})
export class CheckoutSubmitButtonUiComponent {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>()
  @Input() isDisabled: boolean
}