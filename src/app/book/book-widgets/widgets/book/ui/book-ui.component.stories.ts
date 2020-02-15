import { moduleMetadata, storiesOf } from '@storybook/angular'
import { MatCardModule } from '@angular/material/card'

import { BookUiComponent } from './book-ui.component'

storiesOf('Book/BookUiComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [BookUiComponent],
      imports: [MatCardModule]
    })
  )
  .add('Broken Image Example', () => ({
    template: `<book-ui [book]="book" (onSelect)="onSelect()" style="max-width: 175px;margin: 0 auto;display:block;"></book-ui>`,
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
      onSelect: () => {
        console.log('book with id: 5 was selected')
      }
    },
  }))
  .add('Cat Image Example', () => ({
    template: `<book-ui [book]="book" (onSelect)="onSelect()" style="max-width: 175px;margin: 0 auto;display:block;"></book-ui>`,
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
      onSelect: () => {
        console.log('book with id: 5 was selected')
      }
    },
  }));