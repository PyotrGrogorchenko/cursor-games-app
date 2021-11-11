import styled from 'styled-components'
import { Props } from './types'

export const Container = styled.div(() => `
  position: sticky;
  top: 0;
  z-index: 1200;
`)

export const Nav = styled.nav<Props & {open: boolean}>((props) => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  position: absolute;
  z-index: 1200;
  background-color: ${props.theme.palette.secondary};
  height: 100vh;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 200px;
  box-shadow: inset -1px 0 0 ${props.theme.palette.shadow};
  padding: 0 10px;

  transform: ${props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform .3s ease-in-out;
`)

export const Header = styled.div<Props>(() => `
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`)

export const Links = styled.div<Props>(() => `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`)

export const Backdrop = styled.div(() => `
  z-index: 1150;
  position: fixed;
  background-color: rgba(0, 0, 0, .3);
  transition: background-color .3s ease-in-out;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`)
