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
    ...restProps
  } = props

  return (
    <Container>
      <InputStyled id={id} placeholder='{mock}' {...restProps}/>
      <Label htmlFor={id}>Test</Label>
      <FocusBorder/>
    </Container>
  )
}

export const InputTSX = Input
