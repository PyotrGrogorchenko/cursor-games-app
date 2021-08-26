import { patterns } from '../const'
import { Types, Pattern } from '../types'

export const getPattern = (type: Types = 'text'): Pattern => {
  const pattern = patterns[type]
  return pattern || patterns.text
}
