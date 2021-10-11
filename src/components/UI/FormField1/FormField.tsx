import React, { FC, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { getPattern } from '@validation/patterns'
import { Props } from './types'
import { Input } from '../Input'

const FormField: FC<Props> = (props: Props) => {
  const {
    id, label, type, value
  } = props
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const pattern = useMemo(() => getPattern(type), [])

  return (
    <Input
      id={id}
      label={label}
      valid={!errors.login}
      errMassage={pattern.tip}
      type={type === 'password' ? 'password' : 'text'}
      defaultValue={value}
      {...register(id, { required: true, pattern: pattern.pattern })}/>
  )
}

export const FormFieldTSX = FormField
