import { InputHTMLAttributes } from 'react'

export type Props = {
  width?: string,
  label?: string
} & InputHTMLAttributes<HTMLInputElement>
