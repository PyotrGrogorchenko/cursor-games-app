import styled from 'styled-components'
import { Props } from './types'

export const Container = styled.button<Props>((props) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 5px 3px 5px;
  font-size: ${props.theme.sizing.button[props.size || 'm']};
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  transition-duration: 300ms;
  background-color: ${props.theme.palette.secondary};
  &:hover {
    filter: brightness(95%);
  } 
`)
