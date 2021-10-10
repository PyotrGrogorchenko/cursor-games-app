import React, { FC, useEffect } from 'react'
import { useMainContext } from '@components/providers/MainProvider'
import { getGamesList } from '@games/common/data/gamesList'
import { CardGame } from '@components/UI/CardGame'
import { Container } from './styles'
import { Props } from './types'

const Home: FC<Props> = () => {
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Cursor-games')
  }, [])

  return (
    <>
      <Container>
        {getGamesList().map((card) => (
          <CardGame key={card.id} card={card}/>
        ))}
      </Container>
    </>
  )
}

export const HomeTSX = Home
