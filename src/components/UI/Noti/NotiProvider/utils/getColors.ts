import { DefaultTheme } from 'styled-components'
import { Colors } from '../types'

export const getColors = <C extends Colors> (theme: DefaultTheme, colors?: C): C => {
  if (colors) return colors

  return {
    error: theme.palette.error,
    info: theme.palette.common,
    success: theme.palette.success,
    warning: theme.palette.warning
  } as C
}
