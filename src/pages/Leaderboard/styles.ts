import styled from 'styled-components'

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`)

export const Header = styled.h1((props) => `
  font-size: ${props.theme.sizing.text.h3};
`)
