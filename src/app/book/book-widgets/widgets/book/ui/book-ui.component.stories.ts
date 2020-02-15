// Storybook dependencies
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { object, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Component Storybooking
import { BookUiComponent } from './book-ui.component'

// Component Dependency
import { MatCardModule } from '@angular/material/card'

// Actions
const bookClicked = action('Book Clicked')

// Template
const template = `<book-ui [book]="book" (onSelect)="bookClicked()" style="max-width: 175px;margin: 0 auto;display:block;"></book-ui>`

// Stories
storiesOf('Book/Book', module)
  .addDecorator(
    moduleMetadata({
      declarations: [BookUiComponent],
      imports: [MatCardModule]
    })
  )
  .addDecorator(withKnobs)
  .add('Cat Image Example', () => {
    const book = object('Book', {
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
    })

    return {
      template,
      props: {
        book,
        bookClicked
      }
    }
  })
  .add('Broken Image Example', () => {
    const book = object('Book', {
      id: 5,
      isbn: 'isbn-example',
      title: 'title',
      author: 'author',
      genre: 'genre',
      summary: 'example summary',
      description: 'example description',
    })

    return {
      template,
      props: {
        book,
        bookClicked
      }
    }
  });