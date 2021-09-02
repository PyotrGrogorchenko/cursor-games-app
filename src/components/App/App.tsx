import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Layout } from '@components/Layout'
import { MainRouter } from '@components/routers/MainRouter'
import { user } from '@saga/auth/actions'
import { NotiProvider } from '@components/providers/NotiProvider'
import { NotiError } from '@components/UI/NotiError'
import { HistoryListener } from '@components/routers/HistoryListener'
import { BurgerMenu } from '@components/UI/BurgerMenu'
import { MainProvider } from '@components/providers/MainProvider'
import { GlobalStyle } from '@components/GlobalStyle'

const theme = createMuiTheme()

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(user())}, [])

  return (
    <>
      <ThemeProvider theme={theme}>
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
