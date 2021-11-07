import React, {
  FC, useCallback, useState, createContext, useContext, useEffect
} from 'react'
import { Noti, Message } from '@components/providers/Noti'
import { Props, Context } from './types'
import { Container } from './styles'

// @ts-ignore
const NotiContext = createContext<Context>({})
export const useNoti = (): Context => useContext(NotiContext)

function getIdFunc() {
  let id = 1
  return () => id++
}

let timerId: NodeJS.Timer | null = null

const NotiProvider: FC<Props> = (props) => {
  const { children } = props
  const [stack, setStack] = useState<{message: Message, deleteTime: Date | null}[]>([])
  const getId = useCallback(getIdFunc(), [])

  const clearStack = useCallback(() => {
    setStack(prev => prev.filter(noti => {
      if (!noti.deleteTime) return true
      return (+new Date() - +noti.deleteTime) < 1000
    }))
  }, [stack])

  const setTimer = useCallback(() => {
    timerId = setInterval(() => {clearStack()}, 1000)
  }, [stack])

  useEffect(() => {
    setTimer()
    return () => {if (timerId) clearInterval(timerId)}
  }, [])

  const onClose = useCallback((id: number, deleteTime: null | Date) => {
    stack.forEach((item) => {
      if (item.message.id === id) {
        item.deleteTime = deleteTime
      }
    })
  }, [stack])

  const pushNoti = useCallback((text: string, type: string = 'info') => {
    stack.push({
      message: {
        text,
        type,
        id: getId()
      },
      deleteTime: null
    })
    setStack([...stack])
  }, [stack])

  return (
    <>
      <NotiContext.Provider value={{ pushNoti }}>
        <Container>
          {stack.map((noti) => <Noti key={noti.message.id} {...noti.message} onClose={onClose}/>)}
        </Container>
        {children}
      </NotiContext.Provider>
    </>
  )
}
export const NotiProviderTSX = NotiProvider
