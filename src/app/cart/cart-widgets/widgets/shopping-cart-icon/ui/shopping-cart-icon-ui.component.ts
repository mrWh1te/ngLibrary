import { 
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from "@angular/core"
import { MatIcon } from '@angular/material/icon'

import { Observable } from 'rxjs'

@Component({
  selector: 'shopping-cart-icon-ui',
  templateUrl: './shopping-cart-icon-ui.component.html',
  styleUrls: ['./shopping-cart-icon-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartIconUiComponent {
  @Input() animating: boolean
  @Input() cartItemsCount: number
  @Input() openDropDown$: Observable<boolean>

  @Output() onIconClick: EventEmitter<any> = new EventEmitter<any>()

  // The dropdown requires an ElementRef to attach too
  @ViewChild(MatIcon, { read: ElementRef, static: true }) shoppingCartIcon
}