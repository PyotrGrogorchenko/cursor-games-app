import React, { FC, useCallback, useMemo } from 'react'
import { Button } from '@components/UI/Button'
import { Props } from './types'
import { Container } from './styles'
import { useNoti } from '../NotiProvider'

const NotiItem: FC<Props> = (props) => {
  const {
    text, id, deletedAt, type
  } = props
  const { markNoti, getData } = useNoti()
  const data = useMemo(() => getData(), [getData])

  const onClick = useCallback((e: OnClick) => {
    e.preventDefault()
    markNoti(id, new Date())
  }, [id])

  return (
    <>
      <Container
        animationDuration={data.animationDuration}
        deletedAt={deletedAt}
        colors={data.colors}
        opacity={data.opacity}
        type={type}
      >
        {text}
        <Button onClick={onClick} icon='close'/>
      </Container>
    </>
  )
}
export const NotiItemTSX = NotiItem
