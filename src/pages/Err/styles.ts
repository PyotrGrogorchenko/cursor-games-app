import styled from 'styled-components'

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
 `)

export const Header = styled.h1((props) => `
  font-size: ${props.theme.sizing.text.h3};
  margin-bottom: 20px;
`)

export const Message = styled.h2((props) => `
  font-size: ${props.theme.sizing.text.h5};
  margin-bottom: 20px;
`)
