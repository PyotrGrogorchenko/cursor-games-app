import React, {
  FC, FocusEvent, useCallback, useRef, useState
} from 'react'
import { Props } from './types'
import {
  InputStyled,
  Label,
  Container,
  FocusBorder
} from './styles'

const Input: FC<Props> = (props: Props) => {
  const {
    id, width, label, ...restProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  const onBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!inputRef.current) return
    setInputValue(inputRef.current.value)
  }, [inputRef])

  return (
    <Container style={{ width }}>
      <InputStyled id={id} ref={inputRef} onBlur={onBlur} {...restProps}/>
      <Label htmlFor={id} inputValue={inputValue}>{label}</Label>
      <FocusBorder/>
    </Container>
  )
}

export const InputTSX = Input
