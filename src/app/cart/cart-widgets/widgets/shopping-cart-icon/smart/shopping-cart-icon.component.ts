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
    (onIconClick)="iconClicked()"
    (onBackDropClick)="backDropClicked()"></shopping-cart-icon-ui>`
})
export class ShoppingCartIconComponent {
  numberOfBooksInCart$: Observable<number>
  animating$: Observable<boolean>

  // @future if we want to be able to open the shopping cart from anywhere in the app, we'll need to NgRX this state here:
  isDropDownOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(private store: Store<any>) {
    this.numberOfBooksInCart$ = this.store.pipe(select(selectCartStatusBooksCount))
    this.animating$ = this.store.pipe(select(selectCartIconAnimatingStatus))
  }

  iconClicked() {
    this.isDropDownOpenSubject.next(! this.isDropDownOpenSubject.value)
  }

  backDropClicked() {
    this.closeIfOpen()
  }

  private closeIfOpen() {
    if (this.isDropDownOpenSubject.value) {
      this.isDropDownOpenSubject.next(false)
    }
  }
}