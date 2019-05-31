import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material'

import { SelectedBookComponent } from './components/selected-book/smart/selected-book.component'
import { SelectedBookUiComponent } from './components/selected-book/ui/selected-book-ui.component'
import { BookComponent } from './components/book/smart/book.component'
import { BookUiComponent } from './components/book/ui/book-ui.component'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
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
export class BookWidgetsModule {}