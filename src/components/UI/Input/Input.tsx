import React, {
  FocusEvent, useState, forwardRef
} from 'react'
import { Props } from './types'
import {
  InputStyled, Label, Container, FocusBorder, ErrSpan
} from './styles'

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    id,
    width,
    label,
    errMassage = 'Field is filled in incorrectly',
    valid,
    defaultValue,
    onBlur,
    ...restProps
  } = props

  const [val, setVal] = useState(defaultValue)

  const onBlurLocal = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    setVal(e.target.value)
    if (onBlur) onBlur(e)
  }

  return (
    <Container style={{ width }}>
      <InputStyled
        id={id}
        ref={ref}
        onBlur={onBlurLocal}
        defaultValue={defaultValue}
        {...restProps}/>
      <Label htmlFor={id} val={val}>{label}</Label>
      <FocusBorder/>
      {!valid && <ErrSpan>{errMassage}</ErrSpan>}
    </Container>
  )
})

export const InputTSX = Input
