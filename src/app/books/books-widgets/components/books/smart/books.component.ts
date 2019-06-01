import { Component } from "@angular/core"
import { Observable } from 'rxjs'

import { Store, select } from '@ngrx/store'

import { Book } from 'src/app/book/book-data/models/book.model'
import { selectAllCacheBooks } from 'src/app/books/books-data/selectors/books-cache.selectors'
import { RequestBooksHydrate } from 'src/app/books/books-data/actions/books.actions'

@Component({
  selector: 'books',
  template: '<books-ui [books]="books$ | async"></books-ui>'
})
export class BooksComponent {
  books$: Observable<Book[]>

  constructor(private store: Store<any>) {
    store.dispatch(new RequestBooksHydrate())

    this.books$ = store.pipe(
      select(selectAllCacheBooks)
    )
  }
}