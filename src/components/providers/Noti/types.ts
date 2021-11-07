export type Message = {
  id: number,
  text: string,
  type: string
}

export type Props = {
  onClose: (id: number, deleteTime: Date | null) => void
} & Message
