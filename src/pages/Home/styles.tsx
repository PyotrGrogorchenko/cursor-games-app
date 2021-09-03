import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height 90vh;
  width: 100%;
  align-items: center;
`

export const Grid = styled.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  flex-wrap: wrap;
  margin: 30px 0 0 0;
`

export const GridItem = styled.div`
  display: flex;
  height: 200px;
  width: 240px;
  background-color: green;
  margin: 10px;
`
