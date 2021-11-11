import styled from 'styled-components'
import { Props } from './types'

const transTime = '.3s'

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`)

export const InputStyled = styled.input<Props>((props) => `
  ${props.theme.mixins.fontFamily}
  width: 100%;
  font-size: ${props.theme.sizing.input.m};
  color: ${props.theme.palette.primary};
  outline: none;
  background: none;
  padding: 10px 0 5px 0;
  border: 0;
  border-bottom: 1px solid ${props.theme.palette.tertiary};
  transition: border-bottom ${transTime} ease-out;
  :focus, :hover {
    border-bottom: 1px solid ${props.theme.palette.common};
  }
`)

export const Label = styled.label<Props>((props) => {
  const { val } = props
  return `
  ${props.theme.mixins.fontFamily}
  position: absolute;
  left: 0;
  top: ${val ? '-.7rem' : '.75rem'};
  font-size: ${val ? props.theme.sizing.input.s : props.theme.sizing.input.m};
  color: ${props.theme.palette.tertiary};
  transition: color ${transTime} ease-in, top ${transTime} ease-in, font-size ${transTime} ease-in;
  
  ${InputStyled}:hover ~ & {
    transition: ${transTime};
    color: ${props.theme.palette.common};
  } 
  ${InputStyled}:focus ~ & {
    transition: ${transTime};
    top: -.7rem;
    color: ${props.theme.palette.common};
    font-size: ${props.theme.sizing.input.s};
  } 
`
})

export const FocusBorder = styled.span((props) => `
  width: 0%;
  height: 2px;
  transition: width ${transTime} ease-out, background-color ${transTime} ease-out;
  background-color: ${props.theme.palette.tertiary};

  ${InputStyled}:hover ~ & {
    height: 2px;
    transition: ${transTime};
    background-color: ${props.theme.palette.common};
    width: 100%;
  } 
  ${InputStyled}:focus ~ & {
    height: 2px;
    transition: ${transTime};
    background-color: ${props.theme.palette.common};
    width: 100%;
  } 
`)

export const ErrSpan = styled.span((props) => `
  width: 100%;
  ${props.theme.mixins.fontFamily}
  color: ${props.theme.palette.error};
  font-size: ${props.theme.sizing.input.s};
  margin-top: 3px;
`)
