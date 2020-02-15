import { moduleMetadata, storiesOf } from '@storybook/angular'
import { action } from '@storybook/addon-actions'

import { MatCardModule } from '@angular/material/card'

import { BookUiComponent } from './book-ui.component'

// Actions
const bookClicked = action('Book Clicked')

storiesOf('Book/BookUiComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [BookUiComponent],
      imports: [MatCardModule]
    })
  )
  .add('Broken Image Example', () => ({
    template: `<book-ui [book]="book" (onSelect)="bookClicked()" style="max-width: 175px;margin: 0 auto;display:block;"></book-ui>`,
    props: {
      book: {
        id: 5,
        isbn: 'isbn-example',
        title: 'title',
        author: 'author',
        genre: 'genre',
        summary: 'example summary',
        description: 'example description',
      },
      bookClicked
    },
  }))
  .add('Cat Image Example', () => ({
    template: `<book-ui [book]="book" (onSelect)="bookClicked()" style="max-width: 175px;margin: 0 auto;display:block;"></book-ui>`,
    props: {
      book: {
        id: 5,
        isbn: 'isbn-example',
        title: 'title',
        author: 'author',
        genre: 'genre',
        summary: 'example summary',
        description: 'example description',
        cover: {
          medium: 'https://placekitten.com/200/286'
        }
      },
      bookClicked
    },
  }));