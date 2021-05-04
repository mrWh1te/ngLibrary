import { Component, Input, ChangeDetectionStrategy } from "@angular/core"

import { Book } from '../../../../../book/book-data/models/book.model'

@Component({
  selector: 'books-ui',
  templateUrl: './books-ui.component.html',
  styleUrls: ['./books-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksUiComponent {
  @Input() books: Book[]
}
