import { theme as light } from './light'
import { Theme } from './types'

const themes = {
  light
}

export const getTheme = (name: keyof typeof themes = 'light'): Theme => themes[name]
