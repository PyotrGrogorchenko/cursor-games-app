import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export type CellProps = {
  justifyContent?: 'flex-start' | 'flex-end' | 'center'
}
