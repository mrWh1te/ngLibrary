import { Component } from "@angular/core"

import { Store, select } from '@ngrx/store'
import { Observable, combineLatest } from 'rxjs'
import { withLatestFrom, map, filter } from 'rxjs/operators'

import { Book } from 'src/app/book/book-data/models/book.model'
import { selectActiveBookId, selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors';

@Component({
  selector: 'selected-book',
  template: `<selected-book-ui 
    [selectedBook]="selectedBook$ | async"
    (onAddToBasket)="addToBasket()"></selected-book-ui>`
})
export class SelectedBookComponent {
  selectedBook$: Observable<Book>

  constructor(private store: Store<any>) {
    this.selectedBook$ = store.pipe(
      select(selectActiveBookId), // select the ID
      withLatestFrom(store.pipe(select(selectBooksCacheEntities))), // grab the map of books
      map(([activeBookId, books]) => {
        if (books[activeBookId]) {
          return books[activeBookId]
        }
      })
    )
  }

  addToBasket(): void {
    console.log('[SelectedBookComponent] addToBasket() TBI action to be dispatched')
  }
}