import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDispatch } from 'react-redux'
import { Layout } from '@components/Layout'
import { MainRouter } from '@components/routers/MainRouter'
import { user } from '@saga/auth/actions'
import { NotiProvider } from '@components/UI/Noti/NotiProvider'
import { NotiError } from '@components/UI/NotiError'
import { HistoryListener } from '@components/routers/HistoryListener'
import { BurgerMenu } from '@components/UI/BurgerMenu'
import { MainProvider } from '@components/providers/MainProvider'
import { GlobalStyle } from '@components/GlobalStyle'
import { getTheme } from '@theme'
import { themeSelector } from '@store/selectors'

export const App = () => {
  const theme = themeSelector()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(user())
  }, [])

  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle/>
        <NotiProvider>
          <MainProvider>
            <NotiError/>
            <HistoryListener/>
            <BurgerMenu/>
            <Layout>
              <MainRouter/>
            </Layout>
          </MainProvider>
        </NotiProvider>
      </ThemeProvider>
    </>
  )
}
