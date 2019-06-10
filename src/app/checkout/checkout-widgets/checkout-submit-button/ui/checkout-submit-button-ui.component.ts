import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from "@angular/core"

@Component({
  selector: 'checkout-submit-button-ui',
  templateUrl: './checkout-submit-button-ui.component.html',
  styleUrls: ['./checkout-submit-button-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutSubmitButtonUiComponent {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>()
  @Input() isDisabled: boolean
}