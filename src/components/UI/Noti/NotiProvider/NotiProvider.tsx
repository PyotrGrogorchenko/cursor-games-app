import React, {
  FC, useCallback, useState, createContext, useContext, useEffect
} from 'react'
import { NotiItem, Message, NotiTypes } from '@components/UI/Noti/NotiItem'
import { useTheme } from 'styled-components'
import { Props, Context } from './types'
import { Container } from './styles'
import { getColors } from './utils'

const NotiContext = createContext<Partial<Context>>({})
export const useNoti = (): Context => useContext(NotiContext) as Context

function getIdFunc() {
  let id = 1
  return () => id++
}

let timerId: NodeJS.Timer | null = null

const NotiProvider: FC<Props> = (props) => {
  const {
    children, colors, opacity = 150, animationDuration = 0.5
  } = props
  const [stack, setStack] = useState<Message[]>([])
  const getId = useCallback(getIdFunc(), [])
  const theme = useTheme()

  const clearStack = useCallback(() => {
    setStack(prev => [...prev.filter(message => {
      if (!message.deletedAt) {
        if ((+new Date() - +message.createdAt) > 4000) {
          message.deletedAt = new Date()
        }
        return true
      }
      return (+new Date() - +message.deletedAt) < 1000
    })])
  }, [stack])

  const setTimer = useCallback(() => {
    timerId = setInterval(() => {clearStack()}, 100)
  }, [stack])

  useEffect(() => {
    setTimer()
    return () => {if (timerId) clearInterval(timerId)}
  }, [])

  // public
  const pushNoti = useCallback((text: string, type: NotiTypes = 'info') => {
    stack.push({
      text, type, id: getId(), createdAt: new Date()
    })
    setStack([...stack])
  }, [stack])

  const markNoti = useCallback((id: number, deletedAt?: Date) => {
    stack.forEach((message) => {
      if (message.id === id) {
        message.deletedAt = deletedAt
      }
    })
  }, [stack])

  const getData = useCallback(() => ({
    colors: getColors(theme, colors),
    opacity,
    animationDuration
  }), [theme, colors])

  return (
    <>
      <NotiContext.Provider value={{ pushNoti, markNoti, getData }}>
        <Container>
          {stack.map((message) => <NotiItem key={message.id} {...message}/>)}
        </Container>
        {children}
      </NotiContext.Provider>
    </>
  )
}
export const NotiProviderTSX = NotiProvider
