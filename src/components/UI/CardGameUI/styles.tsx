import styled from 'styled-components'

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  width: 240px;
  &:hover {
    filter: invert(30%);
  }
`)

export const Img = styled.img(() => `
  height 200px;
  width: 240px;
`)

export const Title = styled.h3((props) => `
  text-align: center;
  color: ${props.theme.palette.primary};
  font-size: ${props.theme.sizing.text.h5};
`)
