import { FC, useEffect } from 'react'
// import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { errDataSelector } from '@store/selectors'
import { err } from '@store/reducers/err/actions'
import { Props } from './types'

const NotiError: FC<Props> = () => {
  // const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const errData = errDataSelector()
  useEffect(() => {
    if (errData) {
      // enqueueSnackbar(errData.message, { variant: 'error' })
    }
    dispatch(err())
  }, [errData])

  return null
}

export const NotiErrorTSX = NotiError
