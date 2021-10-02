import React, { FC } from 'react'
import { getIconClass } from './utils'
import { Props } from './types'
import { I } from './styles'

const Icon: FC<Props> = (props: Props) => {
  const { icon } = props

  return (
    <>
      <I className={getIconClass(icon)} {...props}/>
    </>
  )
}

export const IconTSX = Icon
