import React, {
  FC, useEffect, useState,
  useCallback
} from 'react'
import { Keys } from '@games/aux/types'
import { userDataSelector } from '@store/selectors'
import { getScore, saveScore } from '@apiDb/score/actions'
import { useSnackbar } from 'notistack'
import { login } from '@apiDb/user/actions'
import { Props } from './types'
import { View } from '../View'
import {
  getModelData, onController, clear, observer, updateScoreBest
} from '../model'

const Controller: FC<Props> = () => {
  const [modelData, setModelData] = useState(getModelData())
  const { condition } = modelData
  const userData = userDataSelector()
  const { enqueueSnackbar } = useSnackbar()

  const onKeyDown = useCallback(({ key }: KeyboardEvent) => {
    onController(key as Keys)
  }, [])

  const onModel = useCallback(() => {
    setModelData(getModelData())
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    observer.subscribe(onModel)
    if (userData) {
      login({
        userId: userData.id,
        avatar: userData.avatar,
        displayName: userData.display_name || userData.login
      }).then(resLogin => {
        if (!resLogin.ok) enqueueSnackbar('Authorization failed', { variant: 'error' })
        else {
          getScore(Number(userData?.id), modelData)
            .then(resScore => {
              if (!resScore.ok) enqueueSnackbar('Failed to get score', { variant: 'error' })
              updateScoreBest(resScore.score)
            })
        }
      })
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      observer.unsubscribe(onModel)
      clear()
    }
  }, [])

  useEffect(() => {
    if (!userData || modelData.condition !== 'gameOver') return
    saveScore(userData.id, modelData)
      .then(res => {
        if (!res.ok) enqueueSnackbar('Failed to save score', { variant: 'error' })
      })
  }, [condition])

  return <View model={modelData}/>
}

export const ControllerTSX = Controller
