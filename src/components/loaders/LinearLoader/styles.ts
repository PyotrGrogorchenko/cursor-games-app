import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 4px;
  z-index: 1100;
  :before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.palette.common};
    filter: opacity(30%);
  }

}
`

const slider = (main: boolean) => (keyframes`
  0% {
    left: ${main ? '-100' : '-150'}%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`)

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  :before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${props => props.theme.palette.common};
    animation: ${slider(true)} 1s infinite ease-out;
  }
  
  :after {
    content: '';
    position: absolute;
    height: 100%;
    filter: opacity(50%);
    background-color: ${props => props.theme.palette.common};
    animation: ${slider(false)} 1s infinite ease-in;
  } 

}
`
