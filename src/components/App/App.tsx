import { ThemeProvider as ThemeProviderMui, createMuiTheme } from '@material-ui/core'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
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
import { getTheme } from 'src/theme'

// const palette = {
//   primary: '#333333',
//   secondary: '#ffffff',
//   error: '#ed4b48',
//   warning: '#ffb400',
//   success: '#26b47f'
// }
// export type Color = keyof typeof palette

// const spacing = {
//   s: 1,
//   m: 2,
//   l: 3
// }
// export type Size = keyof typeof spacing

// const theme = {
//   palette,
//   spacing
// }

const themeMui = createMuiTheme()

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(user())}, [])

  return (
    <>
      <ThemeProviderMui theme={themeMui}>
        <ThemeProvider theme={getTheme()}>
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
      </ThemeProviderMui>
    </>
  )
}
