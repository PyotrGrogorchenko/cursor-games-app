import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle((props) => `
  * {
      margin: 0;
      padding: 0;
      background-color: ${props.theme.palette.secondary};
      font-family: 'Roboto', sans-serif;
  }`)
export const GlobalStyleTSX = GlobalStyle
