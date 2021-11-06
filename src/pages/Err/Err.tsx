import React, { FC, useCallback } from 'react'
import { Button } from '@components/UI/Button'
import { useHistory } from 'react-router-dom'
import { Props } from './types'
import { Container, Header, Message } from './styles'

const Err: FC<Props> = (props: Props) => {
  const { error, errorInfo, hideBtn } = props
  const history = useHistory()

  const onClick = useCallback((e: OnClick) => {
    e.preventDefault()
    history.goBack()
  }, [history])

  return (
    <Container>
      <Header>
        {error || 'Sorry'}
      </Header>
      <Message>
        {errorInfo || 'Something went wrong'}
      </Message>
      { !hideBtn && (
        <Button
          color='primary'
          onClick={onClick}
        >
          Back
        </Button>
      ) }
    </Container>
  )
}

export const ErrTSX = Err
