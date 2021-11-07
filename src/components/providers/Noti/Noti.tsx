import React, {
  FC, useCallback, useEffect, useState
} from 'react'
import { Button } from '@components/UI/Button'
import { Props } from './types'
import { Container } from './styles'

const animationDuration = 0.5

const Noti: FC<Props> = (props) => {
  const { text, id, onClose } = props
  const [deleteTime, setDeleteTime] = useState<Date | null>(null)

  useEffect(() => {
  }, [])
  const onClick = useCallback((e: OnClick) => {
    e.preventDefault()
    const currentDate = new Date()
    onClose(id, currentDate)
    setDeleteTime(currentDate)
  }, [id, onClose])

  return (
    <>
      <Container animationDuration={animationDuration} deleteTime={deleteTime}>
        {id} {text}
        <Button onClick={onClick} icon='close'/>
      </Container>
    </>
  )
}
export const NotiTSX = Noti
