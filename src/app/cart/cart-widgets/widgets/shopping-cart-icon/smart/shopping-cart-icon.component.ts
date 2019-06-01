import { Component } from "@angular/core"

import { Observable, BehaviorSubject } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors'
import { selectCartIconAnimatingStatus } from 'src/app/cart/cart-data/selectors/cart-icon.selectors'

@Component({
  selector: 'shopping-cart-icon',
  template: `<shopping-cart-icon-ui 
    [cartItemsCount]="numberOfBooksInCart$ | async"
    [animating]="animating$ | async"
    [openDropDown$]="isDropDownOpenSubject.asObservable()"
    (onIconClick)="iconClicked()"></shopping-cart-icon-ui>`
})
export class ShoppingCartIconComponent {
  numberOfBooksInCart$: Observable<number>
  animating$: Observable<boolean>

  // @future if we choose open the Shopping Cart dropdown after an error of trying to add too many books to the cart (to help the user remove some), then we need to NgRX this. Otherwise, it's extra work (actions, reducers, etc) to accomplish the end result
  isDropDownOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject(false) // exception for not putting a piece of state in store. If we want to be able to open the shopping cart dropdown from anywhere in the app, then we should put this in the ngrx store.....

  constructor(private store: Store<any>) {
    this.numberOfBooksInCart$ = this.store.pipe(select(selectCartStatusBooksCount))
    this.animating$ = this.store.pipe(select(selectCartIconAnimatingStatus))
  }

  iconClicked() {
    this.isDropDownOpenSubject.next(! this.isDropDownOpenSubject.value)
  }
}