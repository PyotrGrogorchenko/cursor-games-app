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
    <Container {...restProps}>
      {icon && <Icon icon={icon} size={size}/>}
      {children && <>&nbsp; {children}</>}
    </Container>
  )
}

export const ButtonTSX = Button
