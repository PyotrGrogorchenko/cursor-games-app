import { ButtonHTMLAttributes } from 'react'
import { Icon } from '@components/UI/Icon/utils'

export type Props = {
  icon?: Icon,
  size?: Size
} & ButtonHTMLAttributes<HTMLButtonElement>
