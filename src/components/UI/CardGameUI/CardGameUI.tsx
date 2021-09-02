import React, { FC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Props } from './types'
import { Container, Img, Title } from './styles'

const CardGameUI: FC<Props> = (props: Props) => {
  const { card } = props
  const history = useHistory()

  const onClickCard = useCallback((e: OnClick, cardId: string) => {
    e.preventDefault()
    history.push(`/game/${cardId}`)
  }, [])

  return (
    <>
      <Container onClick={(e) => onClickCard(e, card.id)}>
        <Img src={`/static/logo/game-${card.id}.svg`}/>
        <Title>{card.title}</Title>
      </Container>
    </>
  )
}

export const CardGameUITSX = CardGameUI
