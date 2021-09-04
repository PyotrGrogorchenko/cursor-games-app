import { ReactNode } from 'react'
import { Icons } from '@icons/icons'
// import { Types } from '@validation/patterns'

export type Props = {
  children?: ReactNode
  icon?: Icons
  onClick?: (e:OnClick) => void
  // id: string
  // label: string
  // type?: Types
  // value?: string
  // required?: boolean
}
