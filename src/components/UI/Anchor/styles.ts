import styled from 'styled-components'
import { Props } from './types'

export const Container = styled.a<Props>((props) => `
  font-size: 15px;
  padding: 3px 5px 3px 5px;
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  font-size: ${String(10 + 5 * props.theme.sizing[props.size || 'm'])}px;
  color: ${props.theme.palette.primary};
  background-color: inherit;
  transition-duration: 300ms;
  &:hover {
    filter: brightness(95%);
  } 
`)
