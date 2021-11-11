import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from 'styled-components'
import { theme as light } from '../src/theme/light'
import { initStore } from '../src/store'

const store = initStore()
const themes = [light]
addDecorator(withThemesProvider(themes), ThemeProvider)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

// export default { decorators: [] }

export const decorators = []
