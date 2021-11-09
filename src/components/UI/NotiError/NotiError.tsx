import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { errDataSelector } from '@store/selectors'
import { err } from '@store/reducers/err/actions'
import { useNoti } from '@components/UI/Noti/NotiProvider'
import { Props } from './types'

const NotiError: FC<Props> = () => {
  const { pushNoti } = useNoti()
  const dispatch = useDispatch()
  const errData = errDataSelector()
  useEffect(() => {
    if (errData) {pushNoti(errData.message, 'error')}
    dispatch(err())
  }, [errData])

  return null
}

export const NotiErrorTSX = NotiError
