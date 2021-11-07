import styled, { keyframes } from 'styled-components'

const start = keyframes`
  0% {
    left: -150%;
    padding: 0;
    max-height: 0;
    margin-bottom: 0;

  }
  50% {
    left: -150%;
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

export const Container = styled.div<{animationDuration: number, deleteTime: Date | null}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  min-width: 300px;
  border-radius: 10px;
  position: relative;
  bottom: 0;

  ${(props => (props.deleteTime
    ? 'left: -150%; padding: 0; max-height: 0; margin-bottom: 0;'
    : 'left: 0; padding: 10px; max-height: 100px; margin-bottom: 10px;'))}

  animation: ${start} ${(props => String(props.animationDuration))}s linear 1 reverse ${(props => (props.deleteTime ? 'running' : 'paused'))},
    ${start} ${(props => String(props.animationDuration))}s linear 1 running;
`
