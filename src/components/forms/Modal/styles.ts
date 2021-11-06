import { Props } from '@components/providers/MainProvider/types'
import styled from 'styled-components'

export const Backdrop = styled.div(() => `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  left: 0;
`)

export const Container = styled.div<Props>((props) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props.theme.palette.secondary};
  padding: 20px 20px 0 20px;
`)

export const Content = styled.div(() => `
  display: flex;
`)

export const Actions = styled.div(() => `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-top: 20px;
`)
