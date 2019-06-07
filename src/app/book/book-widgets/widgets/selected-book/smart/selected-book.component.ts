import { Component, ChangeDetectionStrategy } from "@angular/core"

import { Store, select } from '@ngrx/store'
import { Observable, combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

import { Book } from 'src/app/book/book-data/models/book.model'
import { selectActiveBookId, selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors'
import { SelectedBookAddToCartBtnClick } from 'src/app/book/book-data/actions/book.actions'

@Component({
  selector: 'selected-book',
  template: `<selected-book-ui 
    [selectedBook]="selectedBook$ | async"
    (onAddToBasket)="addToBasket()"></selected-book-ui>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedBookComponent {
  selectedBook$: Observable<Book>

  constructor(private store: Store<any>) {
    this.selectedBook$ = combineLatest(
      store.pipe(select(selectActiveBookId)),
      store.pipe(select(selectBooksCacheEntities))
    ).pipe(
      map(([activeBookId, books]) => books[activeBookId])
    )
  }

  addToBasket(): void {    
    this.store.dispatch(new SelectedBookAddToCartBtnClick())
  }
}