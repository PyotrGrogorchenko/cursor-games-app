import { Colors } from '../NotiProvider/types'

export type NotiTypes = 'success' | 'error' | 'warning' | 'info'

export type Message = {
  id: number,
  text: string,
  type: NotiTypes,
  createdAt: Date,
  deletedAt?: Date
}

export type Props = Message

export type ContainerProps = {
  animationDuration: number,
  type: NotiTypes,
  deletedAt?: Date,
  colors: Colors,
  opacity: number
}
