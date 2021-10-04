import styled from 'styled-components'
import { Props } from './types'

export const I = styled.i<Props>((props) => `
font-size: ${props.theme.sizing.button[props.size || 'm']};  
color: ${props.theme.palette.primary};
`)
