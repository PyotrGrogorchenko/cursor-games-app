import React, { FC, useMemo } from 'react'
import {
  withStyles, TextField
} from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'
import { getPattern } from '@validation/patterns'
import { styles } from './styles'
import { Props } from './types'

const FormField: FC<Props> = (props) => {
  const {
    id, label, type, value
  } = props
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const pattern = useMemo(() => getPattern(type), [])

  return (
    <Controller
      name={id}
      control={control}
      rules={{
        required: true,
        pattern: pattern.pattern
      }}
      defaultValue={value || ''}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          size='small'
          fullWidth
          type={type === 'password' ? 'password' : 'text'}
          id={field.name}
          inputRef={field.ref}
          error={!!errors[id]}
          helperText={!!errors[id] && pattern.tip}
        />
      )}
    />
  )
}

export const FormFieldTSX = withStyles(styles)(FormField)
