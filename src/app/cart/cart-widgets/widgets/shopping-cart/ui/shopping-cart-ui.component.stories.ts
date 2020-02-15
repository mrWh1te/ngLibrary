// Storybook dependencies
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { withKnobs, object, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Component Storybooking
import { ShoppingCartUiComponent } from './shopping-cart-ui.component'

// Component Dependency
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'

// Actions
const onClickRemove = action('Remove Cart Item Click')

// Data
const book1 = {
  id: 1,
  title: 'Book1',
  cover: {
    small: 'https://placekitten.com/125/120'
  },
  authors: [
    {
      name: 'Book1 Author'
    }
  ]
}
const book2 = {
  id: 2,
  title: 'Book2',
  cover: {
    small: 'https://placekitten.com/126/120'
  },
  authors: [
    {
      name: 'Book2 Author'
    }
  ]
}
const book3 = {
  id: 3,
  title: 'Book3',
  cover: {
    small: 'https://placekitten.com/128/120'
  },
  authors: [
    {
      name: 'Book3 Author'
    }
  ]
}

// Template
const template = `
  <div style="padding-top: 40px;">
    <shopping-cart-ui [books]="books" [ui]="ui" (onClickRemove)="onClickRemove()" style="display: block;max-width: 350px; margin: 0 auto;"></shopping-cart-ui>
  </div>
`

// Stories
storiesOf('Cart/Shopping Cart', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ShoppingCartUiComponent],
      imports: [MatIconModule, FlexLayoutModule]
    })
  )
  .addDecorator(withKnobs)
  .add('Dropdown Example', () => {
    const books = object('Books', [
      book1, book2, book3
    ])
    const ui = text('UI Template', 'dropdown')

    return {
      template,
      props: {
        // Knobs
        ui,
        books,
        // Actions
        onClickRemove
      }
    }
  })
  .add('Checkout (default) Example', () => {
    const books = object('Books', [
      book1, book2, book3
    ])
    const ui = text('UI Template', '')

    return {
      template,
      props: {
        // Knobs
        ui,
        books,
        // Actions
        onClickRemove
      }
    }
  });