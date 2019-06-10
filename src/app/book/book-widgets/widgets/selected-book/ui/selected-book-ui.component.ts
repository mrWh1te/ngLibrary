import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core"

import { Book } from 'src/app/book/book-data/models/book.model'

@Component({
  selector: 'selected-book-ui',
  templateUrl: './selected-book-ui.component.html',
  styleUrls: ['./selected-book-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedBookUiComponent {
  @Input() selectedBook: Book
  @Output() onAddToBasket: EventEmitter<any> = new EventEmitter<any>()
}