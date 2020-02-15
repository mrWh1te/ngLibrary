// Storybook dependencies
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { object, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Component Storybooking
import { SelectedBookUiComponent } from './selected-book-ui.component'

// Component Dependency
import { FlexLayoutModule } from '@angular/flex-layout'

// Actions
const onAddToBasket = action('Book Added to Basket')

// Template
const template = `<selected-book-ui [selectedBook]="book" (onAddToBasket)="onAddToBasket()" style="max-width: 250px;margin: 0 auto;display:block;"></selected-book-ui>`

// Stories
storiesOf('Book/Selected Book', module)
  .addDecorator(
    moduleMetadata({
      declarations: [SelectedBookUiComponent],
      imports: [FlexLayoutModule]
    })
  )
  .addDecorator(withKnobs)
  .add('Cat Image Example', () => {
    const book = object('Book', {
      id: 5,
      isbn: 'isbn-example',
      title: 'Book Title',
      author: 'Book Author',
      cover: {
        large: 'https://placekitten.com/250/400'
      }
    })

    return {
      template,
      props: {
        book,
        onAddToBasket
      }
    }
  })
  .add('Broken Image Example', () => {
    const book = object('Book', {
      id: 5,
      isbn: 'isbn-example',
      title: 'Book Title',
      author: 'Book Author',
      cover: {
        large: ''
      }
    })

    return {
      template,
      props: {
        book,
        onAddToBasket
      }
    }
  });