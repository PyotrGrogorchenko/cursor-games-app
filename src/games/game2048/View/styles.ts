import { CanvasHTMLAttributes } from 'react'
import styled from 'styled-components'

export const Container = styled.div(() => `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100%
`)

export const Canvas = styled.canvas<CanvasHTMLAttributes<HTMLCanvasElement>>((props) => `
  border: 5px solid,
  borderColor: ${props.theme.palette.primary}
`)
