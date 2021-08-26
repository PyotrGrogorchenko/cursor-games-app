import { reset } from '@saga/main/actions'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Props } from './types'

const HistoryListener: FC<Props> = (props: Props) => {
  const { history } = props
  const dispatch = useDispatch()

  const onRoute = () => {
    dispatch(reset())
  }
  useEffect(() => {
    history.listen(onRoute)
  }, [])

  return null
}

export const HistoryListenerTSX = withRouter(HistoryListener)
