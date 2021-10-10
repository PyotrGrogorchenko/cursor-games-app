import { InputHTMLAttributes } from 'react'

export type Props = {
  width?: string,
  label?: string,
  inputValue?: string
} & InputHTMLAttributes<HTMLInputElement>
