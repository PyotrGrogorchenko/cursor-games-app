import { Types } from '@validation/patterns'

export type Props = {
  id: string
  label: string
  type?: Types
  value?: string
  required?: boolean
}
