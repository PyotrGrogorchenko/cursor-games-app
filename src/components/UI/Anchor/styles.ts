import styled from 'styled-components'
import { Props } from './types'

export const Container = styled.a<Props>((props) => `
  font-size: 15px;
  padding: 3px 5px 3px 5px;
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  font-size: ${props.theme.sizing.button[props.size || 'm']}px;
  color: ${props.theme.palette.tertiary};
  background-color: ${props.theme.palette.secondary};
  transition-duration: 300ms;
  &:hover {
    color: ${props.theme.palette.common};
  } 
`)
