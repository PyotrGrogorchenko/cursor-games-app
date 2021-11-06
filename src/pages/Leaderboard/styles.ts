import styled from 'styled-components'

export const Container = styled.div((props) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props.theme.palette.secondary}
`)

export const Header = styled.h1((props) => `
  font-size: ${props.theme.sizing.text.h3};
`)
