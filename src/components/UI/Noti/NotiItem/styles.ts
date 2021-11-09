import styled, { keyframes } from 'styled-components'
import { ContainerProps } from './types'

const start = keyframes`
  0% {
    left: -120%;
    padding: 0;
    max-height: 0;
    margin-bottom: 0;

  }
  50% {
    left: -120%;
    padding: 10px;
    max-height: 100px;
    margin-bottom: 10px;
  }
  100% {
    left: 0;
    padding: 10px;
    max-height: 100px;
    margin-bottom: 10px;
  }
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.colors[props.type].concat(props.opacity.toString(16))};
  font-size: ${props => props.theme.sizing.text.h6};
  min-width: 300px;
  border-radius: 10px;
  position: relative;
  bottom: 0;

  ${(props => (props.deletedAt
    ? 'left: -120%; padding: 0; max-height: 0; margin-bottom: 0;'
    : 'left: 0; padding: 10px; max-height: 100px; margin-bottom: 10px;'))}

  animation: ${start} ${(props => String(props.animationDuration))}s linear 1 reverse ${(props => (props.deletedAt ? 'running' : 'paused'))},
    ${start} ${(props => String(props.animationDuration))}s linear 1 running;
`
