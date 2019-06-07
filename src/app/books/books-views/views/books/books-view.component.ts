import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core"

@Component({
  selector: 'books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksViewComponent {}