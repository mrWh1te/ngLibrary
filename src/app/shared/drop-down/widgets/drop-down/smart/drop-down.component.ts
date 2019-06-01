import { Component, Input, ElementRef } from "@angular/core"

import { DropDownService } from '../../../services/drop-down.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'drop-down',
  template: `<drop-down-ui 
    [overlayConfig]="dropDownService.getOverlayConfig(reference)"
    [open$]="open$">
      <ng-content></ng-content>
    </drop-down-ui>`
})
export class DropDownComponent {
  @Input()
  public reference: ElementRef // the element we are going to position the dropdown relatively too

  @Input()
  public open$: Observable<boolean> // When the Drop-Down should open or close

  constructor(public dropDownService: DropDownService) {}
}