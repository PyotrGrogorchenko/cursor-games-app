import styled from 'styled-components'
import { Props } from './types'

const transTime = '.3s'

export const Container = styled.div(() => `
  position: relative;
  margin: 0;
  width: 100%;
`)

export const InputStyled = styled.input<Props>((props) => `
  ${props.theme.mixins.fontFamily}
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  font-size: ${props.theme.sizing.input.m};
  color: ${props.theme.palette.primary};
  outline: none;
  background: none;
  padding: 10px 0 5px 0;
  border: 0;
  border-bottom: 1px solid ${props.theme.palette.tertiary};
`)

export const Label = styled.label<Props>((props) => {
  const { inputValue } = props
  return `
  margin: 0;
  ${props.theme.mixins.fontFamily}
  position: absolute;
  left: 0;
  top: ${inputValue ? '-.4rem' : '.75rem'};
  font-size: ${props.theme.sizing.input.s};
  color: ${props.theme.palette.tertiary};
  transition: color ${transTime} ease-in, top ${transTime} ease-in;
  
  ${InputStyled}:hover ~ & {
    transition: ${transTime};
    color: ${props.theme.palette.primary};
  } 
  ${InputStyled}:focus ~ & {
    transition: ${transTime};
    top: -.4rem;
    color: ${props.theme.palette.common};
  } 
`
})

export const FocusBorder = styled.span((props) => `
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  transition: width ${transTime} ease-out, height ${transTime} cubic-bezier(1, 1, 1, 1);
  background-color: ${props.theme.palette.tertiary};

  ${InputStyled}:hover ~ & {
    height: 2px;
    transition: ${transTime};
    background-color: ${props.theme.palette.primary};
    width: 100%;
  } 
  ${InputStyled}:focus ~ & {
    height: 2px;
    transition: ${transTime};
    background-color: ${props.theme.palette.common};
    width: 100%;
  } 
`)
