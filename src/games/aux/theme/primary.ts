import { Theme, Color, Size } from './types'

const color: Color = {
  primary: '#343a40',
  secondary: '#fefae0',
  field: '#faedcd',
  link: '#0077b6',
  err: '#c1121f',
  success: '#40916c'
}

const font: Size = {
  small: '15px Helvetica',
  medium: '20px Helvetica',
  large: '25px Helvetica'
}

export const primary: Theme = { font, color }
