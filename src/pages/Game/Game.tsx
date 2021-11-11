import React, {
  FC, useCallback, useEffect, useMemo, useState
} from 'react'
import { useMainContext } from '@components/providers/MainProvider'
import { useParams } from 'react-router-dom'
import { getGameCard } from '@games/common/data/gamesList'
import { login } from '@apiDb/user/actions'
import { userDataSelector } from '@store/selectors'
import { useDispatch } from 'react-redux'
import { loader } from '@store/reducers/main/actions'
import { Controller } from '@games/common/Controller'
import { modelMethods as modelMethodsSnake } from '@games/gameSnake/model'
import { modelMethods as modelMethods2048 } from '@games/game2048/model'
import { useNoti } from '@components/UI/Noti/NotiProvider'
import { Container } from './styles'
import { Props } from './types'

const Game: FC<Props> = () => {
  const { setTitle } = useMainContext()
  const { id } = useParams<{ id: string }>()
  const [apiConnected, setApiConnected] = useState(false)
  const userData = userDataSelector()

  const { pushNoti } = useNoti()
  const dispatch = useDispatch()

  const gameCard = useMemo(() => getGameCard(id), [id])

  useEffect(() => {
    setTitle(`${gameCard.title}`)
    if (!userData) return
    dispatch(loader(true))
    login({
      userId: userData.id,
      avatar: userData.avatar,
      displayName: userData.display_name || userData.login
    }).then(res => {
      if (res.ok) setApiConnected(true)
      else pushNoti('Authorization failed', 'error')
      dispatch(loader(false))
    })
  }, [])

  const getModelMethods = useCallback(() => {
    switch (gameCard.id) {
      case 'snake': return modelMethodsSnake
      case '2048': return modelMethods2048
      default: throw new Error(`Unexpected gameId: ${gameCard.id}`)
    }
  }, [gameCard])

  return (
    <Container>
      {apiConnected && <Controller modelMethods={getModelMethods()}/>}
    </Container>
  )
}
export const GameTSX = Game
