import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle(() => `
  * {
      margin: 0;
      padding: 0;
      background-color: transparent;
      font-family: 'Roboto', sans-serif;
  }`)
export const GlobalStyleTSX = GlobalStyle
