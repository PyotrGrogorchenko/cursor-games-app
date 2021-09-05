import styled from 'styled-components'

export const Container = styled.a(() => {
  const color = '#ffffff'

  return `
  font-size: 15px;
  padding: 3px 5px 3px 5px;
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  background: ${color};
  transition-duration: 300ms;
  // color: red;

  &:hover {
    filter: brightness(95%);
  } 
`
})
