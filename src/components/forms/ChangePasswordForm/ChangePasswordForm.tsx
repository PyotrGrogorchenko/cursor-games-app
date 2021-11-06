import React, { FC, useCallback } from 'react'
import { Modal } from '@components/forms/Modal'
import { Button } from '@components/UI/Button'
import { useMainContext } from '@components/providers/MainProvider'

const ChangePasswordForm: FC = () => {
  const { openModal, setOpenModal } = useMainContext()

  const onChangePassword = useCallback((e:OnClick) => {
    e.preventDefault()
    setOpenModal(true)
  }, [openModal])

  return (
    <>
      <Button variant='outlined' color='primary' onClick={onChangePassword}>
        Change password
      </Button>
      {openModal && (
        <Modal>
          ChangePasswordForm
        </Modal>
      )}
    </>
  )
}

export const ChangePasswordFormTSX = ChangePasswordForm
