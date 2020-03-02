import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core"

import { Book } from 'src/app/book/book-data/models/book.model'

@Component({
  selector: 'book-ui',
  templateUrl: './book-ui.component.html',
  styleUrls: ['./book-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookUiComponent {
  @Input() book: Book
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>()
}