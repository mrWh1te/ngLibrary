// Storybook dependencies
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { object, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Component Storybooking
import { BooksUiComponent } from './books-ui.component'

// Component Dependency
import { MatCardModule } from '@angular/material/card'
import { BookComponent } from '../../../../../book/book-widgets/widgets/book/smart/book.component'
import { BookUiComponent } from '../../../../../book/book-widgets/widgets/book/ui/book-ui.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { Store } from '@ngrx/store'

// Data
const book1 = {
  id: 1,
  cover: {
    medium: 'https://placekitten.com/250/400'
  }
}
const book2 = {
  id: 2,
  cover: {
    medium: 'https://placekitten.com/250/405'
  }
}
const book3 = {
  id: 3,
  cover: {
    medium: 'https://placekitten.com/250/410'
  }
}

// Template
const template = `<books-ui [books]="books" style="display:block; width:100%; height:100%;"></books-ui>`

// Stories
storiesOf('Books/Books', module)
  .addDecorator(
    moduleMetadata({
      declarations: [BooksUiComponent, BookUiComponent, BookComponent],
      imports: [MatCardModule, FlexLayoutModule],
      providers: [{useValue: {dispatch: action('Book Selected')}, provide: Store}]
    })
  )
  .addDecorator(withKnobs)
  .add('3 Book Example', () => {
    return {
      template,
      props: {
        books: object('Books', [
          book1, book2, book3
        ])
      }
    }
  })
  .add('0 Books Example', () => {
    return {
      template,
      props: {
        books: object('Books', [])
      }
    }
  });