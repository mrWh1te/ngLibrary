// Storybook dependencies
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { withKnobs, boolean, number, color } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Component Storybooking
import { CheckoutSubmitButtonUiComponent } from './checkout-submit-button-ui.component'

// Component Dependency
import { MatButtonModule } from '@angular/material/button'

// Actions
const onSubmit = action('Submit Button Click')

// Template
const template = `
  <div style="padding-top: 40px; text-align: center;">
    <checkout-submit-button-ui [isDisabled]="isDisabled" [fontColor]="fontColor" (onSubmit)="onSubmit()" style="display:inline-block;"></checkout-submit-button-ui>
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
    const fontColor = color('Button Font Color', 'rgba(0,0,0,.87)')

    return {
      template,
      props: {
        // Knobs
        isDisabled,
        fontColor,
        // Actions
        onSubmit
      }
    }
  });