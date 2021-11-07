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

// const opacity = 0.7

// export const notiClasses = {
//   success: `{ backgroundColor: green, ${opacity} }`,
//   error: `{ backgroundColor: red, ${opacity} }`,
//   warning: `{ backgroundColor: purple, ${opacity} }`,
//   info: `{ backgroundColor: blue, ${opacity} }`
// }
