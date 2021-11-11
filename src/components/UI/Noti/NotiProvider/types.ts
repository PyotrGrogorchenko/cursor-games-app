import { ReactNode } from 'react'
import { NotiTypes } from '../NotiItem'

export type Colors = {
  [K in NotiTypes]: string
}

export type Props = {
  children: ReactNode,
  colors?: Colors,
  opacity?: number,
  animationDuration?: number
}

export type Context = {
  pushNoti: (text: string, type?: NotiTypes) => void,
  markNoti: (id: number, deletedAt?: Date) => void,
  getData: () => {
    colors: Colors,
    opacity: number,
    animationDuration: number
  }
}
