import styled from 'styled-components'
import { Props } from './types'

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
  box-sizing: border-box;
  padding: 10px 0 5px 0;
  border: 0;
`)

export const Label = styled.label((props) => `
  margin: 0;
  ${props.theme.mixins.fontFamily}
  position: absolute;
  left: 0;
  top: -.4rem;
  font-size: ${props.theme.sizing.input.s};
  color: ${props.theme.palette.tertiary};
  transition: color 200ms ease-in;
  
  ${InputStyled}:hover ~ & {
    transition: .2s;
    color: ${props.theme.palette.primary};
  } 
  ${InputStyled}:focus ~ & {
    transition: .2s;
    color: ${props.theme.palette.common};
  } 
`)

export const FocusBorder = styled.span((props) => `
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  transition: .2s;
  background-color: ${props.theme.palette.tertiary};

  ${InputStyled}:hover ~ & {
    height: 2px;
    transition: .2s;
    background-color: ${props.theme.palette.primary};
  } 
  ${InputStyled}:focus ~ & {
    height: 2px;
    transition: .2s;
    background-color: ${props.theme.palette.common};
  } 
`)
