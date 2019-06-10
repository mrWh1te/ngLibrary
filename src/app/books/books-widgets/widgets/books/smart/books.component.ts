import { Component, ChangeDetectionStrategy } from "@angular/core"
import { Observable } from 'rxjs'

import { Store, select } from '@ngrx/store'

import { Book } from './../../../../../book/book-data/models/book.model'
import { selectAllCacheBooks } from './../../../../books-data/selectors/books-cache.selectors'
import { RequestBooksHydrate } from './../../../../books-data/actions/books.actions'

@Component({
  selector: 'books',
  template: '<books-ui [books]="books$ | async"></books-ui>',
  changeDetection: ChangeDetectionStrategy.OnPush
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