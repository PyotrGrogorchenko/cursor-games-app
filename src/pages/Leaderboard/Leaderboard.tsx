import React, { FC, useEffect } from 'react'
import { useMainContext } from '@components/providers/MainProvider'
import { Header, Container } from './styles'

const Leaderboard: FC = () => {
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Leaderboard')
  }, [])

  return (
    <Container>
      <Header>Leaderboard</Header>
    </Container>
  )
}
export const LeaderboardTSX = Leaderboard
