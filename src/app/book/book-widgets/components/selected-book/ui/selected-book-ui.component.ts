import { Component, Input } from "@angular/core"

import { Book } from 'src/app/book/book-data/models/book.model'

@Component({
  selector: 'selected-book-ui',
  templateUrl: './selected-book-ui.component.html',
  styleUrls: ['./selected-book-ui.component.scss']
})
export class SelectedBookUiComponent {
  @Input() selectedBook: Book
}