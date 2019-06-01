import { Component, Input } from "@angular/core"
import { Book } from 'src/app/book/book-data/models/book.model';

@Component({
  selector: 'shopping-cart-ui',
  templateUrl: './shopping-cart-ui.component.html',
  styleUrls: ['./shopping-cart-ui.component.scss']
})
export class ShoppingCartUiComponent {
  @Input() books: Book[]
}