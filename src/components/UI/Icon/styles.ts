import styled from 'styled-components'
import { Props } from './types'

export const I = styled.i<Props>((props) => `
font-size: ${String(10 + 5 * props.theme.sizing.m)}px;  
color: ${props.theme.palette.primary};
`)
