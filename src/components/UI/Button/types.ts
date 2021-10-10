import { ButtonHTMLAttributes } from 'react'
import { Icon } from '@components/UI/Icon/utils'
import { Color, Size } from 'src/theme'

export type PropsCommon = {
  icon?: Icon,
  size?: Size,
  variant?: 'text' | 'contained' | 'outlined',
  color?: Color,
  href?: string,
  disabled?: boolean
}

export type Props = {
} & PropsCommon & ButtonHTMLAttributes<HTMLButtonElement>

// export type PropsButton = {
// } & Props & ButtonHTMLAttributes<HTMLButtonElement>

// export type PropsAnchor = {
//   disabled?: boolean
// } & Props // & AnchorHTMLAttributes<HTMLElement>
