import styled from 'styled-components'
import { Props } from './types'

export const Container = styled.button<Props>((props) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 5px 3px 5px;
  font-size: ${String(8 + 5 * props.theme.sizing[props.size || 'm'])}px;
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  transition-duration: 300ms;
  background-color: inherit;
  &:hover {
    filter: brightness(95%);
  } 
`)
