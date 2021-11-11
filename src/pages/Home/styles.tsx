import styled from 'styled-components'

export const Container = styled.div((props) => `
  display: grid;
  grid-template-columns: 240px 240px;
  padding: 20px;
  grid-gap: 20px;
  justify-content: center;
  @media (max-width: ${props.theme.breakpoints.mobileLandscape}) {
    grid-template-columns: 240px;
  }
`)
