// Storybook dependencies
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Component Storybooking
import { CheckoutSubmitButtonUiComponent } from './checkout-submit-button-ui.component'

// Component Dependency
import { MatButtonModule } from '@angular/material/button'

// Actions
const onSubmit = action('Submit Button Click')

// Template
const template = `
  <div style="padding-top: 40px;">
    <checkout-submit-button-ui [isDisabled]="isDisabled" (onSubmit)="onSubmit()" style="max-width: 175px;margin: 0 auto;display:block;"></checkout-submit-button-ui>
  </div>
`

// Stories
storiesOf('Checkout/Submit Button', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CheckoutSubmitButtonUiComponent],
      imports: [MatButtonModule]
    })
  )
  .addDecorator(withKnobs)
  .add('Example', () => {
    const isDisabled = boolean('Is Disabled', false)

    return {
      template,
      props: {
        // Knobs
        isDisabled,
        // Actions
        onSubmit
      }
    }
  });