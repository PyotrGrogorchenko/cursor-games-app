export type Color = 'primary' | 'secondary' | 'tertiary' | 'common' | 'error' | 'warning' | 'success' | 'shadow'
export type Size = 's' | 'm' | 'l'
export type SizeText = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Palette = {
  [key in Color]: string
}

export type Sizing = {
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

export type Breakpoints = {
  mobileLandscape: string,
  tabletPortrait: string,
  tabletLandscape: string,
  laptop: string,
  desktop: string
}

export type Mixins = {
  fontFamily: string
}

export type Theme = {
  palette: Palette,
  sizing: Sizing,
  breakpoints: Breakpoints,
  mixins: Mixins
}
