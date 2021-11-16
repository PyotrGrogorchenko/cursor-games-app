import { ButtonHTMLAttributes } from 'react'
import { Icon } from '@components/UI/Icon/utils'
import { Colors, Sizes } from '@theme'

export type PropsCommon = {
  icon?: Icon,
  size?: Sizes,
  variant?: 'text' | 'contained' | 'outlined',
  color?: Colors,
  href?: string,
  disabled?: boolean
}

export type Props = PropsCommon & ButtonHTMLAttributes<HTMLButtonElement>
