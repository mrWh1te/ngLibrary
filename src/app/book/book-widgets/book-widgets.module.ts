import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'

import { SelectedBookComponent } from './components/selected-book/smart/selected-book.component'
import { SelectedBookUiComponent } from './components/selected-book/ui/selected-book-ui.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Smart
    SelectedBookComponent,
    // UI
    SelectedBookUiComponent
  ],
  exports: [
    SelectedBookComponent
  ]
})
export class BookWidgetsModule {}