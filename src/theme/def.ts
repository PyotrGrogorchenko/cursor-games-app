import { Palette, Theme } from 'typings/styled'

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
  h6: '13px'
}

const button = {
  s: '12px',
  m: '20px',
  l: '28px'
}

const breakpoints = {
  mobileLandscape: '576px',
  tabletPortrait: '768px',
  tabletLandscape: '992px',
  laptop: '1200px',
  desktop: '1400px'
}

export const theme: Theme = {
  palette,
  sizing: {
    text,
    button
  },
  breakpoints
}
