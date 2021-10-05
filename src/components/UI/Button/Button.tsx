import React, { FC } from 'react'
import { Icon } from '@components/UI/Icon'
import { Props } from './types'
import { Container } from './styles'

const Button: FC<Props> = (props: Props) => {
  const {
    children,
    icon,
    size,
    ...restProps
  } = props

  return (
    <Container size={size} {...restProps}>
      {icon && <><Icon icon={icon} size={size}/>&nbsp;</>}
      {children && children}
    </Container>
  )
}

export const ButtonTSX = Button
