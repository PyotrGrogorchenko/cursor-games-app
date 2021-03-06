import React, {
  createContext, FC, useContext, useState
} from 'react'
import { Props, Context } from './types'

const MainContext = createContext<Partial<Context>>({})
export const useMainContext = (): Context => useContext(MainContext) as Context

const MainProvider: FC<Props> = (props) => {
  const { children } = props

  const [menuOpen, setMenuOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [openModal, setOpenModal] = useState(false)

  return (
    <MainContext.Provider value={{
      menuOpen,
      setMenuOpen,
      title,
      setTitle,
      openModal,
      setOpenModal
    } as Context}>
      {children}
    </MainContext.Provider>
  )
}

export const MainProviderTSX = MainProvider
