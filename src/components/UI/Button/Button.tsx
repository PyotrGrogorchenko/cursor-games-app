import React, { FC } from 'react'
import { Icon } from '@components/UI/Icon'
import { ButtonStyled, AnchorStyled } from './styles'
import { Props, PropsCommon } from './types'

const Button: FC<Props> = (props) => {
  const {
    children, icon, size, href, ...restProps
  } = props

  const renderChildren = (
    <>
      {icon && <Icon icon={icon} size={size}/>}
      {icon && children && <>&nbsp;</> }
      {children && children}
    </>
  )

  return (
    <>
      {href
      && (
        <AnchorStyled size={size} href={href} {...restProps as PropsCommon} target='_blank'>
          {renderChildren}
        </AnchorStyled>
      )}
      {!href
      && (
        <ButtonStyled size={size} {...restProps}>
          {renderChildren}
        </ButtonStyled>
      )}
    </>
  )
}

export const ButtonTSX = Button
