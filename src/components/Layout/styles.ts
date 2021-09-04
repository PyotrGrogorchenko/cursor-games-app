import styled from 'styled-components'

// type CellProps = {
//   flexGrow?: number
//   color?: string
//   width?: string
// }
// flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height 40px;
  width: 100%;
  background-color:#ffffff;
  box-shadow: inset 0 -1px 0 #e6e6e6;
 `

type CellProps = {
  flexGrow?: number
  color?: string
  width?: string
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right'
}

export const Cell = styled.div<CellProps>`
 display: flex;
 justify-content: ${props => props.justifyContent || 'center'};
 align-items: center;
 ${props => `width: ${props.width}` || ''};
 height: 100%;
 background-color:${props => props.color || '#ffffff'};
 box-shadow: inset 0 -1px 0 #e6e6e6;
 
 flex-grow: ${props => props.flexGrow || 1};
`
