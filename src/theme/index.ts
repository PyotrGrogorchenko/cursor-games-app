import { Sizing, Theme } from 'typings/styled'
import { theme as light } from './light'

const themes = {
  light
}

const sizing: Sizing = {
  s: 1,
  m: 2,
  l: 3
}

export const getTheme = (name: keyof typeof themes = 'light'): Theme => {
  const theme = themes[name]
  theme.sizing = theme.sizing || sizing

  return themes[name]
}
