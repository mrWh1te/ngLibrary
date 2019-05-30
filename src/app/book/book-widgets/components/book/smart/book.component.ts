import { Component, Input } from "@angular/core"
import { Store } from '@ngrx/store'

import { Book } from 'src/app/book/book-data/models/book.model'
import { BookSelected } from 'src/app/books/books-data/actions/books.actions'

@Component({
  selector: 'book',
  template: '<book-ui [book]="book" (onSelect)="selected()"></book-ui>'
})
export class BookComponent {
  @Input() book: Book

  constructor(private store: Store<any>) {}
  
  selected(): void {
    this.store.dispatch(new BookSelected({bookId: this.book.id}))
  }
}