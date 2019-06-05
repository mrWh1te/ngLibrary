import { Component } from "@angular/core"

import { Observable, BehaviorSubject } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { selectCartIconAnimatingStatus, selectCartIconDropDownIsVisible } from 'src/app/cart/cart-data/selectors/cart-icon.selectors'
import { ToggleCartIconDropDown } from 'src/app/cart/cart-data/actions/cart-icon.actions';

@Component({
  selector: 'shopping-cart-icon',
  template: `<shopping-cart-icon-ui 
    [cartItemsCount]="numberOfBooksInCart$ | async"
    [animating]="animating$ | async"
    [openDropDown$]="isDropDownVisible$"
    (onIconClick)="iconClicked()"></shopping-cart-icon-ui>`
})
export class ShoppingCartIconComponent {
  numberOfBooksInCart$: Observable<number>
  isDropDownVisible$: Observable<boolean>
  animating$: Observable<boolean>

  constructor(
    private store: Store<any>
  ) {
    this.numberOfBooksInCart$ = store.pipe(select(selectCartStatusBooksCount))
    this.animating$ = store.pipe(select(selectCartIconAnimatingStatus))
    this.isDropDownVisible$ = store.pipe(select(selectCartIconDropDownIsVisible))
  }

  iconClicked() {
    this.store.dispatch(new ToggleCartIconDropDown())
  }
}