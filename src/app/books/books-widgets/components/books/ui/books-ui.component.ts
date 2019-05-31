import { Component, Input } from "@angular/core"

import { Book } from 'src/app/book/book-data/models/book.model'

@Component({
  selector: 'books-ui',
  templateUrl: './books-ui.component.html',
  styleUrls: ['./books-ui.component.scss']
})
export class BooksUiComponent {
  @Input() books: Book[]
}