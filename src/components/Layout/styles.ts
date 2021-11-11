import styled from 'styled-components'
import { CellProps } from './types'

export const Container = styled.div((props) => `
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: ${props.theme.palette.secondary};
`)

export const Grid = styled.div((props) => `
  display: grid;
  box-shadow: inset 0 -1px 0 ${props.theme.palette.shadow};
  grid-template-columns: 5% 10% 15% 40% 30%;
  position: sticky;
  top: 0;
`)

export const Cell = styled.div<CellProps>((props) => `
  display: flex;
  flex-direction: row;
  justify-content: ${props.justifyContent || 'center'};
  align-items: center;
`)

export const Title = styled.span((props) => `
  font-size: ${props.theme.sizing.text.h5};
  color: ${props.theme.palette.primary};
`)
