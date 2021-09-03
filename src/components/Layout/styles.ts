import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height 40px;
  width: 100%;
  background-color:red;
 `

type CellProps = {
  flexGrow?: number
  color?: string
  width?: string
}

export const Cell = styled.div<CellProps>`
 display: flex;
 justify-content: center;
 align-items: center;
 ${props => `width: ${props.width}` || ''};
 height: 100%;
 background-color:${props => props.color || 'blue'};
 margin: 0 5px 0 5px;
 flex-grow: ${props => props.flexGrow || 1};
`
