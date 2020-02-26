import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

import { BookDataModule } from '../book-data/book-data.module'
import { SelectedBookComponent } from './components/selected-book/smart/selected-book.component'
import { SelectedBookUiComponent } from './components/selected-book/ui/selected-book-ui.component'
import { BookComponent } from './components/book/smart/book.component'
import { BookUiComponent } from './components/book/ui/book-ui.component'

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
export class BookComponentsModule {
  constructor() {
    console.log('[BookComponentsModule] constructor()')
  }
}