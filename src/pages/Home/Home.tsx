import React, { FC, useEffect } from 'react'
import { useMainContext } from '@components/providers/MainProvider'
import { getGamesList } from '@games/common/data/gamesList'
import { CardGameUI } from '@components/UI/CardGameUI'
import { Container, Grid } from './styles'
import { Props } from './types'

const Home: FC<Props> = () => {
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Cursor-games')
  }, [])

  return (
    <>
      <Container>
        <Grid id='grid'>
          {getGamesList().map((card) => (
            <CardGameUI key={card.id} card={card}/>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export const HomeTSX = Home
