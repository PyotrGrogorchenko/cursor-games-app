import React, { FC } from 'react'
import { getIconClass } from '@icons/getIconClass'
import { Props } from './types'
import { Container } from './styles'

const Button: FC<Props> = (props: Props) => {
  const { children, icon, onClick } = props

  return (
    <Container onClick={onClick}>
      { icon && <i className={getIconClass(icon)}/>}
      {children && <>&nbsp; {children}</>}
    </Container>
  )
}

export const ButtonTSX = Button
