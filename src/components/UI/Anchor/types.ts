import { AnchorHTMLAttributes } from 'react'
import { Icon } from '../Icon/utils'

export type Props = {
  icon?: Icon,
  size?: Size
} & AnchorHTMLAttributes<HTMLElement>
