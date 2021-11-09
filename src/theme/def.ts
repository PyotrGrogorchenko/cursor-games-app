import { Palette, Theme } from './types'

const palette: Palette = {
  primary: '#333333',
  secondary: '#ffffff',
  tertiary: 'rgb(107 107 107)',
  common: '#FF9011',
  shadow: '#e6e6e6',
  error: '#ed4b48',
  warning: '#ffb400',
  success: '#26b47f'
}

const text = {
  h1: '50px',
  h2: '42px',
  h3: '34px',
  h4: '27px',
  h5: '20px',
  h6: '15px'
}

const button = {
  s: '15px',
  m: '20px',
  l: '25px'
}

const input = {
  s: '15px',
  m: '20px',
  l: '25px'
}

const breakpoints = {
  mobileLandscape: '576px',
  tabletPortrait: '768px',
  tabletLandscape: '992px',
  laptop: '1200px',
  desktop: '1400px'
}

const mixins = {
  fontFamily: 'font-family: \'Roboto\', sans-serif;'
}

export const theme: Theme = {
  palette,
  sizing: {
    text,
    button,
    input
  },
  breakpoints,
  mixins
}
