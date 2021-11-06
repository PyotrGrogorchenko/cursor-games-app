import React, { FC, useCallback } from 'react'
import { Button } from '@components/UI/Button'
import { useMainContext } from '@components/providers/MainProvider'
import {
  Backdrop, Container, Content, Actions
} from './styles'
import { Props } from './types'

const Modal: FC<Props> = (props) => {
  const { children } = props
  const { openModal, setOpenModal } = useMainContext()

  const onClose = useCallback(() => {
    setOpenModal(false)
  }, [openModal])

  return (
    <>
      {openModal && (
        <Backdrop>
          <Container>
            <Content>
              {children}
            </Content>
            <Actions>
              <Button onClick={onClose}>Close</Button>
            </Actions>
          </Container>
        </Backdrop>
      )}
    </>
  )
}

export const ModalTSX = Modal
