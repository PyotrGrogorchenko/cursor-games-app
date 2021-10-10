import React, {
  FocusEvent, useState, forwardRef
} from 'react'
import { Props } from './types'
import {
  InputStyled,
  Label,
  Container,
  FocusBorder
} from './styles'

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    id, width, label, defaultValue, onBlur, ...restProps
  } = props

  const [val, setVal] = useState(defaultValue)

  const onBlurLocal = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (onBlur) onBlur(e)
    setVal(e.target.value)
  }

  return (
    <Container style={{ width }}>
      <InputStyled id={id} ref={ref} onBlur={onBlurLocal} {...restProps}/>
      <Label htmlFor={id} val={val}>{label}</Label>
      <FocusBorder/>
    </Container>
  )
})

export const InputTSX = Input
