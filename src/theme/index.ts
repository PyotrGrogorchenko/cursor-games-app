import { Theme } from 'typings/styled'
import { theme as light } from './light'

const themes = {
  light
}

export const getTheme = (name: keyof typeof themes = 'light'): Theme => themes[name]
