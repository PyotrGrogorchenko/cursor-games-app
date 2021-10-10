import styled from 'styled-components'
import { CellProps } from './types'

export const Container = styled.div((props) => `
  display: grid;
  background-color: ${props.theme.palette.secondary};
  box-shadow: inset 0 -1px 0 ${props.theme.palette.shadow};
  grid-template-columns: 5% 10% 15% 40% 30%;
`)

export const Cell = styled.div<CellProps>((props) => `
 display: flex;
 flex-direction: row;
 justify-content: ${props.justifyContent || 'center'};
 align-items: center;
`)
