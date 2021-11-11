import { theme as light } from './versions/light'
import { theme as dark } from './versions/dark'
import { Theme } from './types'

const themes = {
  light,
  dark
}

export type Themes = keyof typeof themes

export const getTheme = (name: Themes = 'light'): Theme => themes[name]

export const fetchTheme = (): Themes => {
  const storageTheme = localStorage.getItem('theme')
  return (storageTheme && storageTheme as Themes) || 'light'
}

export const putTheme = (name: Themes) => {
  localStorage.setItem('theme', name)
}
