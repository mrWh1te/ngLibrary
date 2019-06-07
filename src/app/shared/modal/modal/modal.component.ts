import { Component, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core"

/**
 * @description   a re-usable modal template that leverages ng-content for content transclusion
 *                In order for it to properly work, we need to override some default container values by adding a custom panel class from this component
 * @example
 *  dialog.open(CheckoutSuccessMessageDialogComponent, {
 *    panelClass: 'special-pane-no-padding'
 *  })
 * 
 * Then inside the CheckoutSuccessMessageDialogComponents UI layer, we wrap the UI inside <modal></modal>
 */
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>()
}