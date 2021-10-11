import { InputHTMLAttributes } from 'react'

export type Props = {
  width?: string,
  label?: string,
  val?: string | number | readonly string[] | undefined,
  valid?: boolean,
  errMassage?: string
} & InputHTMLAttributes<HTMLInputElement>
