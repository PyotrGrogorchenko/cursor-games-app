import React, {
  FC, useEffect, useState,
  useCallback
} from 'react'
import { Keys } from '@games/common/types'
import { userDataSelector } from '@store/selectors'
import { getScore, saveScore } from '@apiDb/score/actions'
import { getObserver, resetObserver } from '@games/common/utils/observer'
import { useNoti } from '@components/UI/Noti/NotiProvider'
import { Props } from './types'
import { View as ViewSnake } from '../../gameSnake/View'
import { View as View2048 } from '../../game2048/View'

const Controller: FC<Props> = (props: Props) => {
  const { modelMethods } = props
  const {
    getModelData, onController, clear, updateScoreBest
  } = modelMethods
  const { pushNoti } = useNoti()

  const [modelData, setModelData] = useState(getModelData())
  const { condition, gameId } = modelData
  const userData = userDataSelector()

  const onKeyDown = useCallback(({ key }: KeyboardEvent) => {
    onController(key as Keys)
  }, [])

  const onModel = useCallback(() => {
    setModelData(getModelData())
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    getObserver().subscribe(onModel)
    if (userData) {
      getScore(Number(userData?.id), modelData)
        .then(resScore => {
          if (!resScore.ok) pushNoti('Failed to get score', 'error')
          updateScoreBest(resScore.score)
        })
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      resetObserver()
      clear()
    }
  }, [])

  useEffect(() => {
    if (!userData || modelData.condition !== 'gameOver') return
    saveScore(userData.id, modelData)
      .then(res => {
        if (!res.ok) pushNoti('Failed to save score', 'error')
      })
  }, [condition])

  return (
    <>
      {gameId === 'snake' && <ViewSnake model={modelData}/>}
      {gameId === '2048' && <View2048 model={modelData}/>}
    </>
  )
}

export const ControllerTSX = Controller
