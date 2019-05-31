import { Component } from "@angular/core"

import { Store, select } from '@ngrx/store'
import { Observable, combineLatest } from 'rxjs'
import { withLatestFrom, map, filter } from 'rxjs/operators'

import { Book } from 'src/app/book/book-data/models/book.model'
import { selectActiveBookId, selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors';
import { SelectedBookAddToCartBtnClick } from 'src/app/book/book-data/actions/book.actions';
// import { AddBookToCartBtnClick } from 'src/app/books/books-data/actions/books.actions';

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
    // I don't want to subscribe to this osbervable, to get the value to pass it in here
    // instead let us dispatch an action "SelectedBookAddToCartBtnClick" that has an effect (in books-data module)
    // which will grab the ID to dispatch a new action, "AttemptToAddBookToCart", has effect (addToCart$ alrweady written) to double-check that we can (it's not a duplicate) and voila
    // this.store.dispatch(new AddBookToCartBtnClick({bookId: }))
    this.store.dispatch(new SelectedBookAddToCartBtnClick())
  }
}