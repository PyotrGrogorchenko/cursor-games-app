import styled from 'styled-components'
import { Props } from './types'

export const Container = styled.div(() => `
  position: relative;
  margin: 0;
  width: 100%;
`)

export const InputStyled = styled.input<Props>((props) => `
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  font-size: ${props.theme.sizing.button.m};
  color: ${props.theme.palette.primary};
  outline: none;
  background: none;
  box-sizing: border-box;
  padding: 7px 0 7px 0;
  border: 0;
  border-bottom: 1px solid ${props.theme.palette.tertiary};
  ::placeholder {
    color: rgb(0, 0, 0, 0);
  }
`)

export const Label = styled.label((props) => `margin: 0;
  position: absolute;
  left: 0;
  top: .55rem;
  font-size: ${props.theme.sizing.button.m};
  color: ${props.theme.palette.tertiary};
  transition: top 200ms ease-in, font-size 200ms ease-in, color 200ms ease-in;
  ${InputStyled}:focus ~ &,
  ${InputStyled}:not(${InputStyled}:placeholder-shown) ~ & {
    top: -.4rem;
    font-size: ${props.theme.sizing.button.s};
    color: ${props.theme.palette.common};
  }
  ${InputStyled}:not(${InputStyled}:focus) ~ & {
    color: ${props.theme.palette.tertiary};
  }
`)

export const FocusBorder = styled.span((props) => `
  ${InputStyled} ~ & {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: .2s;
  }
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
