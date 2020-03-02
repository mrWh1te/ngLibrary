import { Component, Input, ChangeDetectionStrategy } from "@angular/core"
import { Store } from '@ngrx/store'

import { Book } from 'src/app/book/book-data/models/book.model'
import { bookSelected } from 'src/app/book/book-data/actions/book.actions'

@Component({
  selector: 'book',
  template: '<book-ui [book]="book" (onSelect)="selected()"></book-ui>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
  @Input() book: Book

  constructor(private store: Store<any>) {}
  
  selected(): void {
    this.store.dispatch(bookSelected({bookId: this.book.id}))
  }
}