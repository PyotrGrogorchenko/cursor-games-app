import React, { FC } from 'react'
import { Props } from './types'
import {
  InputStyled,
  Label,
  Container,
  FocusBorder
} from './styles'

const Input: FC<Props> = (props: Props) => {
  const {
    id,
    width,
    label,
    ...restProps
  } = props

  return (
    <Container style={{ width }}>
      <InputStyled id={id} {...restProps}/>
      <Label htmlFor={id}>{label}</Label>
      <FocusBorder/>
    </Container>
  )
}

export const InputTSX = Input
