import 'styled-components'

type Palette = {
  [key in Color]: string
}

type Sizing = {
  text: {
    [key in SizeText]: string
  },
  button: {
    [key in Size]: string
  },
  input: {
    [key in Size]: string
  }
}

type Breakpoints = {
  mobileLandscape: string,
  tabletPortrait: string,
  tabletLandscape: string,
  laptop: string,
  desktop: string
}

type Mixins = {
  fontFamily: string
}

type Theme = {
  palette: Palette,
  sizing: Sizing,
  breakpoints: Breakpoints,
  mixins: Mixins
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette,
    sizing: Sizing,
    breakpoints: Breakpoints,
    mixins: Mixins
  }
}
