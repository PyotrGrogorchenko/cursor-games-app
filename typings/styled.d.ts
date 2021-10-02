import 'styled-components'

type Palette = {
  [key in Color]: string
}

type Sizing = {
  [key in Size]: number
}

type Theme = {
  palette: Palette,
  sizing: Sizing
}

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
