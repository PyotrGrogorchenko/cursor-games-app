import styled from 'styled-components'

export const Container = styled.div(() => `
  position: fixed;
  z-index: 2000;

  bottom: 0;
  left: 0;
  display: flex;
  padding: 20px;
  flex-direction: column;
`)
