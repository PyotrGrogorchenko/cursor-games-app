import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export type Context = {
  menuOpen: boolean,
  setMenuOpen: (val: boolean) => void
  title: string
  setTitle: (val: string) => void,
  openModal: boolean
  setOpenModal: (val: boolean) => void
}
