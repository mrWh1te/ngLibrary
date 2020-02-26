import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core"

import { Book } from 'src/app/book/book-data/models/book.model'

@Component({
  selector: 'shopping-cart-ui',
  templateUrl: './shopping-cart-ui.component.html',
  styleUrls: ['./shopping-cart-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartUiComponent {
  @Input() books: Book[]
  @Input() ui: string
  @Output() onClickRemove: EventEmitter<number> = new EventEmitter<number>()
}