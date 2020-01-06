import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

import { BookDataModule } from '../book-data/book-data.module'
import { SelectedBookComponent } from './widgets/selected-book/smart/selected-book.component'
import { SelectedBookUiComponent } from './widgets/selected-book/ui/selected-book-ui.component'
import { BookComponent } from './widgets/book/smart/book.component'
import { BookUiComponent } from './widgets/book/ui/book-ui.component'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    BookDataModule
  ],
  declarations: [
    // Smart
    SelectedBookComponent,
    BookComponent,
    // UI
    SelectedBookUiComponent,
    BookUiComponent
  ],
  exports: [
    SelectedBookComponent,
    BookComponent
  ]
})
export class BookWidgetsModule {
  constructor() {
    console.log('[BookWidgetsModule] constructor()')
  }
}