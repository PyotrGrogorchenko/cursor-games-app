import { Themes } from '@theme'
import styled from 'styled-components'

export const Container = styled.div<{themeName?: Themes}>((props) => `
  display: flex;
  flex-direction: column;
  width: 240px;
  ${props.themeName === 'dark' ? 'filter: invert(100%);' : ''}
  :hover {
    filter: invert(30%);
  }
`)

export const Img = styled.img(() => `
  height 200px;
  width: 240px;
`)

export const Title = styled.h3((props) => `
  text-align: center;
  color: ${props.theme.palette.dark};
  font-size: ${props.theme.sizing.text.h5};
`)
