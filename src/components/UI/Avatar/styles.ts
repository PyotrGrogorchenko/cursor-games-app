import styled from 'styled-components'
import { Props } from './types'

export const Box = styled.div(() => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)

export const InputFile = styled.input(() => `
  display: none;
`)

export const AvatarImg = styled.img<Props>((props) => {
  const { size } = props
  return `
    width: ${(size === 'm' && '100px') || (size === 'l' && '200px') || '20px'};
    height: ${(size === 'm' && '100px') || (size === 'l' && '200px') || '20px'};
    margin: 5px;
    border-radius: 50%; 
  `
})
