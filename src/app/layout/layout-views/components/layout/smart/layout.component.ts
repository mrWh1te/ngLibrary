import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCartStatusBooksCount } from 'src/app/cart/cart-data/selectors/cart-status.selectors';

@Component({
  selector: 'layout',
  template: `<layout-ui 
    [cartItemsCount]="numberOfBooksInCart$ | async"
    (logoClick)="logoClicked()" 
    (cartClick)="cartClicked()"></layout-ui>`
})
export class LayoutComponent {
  numberOfBooksInCart$: Observable<number>

  constructor(private store: Store<any>) {
    this.numberOfBooksInCart$ = this.store.pipe(select(selectCartStatusBooksCount))
  }

  cartClicked() {
    console.log('[LayoutComponent] cart clicked')
  }

  logoClicked() {
    console.log('[LayoutComponent] logo clicked')
  }
}