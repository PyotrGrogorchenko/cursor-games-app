import React, {
  FC, useEffect, useMemo, useRef, useState
} from 'react'
import { cloneDeep } from 'lodash'
import { isGame } from '@games/common/utils/conditions'
import { initialState, Props } from './types'
import { Container, Canvas } from './styles'
import { edge, header } from '../const'
import { drawHeader, drawScreen } from './utils'

let ctx: Ctx

const View: FC<Props> = (props) => {
  const [state, setState] = useState(cloneDeep(initialState))
  const { model } = props
  const {
    height, width, condition, score, items, scoreBest
  } = model
  const ctxWidth = useMemo(() => edge * width, [])
  const ctxHeight = useMemo(() => edge * height + header, [])
  const refCanvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {}, [])

  useEffect(() => {
    if (refCanvas) ctx = refCanvas.current?.getContext('2d') as Ctx
  }, [refCanvas])

  useEffect(() => {
    drawScreen(ctx, model, { state, setState })
  }, [condition])

  useEffect(() => {
    drawHeader(ctx, model)
  }, [score, scoreBest, condition])

  useEffect(() => {
    if (!isGame(model)) return
    drawScreen(ctx, model, { state, setState })
  }, [items])

  return (
    <Container>
      <Canvas
        id='canvas'
        width={ctxWidth}
        height={ctxHeight}
        ref={refCanvas}
      >
        Your browser is not supported canvas
      </Canvas>
    </Container>
  )
}

export const ViewTSX = View
