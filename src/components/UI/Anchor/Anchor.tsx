import React, { FC } from 'react'
import { getIconClass } from '@icons/getIconClass'
import { Props } from './types'
import { Container } from './styles'

const Anchor: FC<Props> = (props: Props) => {
  const { icon, href } = props

  return (
    <Container href={href} target='_blank'>
      { icon && <i className={getIconClass(icon)}/>}
    </Container>
  )
}

export const AnchorTSX = Anchor
