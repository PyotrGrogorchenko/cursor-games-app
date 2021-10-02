import React, { FC } from 'react'
import { Icon } from '@components/UI/Icon'
import { Props } from './types'
import { Container } from './styles'

const Anchor: FC<Props> = (props: Props) => {
  const { icon, href } = props

  return (
    <Container href={href} target='_blank'>
      {icon && <Icon icon={icon} {...props}/>}
    </Container>
  )
}

export const AnchorTSX = Anchor
