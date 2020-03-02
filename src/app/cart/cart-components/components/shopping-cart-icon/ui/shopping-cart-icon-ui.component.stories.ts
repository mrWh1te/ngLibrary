// Storybook dependencies
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Component Storybooking
import { ShoppingCartIconUiComponent } from './shopping-cart-icon-ui.component'

// Component Dependency
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'
import { Component, Input } from '@angular/core'

// Actions
const onIconClick = action('Icon Click')

// Template
const template = `
  <div style="padding-top: 40px;">
    <shopping-cart-icon-ui [animating]="animating" [cartItemsCount]="cartItemsCount" (onIconClick)="onIconClick()" style="max-width: 175px;margin: 0 auto;display:block;"></shopping-cart-icon-ui>
  </div>
`

// Mock Dropdown
@Component({
  selector: 'drop-down',
  template: ''
})
class MockDropDownComponent {
  @Input() attachToElement;
  @Input() isOpen$;
}
@Component({
  selector: 'shopping-cart',
  template: ''
})
class MockShoppingCartComponent {}

// Stories
storiesOf('Cart/Shopping Cart Icon', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ShoppingCartIconUiComponent, MockDropDownComponent, MockShoppingCartComponent],
      imports: [MatIconModule, MatBadgeModule]
    })
  )
  .addDecorator(withKnobs)
  .add('Example', () => {
    const animating = boolean('Animate', false)
    const cartItemsCount = number('Cart Items Count', 0)

    return {
      template,
      props: {
        // Knobs
        animating,
        cartItemsCount,
        // Actions
        onIconClick
      }
    }
  });