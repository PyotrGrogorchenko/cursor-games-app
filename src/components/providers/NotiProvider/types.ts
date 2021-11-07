import { ReactNode } from 'react'

export type Props = {
  children: ReactNode,
}

export type Context = {
  pushNoti: (text: string, type?: string) => void
}
